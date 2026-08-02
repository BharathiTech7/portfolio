import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Code2,
  Send,
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const socials = [
  {
    icon: Github,
    label: "GitHub",
    url: "https://github.com/BharathiTech7",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    url: "https://linkedin.com/in/doma-bharathi",
  },
  {
    icon: Code2,
    label: "LeetCode",
    url: "https://leetcode.com/u/e8mbIeQGtx",
  },
];

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // success | error

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setStatus(null), 6000);
    } catch (error) {
      console.error(error);
      setStatus("error");
      setTimeout(() => setStatus(null), 6000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
          I'm currently looking for Software Engineer and Full-Stack Developer
          roles. Whether it's an opportunity, a project, or just a question —
          my inbox is open.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          {/* LEFT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 h-full flex flex-col justify-center"
          >
            <a
              href="mailto:reddybharathi599@gmail.com"
              className="flex items-center gap-4 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded w-fit"
            >
              <Mail className="text-primary shrink-0" />
              reddybharathi599@gmail.com
            </a>

            <a
              href="tel:+919381947858"
              className="flex items-center gap-4 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded w-fit"
            >
              <Phone className="text-primary shrink-0" />
              +91 93819 47858
            </a>

            <div className="flex items-center gap-4">
              <MapPin className="text-primary shrink-0" />
              Kurnool, Andhra Pradesh, India
            </div>

            <div className="flex gap-3 pt-4">
              {socials.map(({ icon: Icon, label, url }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${label} profile`}
                  title={label}
                  className="p-3 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="bg-card p-8 rounded-lg shadow-xs h-full flex flex-col justify-center"
          >
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="sr-only">
                  Your name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-md border bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="email" className="sr-only">
                  Your email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-md border bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="sr-only">
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your Message"
                  className="w-full px-4 py-3 rounded-md border bg-background resize-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2",
                  loading && "opacity-70 cursor-not-allowed"
                )}
              >
                {loading ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message <Send size={16} />
                  </>
                )}
              </button>

              {/* STATUS */}
              <div aria-live="polite" className="min-h-[1.5rem]">
                {status === "success" && (
                  <p className="text-sm text-primary text-center">
                    Message sent. I'll get back to you soon.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-sm text-destructive text-center">
                    Something went wrong. Please email me directly at
                    reddybharathi599@gmail.com
                  </p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
