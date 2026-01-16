import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img
                src="/logo.png"
                alt="NetPros USA"
                className="h-10 w-10 object-contain rounded-lg"
              />
              <span className="text-xl font-bold text-foreground">NetPros USA</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              World-class internet consulting services to help businesses thrive in the digital age.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/social-media" className="text-muted-foreground hover:text-primary transition-colors">
                  Social Media Consulting
                </Link>
              </li>
              <li>
                <Link to="/video-services" className="text-muted-foreground hover:text-primary transition-colors">
                  Video Services
                </Link>
              </li>
              <li>
                <Link to="/websites-funnels" className="text-muted-foreground hover:text-primary transition-colors">
                  Websites & Funnels
                </Link>
              </li>
              <li>
                <Link to="/lead-generation" className="text-muted-foreground hover:text-primary transition-colors">
                  Lead Generation
                </Link>
              </li>
              <li>
                <Link to="/apps-chatbots" className="text-muted-foreground hover:text-primary transition-colors">
                  Apps & Chatbots
                </Link>
              </li>
              <li>
                <Link to="/ai-consulting" className="text-muted-foreground hover:text-primary transition-colors">
                  AI Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:welcome@netprosusa.net"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  welcome@netprosusa.net
                </a>
              </li>
              <li>
                <a
                  href="tel:+17139369808"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  (713) 936-9808
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} NetPros USA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
