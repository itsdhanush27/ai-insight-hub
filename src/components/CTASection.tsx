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

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="font-medium text-foreground">Email:</span> service@netprosusa.net
            </span>
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span className="font-medium text-foreground">Phone:</span> (713) 936-9808
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
