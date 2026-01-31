import { CalendarDays, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative bg-background">
      <div className="container mx-auto max-w-6xl">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          Work <span className="text-primary">Experience</span>
        </h2>

        {/* Timeline Wrapper */}
        <div className="relative flex">

          {/* Vertical Line */}
          <div className="absolute left-4 top-0 h-full w-[2px] bg-primary/40" />

          {/* Content */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative pl-16 w-full"
          >

            {/* Dot */}
            <div className="absolute left-[9px] top-6 w-4 h-4 rounded-full bg-primary shadow-[0_0_12px_rgba(99,102,241,0.8)]" />

           {/* Card */}
<div className="bg-card/90 backdrop-blur border border-border rounded-xl p-6 shadow-lg">

  {/* Text content wrapper */}
  <div className="ml-0 text-left">

    {/* Date */}
    <div className="flex items-center gap-2 text-primary text-sm mb-3">
      <CalendarDays size={16} />
      <span>Nov 27, 2025 – Present · 8 Weeks</span>
    </div>

    {/* Role */}
    <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-1">
      Software Development Intern
    </h3>

    {/* Company */}
    <p className="text-sm md:text-base text-primary/80 font-medium mb-4">
      Infosys Springboard · Ongoing
    </p>

    {/* Points */}
    <ul className="space-y-2 text-muted-foreground list-disc pl-5">
      <li>
        Developing a <strong>Site Survey Tool for Internet Service Providers (ISPs)</strong> as part of the Infosys Springboard internship.
      </li>
      <li>
        Building backend services using <strong>Java and Spring Boot</strong>, focusing on REST API implementation.
      </li>
      <li>
        Enabling engineers to analyze large properties such as apartments, offices, campuses, and public areas.
      </li>
      <li>
        Capturing key survey data including space availability, power sources, building layout, and signal strength.
      </li>
      <li>
        Strengthening backend skills by working with Java, Spring Boot, and REST APIs.
      </li>
    </ul>

  </div>
</div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
