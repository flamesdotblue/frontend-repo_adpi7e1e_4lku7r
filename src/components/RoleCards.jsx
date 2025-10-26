import React from 'react';
import { GraduationCap, Briefcase, Building2, Users, LineChart, BookOpen, Shield } from 'lucide-react';

const RoleCard = ({ icon: Icon, title, items }) => (
  <div className="rounded-xl border border-slate-200/10 bg-white/5 p-5 text-white/80 backdrop-blur">
    <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-300">
      <Icon className="h-5 w-5" />
    </div>
    <h3 className="text-white">{title}</h3>
    <ul className="mt-2 space-y-1.5 text-sm">
      {items.map((t, i) => (
        <li key={i} className="flex items-start gap-2">
          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-300/80" /> {t}
        </li>
      ))}
    </ul>
  </div>
);

const RoleCards = () => {
  return (
    <section className="w-full bg-[#0b0f1a] py-12 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold">Users & Use Cases</h2>
            <p className="mt-1 max-w-2xl text-white/70">
              Tailored experiences for every stakeholder across education and workforce.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <RoleCard
            icon={GraduationCap}
            title="Students"
            items={[
              'Personalized courses and AI mentor feedback',
              'Adaptive quizzes and progress tracking',
              'Gamified challenges and AI‑driven goals',
            ]}
          />
          <RoleCard
            icon={Users}
            title="Teachers"
            items={[
              'AI‑assisted grading and content generation',
              'Performance analytics and insights',
              'Engagement monitoring and interventions',
            ]}
          />
          <RoleCard
            icon={Building2}
            title="Institutions"
            items={[
              'Org‑wide analytics dashboards',
              'Curriculum optimization and skills mapping',
              'AI‑powered course recommendations',
            ]}
          />
          <RoleCard
            icon={Briefcase}
            title="Corporate Learners"
            items={[
              'Curated skill paths aligned to roles',
              'Integration with LMS and HR systems',
              'Certification tracking and reports',
            ]}
          />
          <RoleCard
            icon={Users}
            title="Parents & Guardians"
            items={[
              'Child progress monitoring',
              'Actionable AI recommendations for support',
              'Safe, age‑appropriate content',
            ]}
          />
          <RoleCard
            icon={LineChart}
            title="Researchers & Designers"
            items={[
              'Access to anonymized learning data',
              'A/B test sandboxes and course experiments',
              'Model evaluation and analytics API',
            ]}
          />
        </div>

        <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-5 text-sm text-white/70">
          <div className="flex items-center gap-2 text-white"><Shield className="h-4 w-4 text-emerald-300" /> Ethics & Data Privacy</div>
          <p className="mt-1">Transparent AI usage, consent‑based data, and full user control over data access, export, and recommendation transparency.</p>
        </div>
      </div>
    </section>
  );
};

export default RoleCards;
