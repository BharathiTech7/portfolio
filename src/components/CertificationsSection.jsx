import { Award, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const certifications = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    url: "https://drive.google.com/file/d/1rAMieeeMSeb6M1rGjMtfESj0fqcOnjEb/view",
  },
  {
    name: "Java Foundation Certification",
    issuer: "Infosys Springboard",
    url: "https://drive.google.com/file/d/1IzLnDZiQeULKTBTdqxiDc4-4_M0nTEYv/view",
  },
];

export const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Certifications
        </h2>

        <motion.div
          className="flex flex-col gap-4 max-w-3xl mx-auto"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          {certifications.map((cert) => (
            <a
              key={cert.name}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View the ${cert.name} certificate`}
              className="group flex items-center gap-4 bg-card px-5 py-4 rounded-xl border border-border shadow-xs hover:border-primary/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <div className="p-2.5 rounded-full bg-primary/10 shrink-0">
                <Award className="h-5 w-5 text-primary" />
              </div>

              <p className="flex-1 min-w-0 truncate text-left">
                <span className="font-semibold">{cert.name}</span>
                <span className="text-muted-foreground"> — {cert.issuer}</span>
              </p>

              <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
