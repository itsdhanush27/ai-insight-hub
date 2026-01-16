import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  ctaText?: string;
  themeColor: string;
}

export function CTASection({ ctaText = "Get Started", themeColor }: CTASectionProps) {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-muted-foreground mb-8">
            Contact our team today and discover how our expert consulting services can help you achieve your goals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="group"
              style={{ backgroundColor: themeColor }}
            >
              <a href="mailto:welcome@netprosusa.net">
                {ctaText}
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-border hover:bg-muted"
            >
              <a href="tel:+17139369808">
                <Phone className="mr-2 w-4 h-4" />
                (713) 936-9808
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
