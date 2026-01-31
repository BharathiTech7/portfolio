import { Award, Users, Star } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export const AchievementsSection = () => {
  return (
    <section
      id="achievements"
      className="py-24 px-4 relative bg-secondary/30"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Extracurricular & <span className="text-primary">Achievements</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* CARD 1 */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="bg-card p-6 rounded-xl border border-border shadow-xs"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-primary mb-1">
                  Leadership & Student Communities
                </h3>
                <p className="text-muted-foreground">
                  Active member of the IEEE Computer Society serving as Treasurer,
                  and Incharge of the CRE8 Club — a student-led tech community that
                  guides peers in exploring technologies, industry trends, and
                  career paths in the tech industry.
                </p>
              </div>
            </div>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="bg-card p-6 rounded-xl border border-border shadow-xs"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Award className="h-6 w-6 text-primary" />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-primary mb-1">
                  Project-Based Learning & Hackathons
                </h3>
                <p className="text-muted-foreground">
                  Built multiple real-world projects including full-stack
                  applications and chatbots, gaining hands-on experience beyond
                  academics. Collaborated in a team to develop a student ranking
                  system categorized by academic branches, strengthening teamwork,
                  problem-solving abilities, and efficiency under tight timelines.
                </p>
              </div>
            </div>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-card p-6 rounded-xl border border-border shadow-xs"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Star className="h-6 w-6 text-primary" />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-primary mb-1">
                  Cloud & Certifications
                </h3>
                <p className="text-muted-foreground">
                  Completed foundational training in cloud computing and earned
                  the AWS Cloud Practitioner Certificate (2025), validating
                  knowledge of cloud concepts, AWS services, security, and pricing
                  models.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
