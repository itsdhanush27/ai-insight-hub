import { Video } from "lucide-react";
import { Layout } from "@/components/Layout";
import { ServiceHero } from "@/components/ServiceHero";
import { ServiceGrid } from "@/components/ServiceGrid";
import { BenefitCards } from "@/components/BenefitCards";
import { CTASection } from "@/components/CTASection";
import heroImage from "@/assets/hero-video-services.jpg";

const themeColor = "hsl(25, 95%, 60%)";

const services = [
  "Video production & editing",
  "YouTube channel optimization",
  "Video marketing strategy",
  "Live streaming solutions",
  "Animation & motion graphics",
  "Corporate video production",
  "Video SEO optimization",
  "Webinar production",
  "Training video creation",
];

const benefits = [
  {
    title: "Professional Quality",
    description: "High-quality video production that elevates your brand image and creates lasting impressions on your audience.",
  },
  {
    title: "Increased Engagement",
    description: "Video content generates 1200% more shares than text and images combined. Capture attention and keep viewers engaged.",
  },
  {
    title: "Better Conversion Rates",
    description: "Landing pages with video convert 80% better. Turn viewers into customers with compelling video content.",
  },
  {
    title: "Multi-Platform Distribution",
    description: "Content optimized for every platform—from YouTube to TikTok, Instagram Reels to LinkedIn—maximizing your reach.",
  },
];

export default function VideoServices() {
  return (
    <Layout>
      <ServiceHero
        icon={Video}
        tagline="Tell Your Story Visually"
        title="Video Services"
        description="Capture attention and tell your brand story through powerful video content. From concept to distribution, we handle every aspect of video production and strategy."
        image={heroImage}
        themeColor={themeColor}
      />
      <ServiceGrid services={services} themeColor={themeColor} />
      <BenefitCards benefits={benefits} themeColor={themeColor} />
      <CTASection ctaText="Start Creating Videos" themeColor={themeColor} />
    </Layout>
  );
}
