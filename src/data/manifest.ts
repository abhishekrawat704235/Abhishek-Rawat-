/**
 * =======================================================================
 * PORTRAIT ANIMATION IMAGE MANIFEST
 * =======================================================================
 * 
 * This manifest defines the exact image sequence for the scroll-controlled
 * hero head-turning animation.
 * 
 * Frame Orientation Summary:
 * - ezgif-frame-240.jpg: Full left-profile (looking towards the left)
 * - ezgif-frame-180.jpg: ~70° angle turning towards front
 * - ezgif-frame-120.jpg: ~40° quarter-turn angle with warm smile
 * - ezgif-frame-060.jpg: ~15° near-frontal angle
 * - ezgif-frame-001.jpg: 0° direct frontal view (looking straight at viewer)
 * 
 * Default Sequence:
 * Arranged from Frame 240 (Left-Profile) down to Frame 001 (Direct Frontal),
 * so that as the user scrolls down, Abhishek's face smoothly turns from
 * looking left to looking directly at the viewer.
 * 
 * HOW TO CUSTOMIZE:
 * - You can reorder items in this array, remove intermediate frames,
 *   or add new frames. The animation canvas will automatically respect
 *   the exact order defined here!
 */

export interface PortraitFrame {
  id: number;
  filename: string;
  path: string;
  angleDescription?: string;
}

// Generate the 240-frame sequence (240 -> 001)
const frames: PortraitFrame[] = [];

for (let i = 240; i >= 1; i--) {
  const padded = String(i).padStart(3, '0');
  const filename = `ezgif-frame-${padded}.jpg`;
  
  let angle = 'Intermediate Angle';
  if (i >= 220) angle = 'Left Profile';
  else if (i >= 160) angle = 'Three-Quarter Left Turn';
  else if (i >= 100) angle = 'Mid Turn (Approaching Center)';
  else if (i >= 30) angle = 'Near Frontal Angle';
  else angle = 'Direct Frontal View';

  frames.push({
    id: 241 - i,
    filename,
    path: `/images/portrait/${filename}`,
    angleDescription: angle,
  });
}

export const portraitManifest: PortraitFrame[] = frames;

/**
 * Total frame count in the active sequence
 */
export const TOTAL_MANIFEST_FRAMES = portraitManifest.length;

/**
 * Helper to get frame path by sequence index (0 to TOTAL_MANIFEST_FRAMES - 1)
 */
export function getFramePathByIndex(index: number): string {
  const clamped = Math.max(0, Math.min(TOTAL_MANIFEST_FRAMES - 1, index));
  return portraitManifest[clamped].path;
}
