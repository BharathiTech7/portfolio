import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },

  // ✅ NEW
  { name: "Experience", href: "#experience" },

  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },

  // ✅ NEW
  { name: "Achievements", href: "#achievements" },

  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // ✅ UPDATED to include new sections
  const sectionIds = [
    "hero",
    "about",
    "experience",   // NEW
    "skills",
    "projects",
    "achievements", // NEW
    "contact",
  ];

  const observers = useRef([]);

  /* existing scroll effect (UNCHANGED) */
  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* active section observer (UNCHANGED) */
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0,
    };

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (!section) return;

      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection(id);
        }
      }, options);

      observer.observe(section);
      observers.current.push(observer);
    });

    return () => {
      observers.current.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScroll
          ? "py-3 bg-background/80 backdrop-blur-md shadow-sm"
          : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a
          className="text-xl font-bold flex items-center gap-1"
          href="#hero"
        >
          <span className="text-primary">Bharathi</span>
          <span className="text-foreground/80">D</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => {
            const isActive = activeSection === item.href.substring(1);

            return (
              <a
                key={key}
                href={item.href}
                className={cn(
                  "relative font-medium transition-colors duration-300",
                  isActive
                    ? "text-primary"
                    : "text-foreground/80 hover:text-primary"
                )}
              >
                {item.name}
                <span
                  className={cn(
                    "absolute left-0 -bottom-1 h-[2px] bg-primary transition-all duration-300",
                    isActive ? "w-full" : "w-0"
                  )}
                />
              </a>
            );
          })}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40",
            "flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl font-medium">
            {navItems.map((item, key) => {
              const isActive = activeSection === item.href.substring(1);

              return (
                <a
                  key={key}
                  href={item.href}
                  className={cn(
                    "transition-colors",
                    isActive
                      ? "text-primary"
                      : "text-foreground/80 hover:text-primary"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};
