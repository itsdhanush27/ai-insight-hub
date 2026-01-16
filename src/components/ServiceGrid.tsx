import { cn } from "@/lib/utils";

interface ServiceGridProps {
  services: string[];
  themeColor: string;
}

export function ServiceGrid({ services, themeColor }: ServiceGridProps) {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What We Offer
          </h2>
          <p className="text-muted-foreground">
            Comprehensive solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={cn(
                "p-6 rounded-xl bg-background border border-border",
                "hover:border-opacity-50 transition-all duration-300",
                "hover:shadow-lg hover:-translate-y-1"
              )}
              style={{
                borderColor: `${themeColor}30`,
              }}
            >
              <div
                className="w-2 h-2 rounded-full mb-4"
                style={{ backgroundColor: themeColor }}
              />
              <p className="text-foreground font-medium">{service}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
