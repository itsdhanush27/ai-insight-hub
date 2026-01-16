import { Layout as LayoutIcon } from "lucide-react";
import { Layout } from "@/components/Layout";
import { ServiceHero } from "@/components/ServiceHero";
import { ServiceGrid } from "@/components/ServiceGrid";
import { BenefitCards } from "@/components/BenefitCards";
import { CTASection } from "@/components/CTASection";
import heroImage from "@/assets/hero-websites-funnels.jpg";

const themeColor = "hsl(280, 70%, 60%)";

const services = [
  "Custom website design",
  "Sales funnel development",
  "E-commerce solutions",
  "Landing page optimization",
  "Mobile-responsive design",
  "SEO foundation setup",
  "CMS implementation",
  "A/B testing setup",
  "Speed optimization",
];

const benefits = [
  {
    title: "Conversion-Focused Design",
    description: "Every element is strategically placed to guide visitors toward taking action, maximizing your conversion rates.",
  },
  {
    title: "Mobile-First Approach",
    description: "Over 60% of web traffic comes from mobile devices. Your site will look stunning and perform flawlessly on every screen.",
  },
  {
    title: "Fast Loading Speeds",
    description: "Optimized performance ensures your pages load in under 3 seconds, reducing bounce rates and improving user experience.",
  },
  {
    title: "SEO-Ready Foundation",
    description: "Built with search engines in mind from the start, giving you the best possible chance to rank and be discovered.",
  },
];

export default function WebsitesFunnels() {
  return (
    <Layout>
      <ServiceHero
        icon={LayoutIcon}
        tagline="Convert Visitors Into Customers"
        title="Websites & Funnels"
        description="Build high-converting websites and sales funnels that turn visitors into paying customers. We combine stunning design with strategic functionality."
        image={heroImage}
        themeColor={themeColor}
      />
      <ServiceGrid services={services} themeColor={themeColor} />
      <BenefitCards benefits={benefits} themeColor={themeColor} />
      <CTASection ctaText="Build Your Website" themeColor={themeColor} />
    </Layout>
  );
}
