import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Social Media", path: "/social-media" },
  { name: "Video Services", path: "/video-services" },
  { name: "Websites & Funnels", path: "/websites-funnels" },
  { name: "Lead Generation", path: "/lead-generation" },
  { name: "Apps & Chatbots", path: "/apps-chatbots" },
  { name: "AI Consulting", path: "/ai-consulting" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="NetPros USA"
              className="h-12 w-12 object-contain rounded-lg"
            />
            <span className="text-2xl font-bold text-foreground">Netpros USA</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  location.pathname === link.path
                    ? "bg-primary/10"
                    : "hover:bg-muted"
                )}
                style={{ color: "#f97316" }}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center gap-4 text-sm text-muted-foreground">
            <span>Email: service@netprosusa.net</span>
            <span>Phone: (713) 936-9808</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                    location.pathname === link.path
                      ? "bg-primary/10"
                      : "hover:bg-muted"
                  )}
                  style={{ color: "#f97316" }}
                >
                  {link.name}
                </Link>
              ))}
              <div className="mx-4 mt-4 pt-4 border-t border-border text-sm text-muted-foreground space-y-1">
                <p>Email: service@netprosusa.net</p>
                <p>Phone: (713) 936-9808</p>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
