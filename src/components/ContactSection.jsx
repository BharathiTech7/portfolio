import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const API_URL = `${import.meta.env.VITE_API_URL}/api/contact`;


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
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });

      // 🔥 auto-hide after 5s
      setTimeout(() => setStatus(null), 5000);
    } catch (err) {
      setStatus("error");
      setTimeout(() => setStatus(null), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        {/* 🔥 SAME HEIGHT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">

          {/* LEFT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-8 h-full flex flex-col justify-center"
          >
            <div className="flex items-center gap-4">
              <Mail className="text-primary" /> reddybharathi599@gmail.com
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-primary" /> Kurnool, AP, India
            </div>

            <div className="flex gap-4 pt-4">
              <a href="https://www.linkedin.com" target="_blank"><Linkedin /></a>
              <a href="https://github.com" target="_blank"><Github /></a>
             
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
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-md border bg-background"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-md border bg-background"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-md border bg-background resize-none"
              />

              {/* 🔥 BUTTON WITH STATUS */}
              <button
                type="submit"
                disabled={loading}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2 transition-all",
                  loading && "opacity-70 cursor-not-allowed"
                )}
              >
                {loading && "Sending..."}
                {!loading && status === "success" && " Message sent successfully"}
                {!loading && status === "error" && " Failed to send message"}
                {!loading && !status && (
                  <>
                    Send Message <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
