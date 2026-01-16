import { MessageSquare } from "lucide-react";
import { Layout } from "@/components/Layout";
import { ServiceHero } from "@/components/ServiceHero";
import { ServiceGrid } from "@/components/ServiceGrid";
import { BenefitCards } from "@/components/BenefitCards";
import { CTASection } from "@/components/CTASection";
import heroImage from "@/assets/hero-social-media.jpg";

const themeColor = "hsl(320, 75%, 60%)";

const services = [
  "Content strategy development",
  "Platform-specific optimization",
  "Community management",
  "Influencer partnership programs",
  "Social media advertising",
  "Analytics and reporting",
  "Brand voice development",
  "Crisis management",
  "Competitor analysis",
];

const benefits = [
  {
    title: "Increased Brand Awareness",
    description: "Build a recognizable brand presence across all major social platforms with consistent messaging and engaging content that resonates with your target audience.",
  },
  {
    title: "Higher Engagement Rates",
    description: "Our proven strategies drive meaningful interactions with your audience, turning followers into brand advocates who actively promote your business.",
  },
  {
    title: "Lead Generation",
    description: "Convert social media engagement into qualified leads through strategic content funnels and targeted advertising campaigns.",
  },
  {
    title: "Data-Driven Decisions",
    description: "Make informed choices with comprehensive analytics and insights that reveal what works and what needs optimization.",
  },
];

export default function SocialMedia() {
  return (
    <Layout>
      <ServiceHero
        icon={MessageSquare}
        tagline="Build Your Digital Presence"
        title="Social Media Consulting"
        description="Transform your social media channels into powerful business tools. We help you create engaging content, build loyal communities, and drive measurable results across all platforms."
        image={heroImage}
        themeColor={themeColor}
      />
      <ServiceGrid services={services} themeColor={themeColor} />
      <BenefitCards benefits={benefits} themeColor={themeColor} />
      <CTASection ctaText="Boost Your Social Presence" themeColor={themeColor} />
    </Layout>
  );
}
