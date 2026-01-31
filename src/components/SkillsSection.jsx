import {
  Code2,
  Database,
  Layers,
  Wrench,
  Cpu,
  BookOpen,
} from "lucide-react";
import { motion } from "framer-motion";

/* 🔹 DATA */
const skillCards = [
  {
    icon: <Layers />,
    title: "MERN Stack",
    items: [
      "MongoDB (with Mongoose)",
      "Express.js (Backend Framework)",
      "React.js (Frontend Library)",
      "Node.js (Runtime Environment)",
    ],
  },
  {
    icon: <Code2 />,
    title: "Programming Languages",
    items: [
      "Java (OOPs concepts)",
      "JavaScript (ES6+)",
      "Python (Basics)",
      "C (Fundamentals)",
    ],
  },
  {
    icon: <Cpu />,
    title: "Data Structures & Algorithms",
    items: [
      "Problem Solving",
      "Arrays",
      "Linked Lists",
    ],
  },
  {
    icon: <BookOpen />,
    title: "Frontend Technologies",
    items: [
      "HTML5, CSS3",
      "Tailwind CSS",
      "Responsive Web Design",
    ],
  },
  {
    icon: <Database />,
    title: "Databases & APIs",
    items: [
      "MongoDB, SQL (MySQL)",
      "Mongoose",
      "RESTful APIs",
    ],
  },
  {
    icon: <Wrench />,
    title: "Tools & Platforms",
    items: [
      "Git, GitHub",
      "VS Code",
      "Netlify, Render",
      "Agile Methodologies (Basics)",
    ],
  },
];

/* 🔹 VARIANTS */
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.12,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="py-24 px-4 relative bg-secondary/30"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* 🔥 RE-ENTER ANIMATION */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillCards.map((card, index) => (
            <motion.div
              key={card.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: false,
                amount: 0.3,
              }}
            >
              <SkillCard
                icon={card.icon}
                title={card.title}
                items={card.items}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* 🔹 CARD */
const SkillCard = ({ icon, title, items }) => {
  return (
    <div
      className="
        group relative rounded-2xl p-6
        bg-card/80 backdrop-blur
        border border-border/50
        shadow-sm
        transition-all duration-300
        hover:-translate-y-2 hover:shadow-lg
        hover:border-primary/40
      "
    >
      <div className="w-12 h-12 mb-4 rounded-xl flex items-center justify-center bg-primary/10 text-primary">
        {icon}
      </div>

      <h3 className="text-xl font-semibold mb-4">
        {title}
      </h3>

      <ul className="space-y-2 text-muted-foreground">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </div>
  );
};
