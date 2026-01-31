import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-5 px-4 border-t border-border bg-card">
      <div className="container flex items-center justify-center relative">
        
        {/* Centered Text */}
        <p className="text-sm text-muted-foreground text-center">
          &copy; {new Date().getFullYear()} Bharathi | Portfolio. All rights reserved.
        </p>

        {/* Back to Top */}
        <a
          href="#hero"
          className="
            absolute right-4
            p-2 rounded-full
            bg-primary/10 text-primary
            hover:bg-primary/20
            transition-colors
          "
          aria-label="Back to top"
        >
          <ArrowUp size={16} />
        </a>

      </div>
    </footer>
  );
};
