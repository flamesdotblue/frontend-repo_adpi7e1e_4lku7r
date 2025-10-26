import React from 'react';
import { Bot, Compass, Target, CheckCircle2, Star, ArrowRight } from 'lucide-react';

const Step = ({ title, desc }) => (
  <div className="rounded-lg border border-white/10 bg-white/5 p-4">
    <div className="text-white font-medium">{title}</div>
    <div className="text-white/70 text-sm mt-1">{desc}</div>
  </div>
);

const JourneyAndPitch = () => {
  return (
    <section className="w-full bg-[#060913] py-12 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              <Compass className="h-3.5 w-3.5" /> Sample User Journey (Student)
            </div>
            <h3 className="mt-3 text-xl font-semibold">From goal to certification with AI guidance</h3>
            <div className="mt-4 grid gap-3">
              <Step title="Set a Goal" desc="Choose ‘Learn Data Science in 60 days’. The AI maps prerequisites and the target outcome." />
              <Step title="Skill‑Gap Analysis" desc="Upload transcripts or link platforms. The system detects gaps using a knowledge graph." />
              <Step title="Adaptive Path" desc="Daily plan with lessons, micro‑quizzes, and practice—continuously adjusted by performance." />
              <Step title="Mentor Support" desc="Chat/voice coach explains concepts, reviews code, and generates targeted study tasks." />
              <Step title="Collab & Gamify" desc="Join an AI Room for a weekly challenge. Earn XP and badges for mastery milestones." />
              <Step title="Complete & Certify" desc="Projects reviewed with AI feedback + human moderation. Certificate pushed to your profile." />
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              <Bot className="h-3.5 w-3.5" /> Pitch Summary
            </div>
            <h3 className="mt-3 text-xl font-semibold">The operating system for lifelong learning</h3>
            <ul className="mt-4 space-y-3 text-white/80 text-sm">
              <li className="flex items-start gap-2"><ArrowRight className="mt-0.5 h-4 w-4 text-indigo-300" /> AI‑first personalization with real‑time adaptation and path prediction.</li>
              <li className="flex items-start gap-2"><ArrowRight className="mt-0.5 h-4 w-4 text-indigo-300" /> Unified analytics for students, teachers, and organizations.</li>
              <li className="flex items-start gap-2"><ArrowRight className="mt-0.5 h-4 w-4 text-indigo-300" /> Content AI converts static material into interactive learning experiences.</li>
              <li className="flex items-start gap-2"><ArrowRight className="mt-0.5 h-4 w-4 text-indigo-300" /> Social‑AI network and collaborative rooms supercharge engagement.</li>
              <li className="flex items-start gap-2"><ArrowRight className="mt-0.5 h-4 w-4 text-indigo-300" /> Privacy‑centric architecture with transparent recommendations.</li>
            </ul>
            <div className="mt-5 flex flex-wrap gap-2 text-xs text-white/60">
              <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2 py-1"><Target className="h-3 w-3" /> Market: EdTech + Workforce</span>
              <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2 py-1"><CheckCircle2 className="h-3 w-3" /> Integrations‑ready</span>
              <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2 py-1"><Star className="h-3 w-3" /> Gamified engagement</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyAndPitch;
