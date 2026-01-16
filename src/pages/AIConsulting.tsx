import { Brain } from "lucide-react";
import { Layout } from "@/components/Layout";
import { ServiceHero } from "@/components/ServiceHero";
import { ServiceGrid } from "@/components/ServiceGrid";
import { BenefitCards } from "@/components/BenefitCards";
import { CTASection } from "@/components/CTASection";
import heroImage from "@/assets/hero-ai-consulting.jpg";

const themeColor = "hsl(35, 95%, 55%)";

const services = [
  "AI strategy development",
  "Machine learning implementation",
  "Process automation",
  "Predictive analytics",
  "Natural language solutions",
  "Computer vision applications",
  "AI-powered content creation",
  "Data infrastructure setup",
  "AI tool selection & training",
];

const benefits = [
  {
    title: "Competitive Advantage",
    description: "Stay ahead of competitors by leveraging the latest AI technologies to innovate and optimize your business operations.",
  },
  {
    title: "Operational Efficiency",
    description: "Automate complex tasks, reduce errors, and free up your team to focus on high-value strategic work.",
  },
  {
    title: "Data-Driven Decisions",
    description: "Harness the power of your data with AI-powered analytics that uncover insights and predict trends.",
  },
  {
    title: "Future-Proof Business",
    description: "Prepare your organization for the AI-driven future with the right infrastructure, skills, and strategies.",
  },
];

export default function AIConsulting() {
  return (
    <Layout>
      <ServiceHero
        icon={Brain}
        tagline="Transform With Intelligence"
        title="AI Business Consulting"
        description="Unlock the transformative potential of artificial intelligence for your business. We help you identify opportunities, implement solutions, and build AI-ready organizations."
        image={heroImage}
        themeColor={themeColor}
      />
      <ServiceGrid services={services} themeColor={themeColor} />
      <BenefitCards benefits={benefits} themeColor={themeColor} />
      <CTASection ctaText="Explore AI Solutions" themeColor={themeColor} />
    </Layout>
  );
}
