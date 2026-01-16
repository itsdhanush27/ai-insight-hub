import { Link } from "react-router-dom";
import { ArrowRight, Globe, MessageSquare, Video, Layout as LayoutIcon, Users, Smartphone, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { cn } from "@/lib/utils";

const stats = [
  { value: "500+", label: "Clients Served" },
  { value: "50+", label: "Countries Reached" },
  { value: "15+", label: "Languages Supported" },
  { value: "98%", label: "Client Satisfaction" },
];

const services = [
  {
    title: "Social Media Consulting",
    description: "Build a powerful social presence that engages your audience and drives growth across all major platforms.",
    icon: MessageSquare,
    path: "/social-media",
    color: "hsl(320 75% 60%)",
  },
  {
    title: "Video Services",
    description: "Professional video production and strategy to tell your brand story and captivate your audience.",
    icon: Video,
    path: "/video-services",
    color: "hsl(25 95% 60%)",
  },
  {
    title: "Websites & Funnels",
    description: "High-converting websites and sales funnels designed to turn visitors into loyal customers.",
    icon: LayoutIcon,
    path: "/websites-funnels",
    color: "hsl(280 70% 60%)",
  },
  {
    title: "Lead Generation",
    description: "Strategic campaigns that attract and nurture qualified leads for your business.",
    icon: Users,
    path: "/lead-generation",
    color: "hsl(340 80% 60%)",
  },
  {
    title: "Apps & Chatbots",
    description: "Custom applications and intelligent chatbots that automate and enhance customer experiences.",
    icon: Smartphone,
    path: "/apps-chatbots",
    color: "hsl(174 72% 50%)",
  },
  {
    title: "AI Business Consulting",
    description: "Leverage artificial intelligence to transform operations and unlock new opportunities.",
    icon: Brain,
    path: "/ai-consulting",
    color: "hsl(35 95% 55%)",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-8 animate-fade-in">
              <Globe className="w-4 h-4 text-accent" />
              <span className="text-sm text-muted-foreground">Global & Multilingual Services</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Transform Your Digital{" "}
              <span className="gradient-text-alt">Presence</span>{" "}
              With Expert Consulting
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
              NetPros USA delivers world-class internet consulting services to help businesses thrive in the digital age. From social media to AI—we've got you covered.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 group">
                <a href="mailto:welcome@netprosusa.net">
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-border">
                <a href="tel:+17139369808">(713) 936-9808</a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold gradient-text-alt mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solutions designed to elevate your business and connect you with customers worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.path}
                className={cn(
                  "group p-8 rounded-2xl bg-background border border-border",
                  "hover:border-primary/30 hover:shadow-xl hover:-translate-y-1",
                  "transition-all duration-300"
                )}
              >
                <div
                  className="w-12 h-12 rounded-xl mb-6 flex items-center justify-center"
                  style={{ backgroundColor: `${service.color}20` }}
                >
                  <service.icon className="w-6 h-6" style={{ color: service.color }} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center text-sm font-medium text-primary">
                  Learn More
                  <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Globe className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Global Reach, Local Expertise
            </h2>
            <p className="text-muted-foreground mb-8">
              With support for over 15 languages and clients in more than 50 countries, we understand the nuances of global digital marketing. Our team brings local expertise to every market we serve.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 group">
              <a href="mailto:welcome@netprosusa.net">
                Start Your Global Journey
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
