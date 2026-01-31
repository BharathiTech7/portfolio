import { Briefcase, Code, User } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <motion.div
            className="space-y-6"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
          {/* ✅ PROFILE IMAGE (CENTERED, 256x256) */}
<div className="flex justify-center">
  <div className="relative">
    <img
      src="/profile.jpeg"
      alt="Bharathi profile"
      className="
        w-64 h-64 rounded-full object-cover
        border-4 border-primary/40
        shadow-lg
      "
    />
    {/* subtle glow */}
    <div className="absolute inset-0 rounded-full ring-2 ring-primary/20 blur-sm"></div>
  </div>
</div>

            {/* ⬇️ YOUR ORIGINAL CONTENT – UNTOUCHED */}
            <h3 className="text-2xl font-semibold">
              Full-stack Developer | DSA (java)
            </h3>

            <p className="text-muted-foreground">
              I’m Bharathi, 
a <span className="font-medium text-primary">Computer Science </span> student who enjoys turning ideas into functional,
user-friendly web applications.

            </p>

            <p className="text-muted-foreground">
             I specialize in the MERN Stack (MongoDB, Express.js, React.js, Node.js) and have
strong foundations in Data Structures & Algorithms (DSA) using Java.
I believe in continuous learning, hands-on practice, and building real-world
projects with clean, efficient code.

            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
  href="/resume.pdf"
  download
  className="
    w-full sm:w-auto
    text-center
    px-6 py-2
    rounded-full
    border border-primary
    text-primary
    hover:bg-primary/10
    transition-colors
  "
>
  Download Resume
</a>

            </div>
          </motion.div>

          {/* RIGHT CARDS */}
          <div className="grid grid-cols-1 gap-6">
            {[Code, User, Briefcase].map((Icon, index) => (
              <motion.div
                key={index}
                className="gradient-border p-6 card-hover"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
              >
                {/* ⬇️ YOUR ORIGINAL CARD CONTENT */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">
  {index === 0 && "Full-Stack Development"}
  {index === 1 && "Leadership & Teamwork"}
  {index === 2 && "Problem Solving & Growth"}
</h4>

<p className="text-muted-foreground">
  {index === 0 &&
    "Developing real-world full-stack applications using the MERN stack, with a focus on clean code, performance, and user experience."}
  {index === 1 &&
    "Actively involved in the Cre8 Club, collaborating with peers, mentoring juniors, and contributing to a positive tech community."}
  {index === 2 &&
    "Strengthening Data Structures & Algorithms in Java while continuously learning new technologies and improving logical thinking."}
</p>

                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
