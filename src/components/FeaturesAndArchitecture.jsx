import React from 'react';
import { Workflow, BarChart3, Trophy, Sparkles, Users, Headphones, BookOpen, Globe, Shield, Brain, FileText, Code, GraduationCap, Briefcase } from 'lucide-react';

const Feature = ({ icon: Icon, title, desc }) => (
  <div className="group rounded-xl border border-white/10 bg-white/5 p-5 text-white/80 shadow-sm backdrop-blur transition hover:bg-white/10">
    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/20 text-indigo-300">
      <Icon className="h-5 w-5" />
    </div>
    <h3 className="text-white">{title}</h3>
    <p className="mt-1 text-sm">{desc}</p>
  </div>
);

const FeaturesAndArchitecture = () => {
  return (
    <section className="w-full bg-[#0b0f1a] py-12 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-2xl font-semibold">Core AI + System Architecture</h2>
        <p className="mt-2 max-w-3xl text-white/70">
          The platform blends a skills knowledge graph, adaptive engines, and analytics pipelines to deliver real‑time, personalized learning.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Feature icon={Brain} title="AI Path Builder" desc="Auto‑generates dynamic learning paths from goals, skill gaps, and interests." />
          <Feature icon={Workflow} title="Adaptive Engine" desc="Real‑time difficulty and pacing adjustments based on mastery signals." />
          <Feature icon={BarChart3} title="Live Analytics" desc="Progress heatmaps, trajectory forecasts, and alerting for stuck learners." />
          <Feature icon={Sparkles} title="Smart Recs" desc="Courses, mentors, and resources recommended contextually." />
          <Feature icon={Trophy} title="Gamification" desc="XP, streaks, AI‑generated challenges and boss quizzes." />
          <Feature icon={Users} title="AI Rooms" desc="Collaborative study spaces with moderated Q&A and summarization." />
          <Feature icon={BookOpen} title="Content AI" desc="Turn textbooks/PDFs into interactive lessons, quizzes, flashcards." />
          <Feature icon={Headphones} title="Mentor Chat" desc="Chat and voice tutor with scaffolding hints and code review." />
        </div>

        <div className="mt-10 grid gap-6 rounded-xl border border-white/10 bg-white/5 p-6 md:grid-cols-3">
          <div>
            <h3 className="font-medium">Data & Privacy</h3>
            <ul className="mt-2 space-y-2 text-white/70 text-sm">
              <li className="flex items-start gap-2"><Shield className="mt-0.5 h-4 w-4 text-emerald-300" /> Consent‑based collection with granular controls.</li>
              <li className="flex items-start gap-2"><Shield className="mt-0.5 h-4 w-4 text-emerald-300" /> Transparent recommendations and model explanations.</li>
              <li className="flex items-start gap-2"><Shield className="mt-0.5 h-4 w-4 text-emerald-300" /> Export/delete data anytime; privacy‑first defaults.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium">Integrations</h3>
            <ul className="mt-2 space-y-2 text-white/70 text-sm">
              <li className="flex items-start gap-2"><Globe className="mt-0.5 h-4 w-4 text-cyan-300" /> Google Classroom, Microsoft Teams, LMS/LRS.</li>
              <li className="flex items-start gap-2"><Globe className="mt-0.5 h-4 w-4 text-cyan-300" /> LinkedIn Learning, Coursera, external catalogs.</li>
              <li className="flex items-start gap-2"><Globe className="mt-0.5 h-4 w-4 text-cyan-300" /> API for custom AI models and analytics tools.</li>
              <li className="flex items-start gap-2"><Globe className="mt-0.5 h-4 w-4 text-cyan-300" /> Optional blockchain credentialing for certificates.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium">Innovation Layer</h3>
            <ul className="mt-2 space-y-2 text-white/70 text-sm">
              <li className="flex items-start gap-2"><FileText className="mt-0.5 h-4 w-4 text-violet-300" /> AI Learning Journal auto‑documents growth.</li>
              <li className="flex items-start gap-2"><Code className="mt-0.5 h-4 w-4 text-violet-300" /> Personalized feedback on essays, projects, and code.</li>
              <li className="flex items-start gap-2"><GraduationCap className="mt-0.5 h-4 w-4 text-violet-300" /> Path prediction: next‑best skill suggestions.</li>
              <li className="flex items-start gap-2"><Briefcase className="mt-0.5 h-4 w-4 text-violet-300" /> Multi‑modal: text, video, VR, and simulations.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesAndArchitecture;
