import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { portfolioData } from '../data/portfolioData';
import { Mail, Github, Linkedin, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    // Simulated form submission with clear instructions in README for EmailJS / Formspree integration
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 800);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-obsidian-950 border-t border-white/5 overflow-hidden">
      <div className="ambient-glow-crimson bottom-0 right-10 w-[500px] h-[500px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading
          category="Get in Touch"
          title="Let's Connect & Collaborate"
          subtitle="Whether you have an opportunity, a project idea, or want to discuss AI systems, feel free to reach out!"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Information & Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-heading font-bold text-white">
                Contact Details
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                I am actively seeking internships and full-time junior/entry opportunities in AI Engineering, Machine Learning, and Full-Stack Development.
              </p>

              <div className="space-y-4">
                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl glass-panel glass-panel-hover group"
                >
                  <div className="w-12 h-12 rounded-xl bg-cinematic-crimson/20 border border-cinematic-crimson/30 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-cinematic-rose" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-mono text-slate-400 block">Email Address</span>
                    <span className="text-sm font-semibold text-white group-hover:text-cinematic-rose transition-colors">
                      {personal.email}
                    </span>
                  </div>
                </a>

                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl glass-panel glass-panel-hover group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <Github className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-mono text-slate-400 block">GitHub Profile</span>
                    <span className="text-sm font-semibold text-white group-hover:text-cinematic-rose transition-colors">
                      github.com/abhishekrawat704235
                    </span>
                  </div>
                </a>

                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl glass-panel glass-panel-hover group"
                >
                  <div className="w-12 h-12 rounded-xl bg-cinematic-violet/20 border border-cinematic-violet/30 flex items-center justify-center shrink-0">
                    <Linkedin className="w-5 h-5 text-cinematic-violet" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-mono text-slate-400 block">LinkedIn Profile</span>
                    <span className="text-sm font-semibold text-white group-hover:text-cinematic-rose transition-colors">
                      linkedin.com/in/abhishekrawat704235
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl glass-panel">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-slate-400" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-mono text-slate-400 block">Current Location</span>
                    <span className="text-sm font-semibold text-white">
                      {personal.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-cinematic-crimson/10 to-cinematic-violet/10 border border-cinematic-crimson/20">
              <span className="text-xs font-mono uppercase tracking-wider text-cinematic-rose font-semibold block mb-1">
                Fast Response Guarantee
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                I regularly monitor my inbox and GitHub. You can expect a response within 24-48 hours.
              </p>
            </div>
          </div>

          {/* Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 md:p-10 rounded-3xl">
              <h3 className="text-2xl font-heading font-bold text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-slate-400 text-sm mb-8">
                Fill in the details below to reach out directly.
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-4">
                  <CheckCircle2 className="w-6 h-6 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-sm">Message Sent Successfully!</h4>
                    <p className="text-xs text-emerald-300/80 mt-1">
                      Thank you for reaching out, Abhishek will get back to you shortly.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cinematic-crimson transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cinematic-crimson transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Opportunity / Collaboration Inquiry"
                      className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cinematic-crimson transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message here..."
                      className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cinematic-crimson transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cinematic-crimson to-cinematic-violet text-white font-semibold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50 cursor-pointer shadow-lg shadow-cinematic-crimson/25"
                  >
                    {loading ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
