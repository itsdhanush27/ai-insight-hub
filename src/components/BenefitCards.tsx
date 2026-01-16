import { cn } from "@/lib/utils";

interface Benefit {
  title: string;
  description: string;
}

interface BenefitCardsProps {
  benefits: Benefit[];
  themeColor: string;
}

export function BenefitCards({ benefits, themeColor }: BenefitCardsProps) {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Us
          </h2>
          <p className="text-muted-foreground">
            Partner with experts who understand your vision and deliver results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={cn(
                "p-8 rounded-2xl bg-card border border-border",
                "hover:shadow-xl transition-all duration-300",
                "group"
              )}
            >
              <div
                className="w-12 h-1 rounded-full mb-6 transition-all duration-300 group-hover:w-16"
                style={{ backgroundColor: themeColor }}
              />
              <h3 className="text-xl font-bold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
