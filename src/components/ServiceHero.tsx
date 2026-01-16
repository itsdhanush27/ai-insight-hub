import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceHeroProps {
  icon: LucideIcon;
  tagline: string;
  title: string;
  description: string;
  image: string;
  themeColor: string;
}

export function ServiceHero({
  icon: Icon,
  tagline,
  title,
  description,
  image,
  themeColor,
}: ServiceHeroProps) {
  return (
    <section
      className="relative min-h-[85vh] flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${themeColor}20 0%, ${themeColor}05 50%, transparent 100%)`,
      }}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(50px)",
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-12 animate-fade-in">
          {/* Icon */}
          <div
            className={cn(
              "w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center",
              "bg-white/10 backdrop-blur-sm border border-white/20"
            )}
          >
            <Icon className="w-8 h-8" style={{ color: themeColor }} />
          </div>

          {/* Tagline */}
          <p
            className="text-sm font-medium mb-4 tracking-wide"
            style={{ color: themeColor }}
          >
            {tagline}
          </p>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            {title}
          </h1>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* Featured Image */}
        <div className="max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={image}
              alt={title}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
