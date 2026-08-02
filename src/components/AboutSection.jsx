import { Code, Users, Brain, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const highlights = [
  {
    icon: Code,
    title: "Full-Stack Development",
    body: "Three deployed full-stack applications built with MERN and Spring Boot, covering REST APIs, JWT authentication, and real-time WebSocket features.",
  },
  {
    icon: Users,
    title: "Leadership & Community",
    body: "Treasurer of the IEEE Computer Society Student Chapter and Lead of the Cre8 Club. Organized a department-level hackathon for 60+ teams.",
  },
  {
    icon: Brain,
    title: "Problem Solving",
    body: "200+ Data Structures & Algorithms problems solved in Java, with coursework in OOP, DBMS, Operating Systems, and Computer Networks.",
  },
];

const education = [
  {
    school: "RGM College of Engineering & Technology, Nandyal",
    degree: "B.Tech, Computer Science and Engineering",
    detail: "CGPA 9.47 / 10",
    period: "2023 – 2027",
  },
  {
    school: "A.P Model School & Jr. College, Kurnool",
    degree: "Intermediate (MPC)",
    detail: "95%",
    period: "2021 – 2023",
  },
];

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
            {/* PROFILE IMAGE */}
            <div className="flex justify-center">
              <div className="relative">
                <img
                  src="/profile.png"
                  alt="Doma Bharathi"
                  className="w-64 h-64 rounded-full object-cover border-4 border-primary/40 shadow-lg"
                />
                <div className="absolute inset-0 rounded-full ring-2 ring-primary/20 blur-sm"></div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold">
              Full-Stack Developer{" "}
              <span className="text-muted-foreground font-normal">|</span> MERN
              + Spring Boot{" "}
              <span className="text-muted-foreground font-normal">|</span> Java
              DSA
            </h3>

<p className="text-muted-foreground">
  I'm a{" "}
  <span className="font-medium text-primary">Computer Science undergraduate</span>{" "}
  at RGMCET passionate about building full-stack web applications using the
  MERN Stack and Spring Boot. I enjoy creating scalable solutions with secure
  authentication, REST APIs, and real-time features.
</p>

<p className="text-muted-foreground">
  Through projects like{" "}
  <span className="font-medium text-foreground">SkillSwap</span> and{" "}
  <span className="font-medium text-foreground">DocSpot</span>, along with my
  Infosys Springboard internship, I've gained hands-on experience in modern web
  development while solving{" "}
  <span className="font-medium text-foreground">200+ DSA problems</span> in
  Java.
</p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="/resume.pdf"
                download
                className="w-full sm:w-auto text-center px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                Download Resume
              </a>
            </div>
          </motion.div>

          {/* RIGHT CARDS */}
          <div className="grid grid-cols-1 gap-6">
            {highlights.map(({ icon: Icon, title, body }, index) => (
              <motion.div
                key={title}
                className="gradient-border p-6 card-hover"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{title}</h4>
                    <p className="text-muted-foreground">{body}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* EDUCATION */}
<motion.div
  className="mt-20"
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.2 }}
  transition={{ duration: 0.6 }}
>
  <div className="flex items-center justify-center gap-3 mb-8">
    <GraduationCap className="h-6 w-6 text-primary" />
    <h3 className="text-2xl font-semibold">Education</h3>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
  {education.map((item) => (
    
    <div
      key={item.school}
      className="gradient-border p-6 card-hover text-left h-full flex flex-col"
    >
      

    <h4 className="font-semibold text-lg leading-snug mt-3 text-primary">
  {item.school}
</h4>

<span className="text-xs uppercase tracking-widest text-muted-foreground">
  {item.period}
</span>

<p className="text-foreground/90 mt-2">{item.degree}</p>

<p className="text-primary font-medium mt-auto pt-6">
  {item.detail}
</p>
    </div>
  ))}
</div>
</motion.div>
      </div>
    </section>
  );
};
