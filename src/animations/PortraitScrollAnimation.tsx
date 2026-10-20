import React, { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { portraitManifest, TOTAL_MANIFEST_FRAMES } from '../data/manifest';

gsap.registerPlugin(ScrollTrigger);

interface PortraitScrollAnimationProps {
  onLoadingProgress?: (progress: number) => void;
  children?: React.ReactNode;
}

export const PortraitScrollAnimation: React.FC<PortraitScrollAnimationProps> = ({
  onLoadingProgress,
  children
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinWrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [loadingPercent, setLoadingPercent] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  // References for animation state across renders
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const loadedMapRef = useRef<boolean[]>(new Array(TOTAL_MANIFEST_FRAMES).fill(false));
  const currentProgressRef = useRef<number>(0);
  const targetProgressRef = useRef<number>(0);
  const lastRenderedIndexRef = useRef<number>(-1);
  const rafIdRef = useRef<number>(0);

  // Draw image to canvas using aspect-ratio preserving cover
  const drawCover = useCallback((img: HTMLImageElement) => {
    const canvas = canvasRef.current;
    if (!canvas || !img || !img.complete || img.naturalWidth === 0) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;

    // Cover calculation
    const scale = Math.max(cw / iw, ch / ih);
    const nw = iw * scale;
    const nh = ih * scale;
    const nx = (cw - nw) * 0.5;
    const ny = (ch - nh) * 0.5;

    ctx.drawImage(img, nx, ny, nw, nh);
  }, []);

  // Find nearest loaded frame to guarantee zero blank flashes
  const getNearestLoaded = useCallback((targetIndex: number) => {
    const map = loadedMapRef.current;
    if (map[targetIndex]) return targetIndex;

    for (let offset = 1; offset < TOTAL_MANIFEST_FRAMES; offset++) {
      const down = targetIndex - offset;
      if (down >= 0 && map[down]) return down;
      const up = targetIndex + offset;
      if (up < TOTAL_MANIFEST_FRAMES && map[up]) return up;
    }
    return -1;
  }, []);

  // Resize canvas to window dimensions with DPR capping
  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = window.innerWidth;
    const h = window.innerHeight;

    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);

    const ctx = canvas.getContext('2d', { alpha: false });
    if (ctx) {
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
    }

    const activeIndex = lastRenderedIndexRef.current >= 0 ? lastRenderedIndexRef.current : 0;
    const img = imagesRef.current[activeIndex];
    if (img && loadedMapRef.current[activeIndex]) {
      drawCover(img);
    }
  }, [drawCover]);

  // Preload all frames from manifest
  useEffect(() => {
    let loadedCount = 0;
    const total = TOTAL_MANIFEST_FRAMES;
    const imgs: HTMLImageElement[] = new Array(total);

    // Initial frame loaded first for immediate display
    const firstImg = new Image();
    firstImg.src = portraitManifest[0].path;
    firstImg.onload = () => {
      loadedMapRef.current[0] = true;
      loadedCount++;
      drawCover(firstImg);
      lastRenderedIndexRef.current = 0;
    };
    imgs[0] = firstImg;

    // Preload remaining frames
    for (let i = 1; i < total; i++) {
      const img = new Image();
      img.src = portraitManifest[i].path;
      img.onload = () => {
        loadedMapRef.current[i] = true;
        loadedCount++;
        const pct = Math.round((loadedCount / total) * 100);
        setLoadingPercent(pct);
        if (onLoadingProgress) onLoadingProgress(pct);

        if (loadedCount >= total) {
          setIsLoaded(true);
        }
      };
      if ('decode' in img) {
        img.decode().catch(() => {});
      }
      imgs[i] = img;
    }

    imagesRef.current = imgs;
    handleResize();

    window.addEventListener('resize', handleResize, { passive: true });
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [drawCover, handleResize, onLoadingProgress]);

  // Setup GSAP ScrollTrigger & render loop
  useEffect(() => {
    const container = containerRef.current;
    const pinWrapper = pinWrapperRef.current;
    if (!container || !pinWrapper) return;

    // Create GSAP ScrollTrigger to pin the canvas during the 200vh head-turn sequence
    const trigger = ScrollTrigger.create({
      trigger: container,
      start: 'top top',
      end: 'bottom bottom',
      pin: pinWrapper,
      scrub: 0.5,
      onUpdate: (self) => {
        targetProgressRef.current = Math.min(1, Math.max(0, self.progress));
      }
    });

    // Inertia render loop
    const LERP = 0.085;
    const render = () => {
      const delta = targetProgressRef.current - currentProgressRef.current;
      if (Math.abs(delta) > 0.00005) {
        currentProgressRef.current += delta * LERP;
      } else {
        currentProgressRef.current = targetProgressRef.current;
      }

      // Map progress (0..1) to frame index in manifest
      const desiredIndex = Math.min(
        TOTAL_MANIFEST_FRAMES - 1,
        Math.max(0, Math.round(currentProgressRef.current * (TOTAL_MANIFEST_FRAMES - 1)))
      );

      const frameToDraw = getNearestLoaded(desiredIndex);
      if (frameToDraw >= 0 && frameToDraw !== lastRenderedIndexRef.current) {
        const targetImg = imagesRef.current[frameToDraw];
        if (targetImg) {
          drawCover(targetImg);
          lastRenderedIndexRef.current = frameToDraw;
        }
      }

      rafIdRef.current = requestAnimationFrame(render);
    };

    rafIdRef.current = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafIdRef.current);
      trigger.kill();
    };
  }, [drawCover, getNearestLoaded]);

  return (
    <div
      ref={containerRef}
      id="hero-scroll-container"
      className="relative w-full h-[260vh] bg-obsidian-950"
    >
      {/* Pinned Viewport Container */}
      <div
        ref={pinWrapperRef}
        className="sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center justify-center pointer-events-none"
      >
        {/* Canvas for head turn animation */}
        <canvas
          ref={canvasRef}
          className="w-full h-full block object-cover"
          style={{ willChange: 'transform' }}
        />

        {/* Cinematic Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-obsidian-950/70 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian-950/80 via-transparent to-obsidian-950/80 pointer-events-none" />

        {/* Content Overlay (Typography, CTA, Scroll prompt) */}
        <div className="absolute inset-0 pointer-events-auto z-10 flex flex-col justify-between p-6 md:p-12 lg:p-16 max-w-7xl mx-auto w-full">
          {children}
        </div>

        {/* Minimalist Loading Bar (Fades out when loaded) */}
        {!isLoaded && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 pointer-events-none transition-opacity duration-700">
            <span className="text-xs uppercase tracking-widest text-slate-400 font-mono">
              Loading Cinematic Frames • {loadingPercent}%
            </span>
            <div className="w-48 h-1 bg-obsidian-800 rounded-full overflow-hidden border border-white/10">
              <div
                className="h-full bg-gradient-to-r from-cinematic-violet via-cinematic-crimson to-cinematic-rose transition-all duration-200"
                style={{ width: `${loadingPercent}%` }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
