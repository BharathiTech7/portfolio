import { Users, Trophy, Target } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const achievements = [
   {
    icon: Target,
    title: "Amazon ML Summer School 2026 — Selection Test",
    body: "Shortlisted from 1,34,421 registrations to sit the Amazon ML Summer School 2026 selection test, one of 31,821 candidates to reach that stage. The assessment covered Machine Learning, Mathematics, and Data Structures & Algorithms.",
  },
  {
    icon: Users,
    title: "Leadership & Student Communities",
    body: "Treasurer of the IEEE Computer Society Student Chapter, managing chapter finances and coordinating technical workshops. Lead of the Cre8 Club, a student-led tech community where I organize technical events and guide peers exploring new technologies and career paths.",
  },
  {
    icon: Trophy,
    title: "Hackathons & Team Projects",
    body: "Organized a department-level hackathon for 60+ teams, coordinating logistics, judging, and participant onboarding. Collaborated on a branch-wise student ranking system, working to tight deadlines alongside a small team.",
  },
];

export const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Extracurricular & <span className="text-primary">Achievements</span>
        </h2>

        <div className="flex flex-col gap-6 max-w-3xl mx-auto">
          {achievements.map(({ icon: Icon, title, body }, index) => (
            <motion.div
              key={title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-card p-6 rounded-xl border border-border shadow-xs"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 shrink-0">
                  <Icon className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-1">
                    {title}
                  </h3>
                  <p className="text-muted-foreground">{body}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
