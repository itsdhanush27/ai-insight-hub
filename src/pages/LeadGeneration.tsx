import { Users } from "lucide-react";
import { Layout } from "@/components/Layout";
import { ServiceHero } from "@/components/ServiceHero";
import { ServiceGrid } from "@/components/ServiceGrid";
import { BenefitCards } from "@/components/BenefitCards";
import { CTASection } from "@/components/CTASection";
import heroImage from "@/assets/hero-lead-generation.jpg";

const themeColor = "hsl(340, 80%, 60%)";

const services = [
  "Lead magnet creation",
  "Email marketing campaigns",
  "Marketing automation",
  "PPC advertising management",
  "LinkedIn outreach programs",
  "Content marketing strategy",
  "Lead scoring systems",
  "CRM integration",
  "Retargeting campaigns",
];

const benefits = [
  {
    title: "Qualified Leads",
    description: "Not just any leads—we attract and nurture prospects who are genuinely interested in your products or services.",
  },
  {
    title: "Automated Nurturing",
    description: "Set up systems that work 24/7 to educate and warm up leads, so your sales team receives ready-to-buy prospects.",
  },
  {
    title: "Measurable ROI",
    description: "Track every lead from first touch to conversion with comprehensive analytics and attribution modeling.",
  },
  {
    title: "Scalable Systems",
    description: "Build lead generation infrastructure that grows with your business without proportionally increasing costs.",
  },
];

export default function LeadGeneration() {
  return (
    <Layout>
      <ServiceHero
        icon={Users}
        tagline="Fuel Your Sales Pipeline"
        title="Lead Generation"
        description="Attract, capture, and nurture high-quality leads with proven strategies and cutting-edge automation. Turn strangers into customers systematically."
        image={heroImage}
        themeColor={themeColor}
      />
      <ServiceGrid services={services} themeColor={themeColor} />
      <BenefitCards benefits={benefits} themeColor={themeColor} />
      <CTASection ctaText="Generate More Leads" themeColor={themeColor} />
    </Layout>
  );
}
