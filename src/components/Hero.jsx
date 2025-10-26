import React from 'react';
import { Rocket, Brain, Bot, Shield } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="w-full overflow-hidden bg-[#0b0f1a] text-white">
      <div className="mx-auto max-w-7xl px-6 pt-14 md:pt-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              <Bot className="h-3.5 w-3.5" />
              Learning Companion AI
            </div>
            <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
              Personalized, AI‑Integrated Learning for Everyone
            </h1>
            <p className="mt-4 text-white/70 md:text-lg">
              Adaptive paths, real-time analytics, and collaborative AI rooms powered by a mentor‑like assistant. Learn faster, smarter, and together.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-4 py-2 text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-400">
                <Rocket className="h-4 w-4" />
                Start Your AI Path
              </button>
              <button className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-white transition hover:bg-white/20">
                <Shield className="h-4 w-4" />
                Privacy First
              </button>
            </div>
            <div className="mt-6 flex flex-wrap gap-6 text-white/70">
              <div className="flex items-center gap-2"><Brain className="h-4 w-4" /> Adaptive Content</div>
              <div className="flex items-center gap-2"><Bot className="h-4 w-4" /> Mentor Chat & Voice</div>
            </div>
          </div>
          <div className="h-[420px] w-full rounded-xl bg-gradient-to-b from-indigo-500/20 to-cyan-500/10 p-2">
            <div className="relative h-full w-full overflow-hidden rounded-lg">
              <Spline
                scene="https://prod.spline.design/pDXeCthqjmzYX5Zk/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0f1a] via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
