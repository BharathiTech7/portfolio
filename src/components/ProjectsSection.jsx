import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

/* 🔹 TAG COLOR MAP (PRIMARY COLOR ONLY) */
const tagColors = {
  HTML: "bg-primary/10 text-primary",
  CSS: "bg-primary/10 text-primary",
  JavaScript: "bg-primary/10 text-primary",
  React: "bg-primary/10 text-primary",
  "Node.js": "bg-primary/10 text-primary",
  MongoDB: "bg-primary/10 text-primary",
  Python: "bg-primary/10 text-primary",
  Flask: "bg-primary/10 text-primary",
  ChatterBot: "bg-primary/10 text-primary",
};

const projects = [
  {
    id: 1,
    title: "CalcCraft",
    description:
      "A simple yet interactive calculator built using HTML, CSS, and JavaScript. Implemented basic calculator functionalities such as addition, subtraction, multiplication, and division with a clean UI and responsive design.",
    image: "/projects/project1.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://bharathitech7.github.io/CalcCraft/",
    githubUrl: "https://github.com/BharathiTech7/CalcCraft",
  },
  {
    id: 2,
    title: "DocSpot",
    description:
      "A full-stack doctor appointment booking application where users can book appointments and upload medical reports, while doctors can approve appointments, view patient details, and access uploaded reports through a secure dashboard.",
    image: "/projects/project2.png",
    tags: ["Node.js", "React", "MongoDB"],
    demoUrl: "https://docspot-frontend.vercel.app/",
    githubUrl:
      "https://github.com/BharathiTech7/DocSpot-Seamless-Appointment-Booking-for-Health",
  },
  {
    id: 3,
    title: "CollegeChatBot",
    description:
      "A college enquiry chatbot developed for RGMCET that provides reliable information about the institution. Integrated with Gemini AI to handle different types of user queries and deliver accurate, context-aware responses.",
    image: "/projects/project3.png",
    tags: ["Python", "Flask", "ChatterBot"],
    demoUrl: "https://college-enquiry-chatbot-qgo6.onrender.com/",
    githubUrl: "https://github.com/BharathiTech7/College-Enquiry-Chatbot",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.25 }}
              transition={{ delay: index * 0.12, duration: 0.6 }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                {/* 🔥 COLORED TAGS */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2 py-1 text-xs font-medium rounded-full ${
                        tagColors[tag] || "bg-primary/10 text-primary"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex space-x-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/BharathiTech7"
            target="_blank"
            className="cosmic-button inline-flex items-center gap-2"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
