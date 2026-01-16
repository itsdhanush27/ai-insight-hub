import { Smartphone } from "lucide-react";
import { Layout } from "@/components/Layout";
import { ServiceHero } from "@/components/ServiceHero";
import { ServiceGrid } from "@/components/ServiceGrid";
import { BenefitCards } from "@/components/BenefitCards";
import { CTASection } from "@/components/CTASection";
import heroImage from "@/assets/hero-apps-chatbots.jpg";

const themeColor = "hsl(174, 72%, 50%)";

const services = [
  "Custom mobile app development",
  "AI-powered chatbots",
  "Customer service automation",
  "WhatsApp & Messenger bots",
  "Progressive web apps (PWA)",
  "Integration with existing systems",
  "Natural language processing",
  "Multi-language support",
  "Analytics dashboard",
];

const benefits = [
  {
    title: "24/7 Customer Support",
    description: "Chatbots never sleep. Provide instant responses to customer inquiries any time of day, improving satisfaction and reducing wait times.",
  },
  {
    title: "Reduced Operational Costs",
    description: "Automate repetitive tasks and handle thousands of conversations simultaneously without adding headcount.",
  },
  {
    title: "Enhanced User Experience",
    description: "Custom apps and intelligent bots create seamless interactions that delight users and build brand loyalty.",
  },
  {
    title: "Valuable Data Insights",
    description: "Capture and analyze conversation data to understand customer needs, pain points, and opportunities for improvement.",
  },
];

export default function AppsChatbots() {
  return (
    <Layout>
      <ServiceHero
        icon={Smartphone}
        tagline="Automate & Enhance Experiences"
        title="Apps & Chatbots"
        description="Build custom applications and intelligent chatbots that automate customer interactions, streamline operations, and create memorable user experiences."
        image={heroImage}
        themeColor={themeColor}
      />
      <ServiceGrid services={services} themeColor={themeColor} />
      <BenefitCards benefits={benefits} themeColor={themeColor} />
      <CTASection ctaText="Build Your Solution" themeColor={themeColor} />
    </Layout>
  );
}
