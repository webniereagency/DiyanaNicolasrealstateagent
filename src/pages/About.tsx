import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Award,
  GraduationCap,
  Heart,
  MapPin,
  ChevronRight,
  CheckCircle,
} from "lucide-react";

const achievements = [
  { year: "2023", title: "Top 1% of Sedona Realtors" },
  { year: "2022", title: "Luxury Home Specialist Certification" },
  { year: "2021", title: "$50M+ in Annual Sales" },
  { year: "2020", title: "Five Star Professional Award" },
  { year: "2019", title: "Sedona Chamber of Commerce Excellence Award" },
];

const certifications = [
  "Certified Luxury Home Marketing Specialist (CLHMS)",
  "Accredited Buyer's Representative (ABR)",
  "Certified Residential Specialist (CRS)",
  "Seller Representative Specialist (SRS)",
  "Member, National Association of Realtors",
  "Member, Sedona Verde Valley Association of Realtors",
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-charcoal">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4 block">
                About Me
              </span>
              <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-foreground font-semibold mb-6">
                Diyana Nicolas
              </h1>
              <p className="text-primary text-xl font-medium mb-6">
                Your Trusted Sedona Real Estate Expert
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                For over a decade, I've dedicated my career to helping families,
                investors, and dreamers find their perfect piece of Sedona. My
                journey in real estate began with a simple belief: everyone
                deserves an advocate who truly cares about their success.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Born from ambition and fueled by passion, I've built my
                reputation on integrity, market expertise, and an unwavering
                commitment to exceeding expectations. When you work with me,
                you're not just getting an agent—you're gaining a partner
                invested in your future.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
                alt="Diyana Nicolas"
                className="w-full rounded-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg">
                <p className="font-playfair text-4xl font-semibold">10+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Story Section */}
      <section className="section-padding">
        <div className="container-luxury max-w-4xl">
          <h2 className="font-playfair text-3xl md:text-4xl text-foreground font-semibold mb-8 text-center">
            My Story
          </h2>
          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              I first fell in love with Sedona during a family vacation when I
              was just twelve years old. The moment I saw the sun set over
              Cathedral Rock, painting the sky in shades of gold and crimson, I
              knew this was a special place. That memory stayed with me through
              college, through my early career, and eventually led me to make
              Sedona my home.
            </p>
            <p>
              After earning my business degree and working in corporate real
              estate development, I realized my true calling was helping
              individuals and families find their own piece of this magical
              landscape. I obtained my real estate license in 2013 and never
              looked back.
            </p>
            <p>
              What sets me apart isn't just my market knowledge—though I pride
              myself on understanding every nuance of Sedona's neighborhoods,
              from the luxury estates of Seven Canyons to the artistic
              communities of the Village of Oak Creek. It's my genuine passion
              for connecting people with properties that will enhance their
              lives.
            </p>
            <p>
              As a solo agent, I provide personalized attention that larger
              teams simply can't match. When you call me, you get me—not an
              assistant, not a junior agent, but someone who knows your goals,
              your preferences, and your timeline intimately.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="section-padding bg-charcoal">
        <div className="container-luxury">
          <h2 className="font-playfair text-3xl md:text-4xl text-foreground font-semibold mb-12 text-center">
            Why Work With Me
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: MapPin,
                title: "Local Expertise",
                description:
                  "Living and working in Sedona for over 10 years, I know every neighborhood, every view, and every opportunity.",
              },
              {
                icon: Heart,
                title: "Personal Touch",
                description:
                  "As a solo agent, you'll always work directly with me—no hand-offs, no miscommunication.",
              },
              {
                icon: Award,
                title: "Proven Results",
                description:
                  "Consistently ranked in the top 1% of Sedona realtors with over $150M in career sales.",
              },
              {
                icon: GraduationCap,
                title: "Expert Credentials",
                description:
                  "Certified Luxury Home Marketing Specialist with extensive training and certifications.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="text-center luxury-card rounded-lg p-8"
              >
                <item.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-playfair text-xl text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Timeline */}
      <section className="section-padding">
        <div className="container-luxury max-w-4xl">
          <h2 className="font-playfair text-3xl md:text-4xl text-foreground font-semibold mb-12 text-center">
            Achievements & Recognition
          </h2>
          <div className="space-y-6">
            {achievements.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-6 luxury-card rounded-lg p-6"
              >
                <span className="text-primary font-playfair text-2xl font-semibold min-w-[80px]">
                  {item.year}
                </span>
                <div className="w-3 h-3 bg-primary rounded-full" />
                <p className="text-foreground text-lg">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-charcoal">
        <div className="container-luxury max-w-4xl">
          <h2 className="font-playfair text-3xl md:text-4xl text-foreground font-semibold mb-12 text-center">
            Professional Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-foreground">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-luxury text-center max-w-3xl">
          <h2 className="font-playfair text-3xl md:text-4xl text-foreground font-semibold mb-6">
            Let's Start Your Journey
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Ready to find your dream home in Sedona? I'd love to hear about your
            goals and show you what's possible in this incredible market.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Link to="/contact">
              Schedule a Consultation
              <ChevronRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
