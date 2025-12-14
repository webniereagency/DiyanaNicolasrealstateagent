import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Home,
  DollarSign,
  TrendingUp,
  MapPin,
  FileText,
  Users,
  ChevronRight,
  CheckCircle,
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Buyer Representation",
    description:
      "Your dream home in Sedona awaits. I'll guide you through every step of the buying process with personalized attention and expert market knowledge.",
    features: [
      "Personalized property search based on your criteria",
      "Exclusive access to off-market listings",
      "Expert negotiation to get the best price",
      "Coordination of inspections and due diligence",
      "Seamless closing process management",
    ],
  },
  {
    icon: DollarSign,
    title: "Seller Representation",
    description:
      "Maximize your property's value with strategic pricing, professional staging, and targeted marketing that reaches qualified luxury buyers.",
    features: [
      "Comprehensive market analysis and pricing strategy",
      "Professional photography and virtual tours",
      "Targeted marketing to luxury buyer networks",
      "Open house coordination and private showings",
      "Skilled negotiation for maximum value",
    ],
  },
  {
    icon: TrendingUp,
    title: "Investment Consulting",
    description:
      "Leverage Sedona's strong vacation rental market and appreciation potential with expert investment guidance tailored to your goals.",
    features: [
      "Market analysis and ROI projections",
      "Vacation rental income potential assessment",
      "1031 exchange guidance and coordination",
      "Portfolio diversification strategies",
      "Property management recommendations",
    ],
  },
  {
    icon: MapPin,
    title: "Relocation Services",
    description:
      "Moving to Sedona from out of state? I'll help you navigate the transition with comprehensive relocation support and local expertise.",
    features: [
      "Virtual property tours and video consultations",
      "Neighborhood guides and lifestyle matching",
      "School district and amenity information",
      "Connection to trusted local services",
      "Temporary housing assistance",
    ],
  },
  {
    icon: FileText,
    title: "Home Valuation",
    description:
      "Curious about your property's current value? Get a complimentary, no-obligation market analysis to understand your equity position.",
    features: [
      "Detailed comparative market analysis",
      "Assessment of value-adding improvements",
      "Market timing recommendations",
      "No obligation, completely free",
      "Confidential and professional",
    ],
  },
  {
    icon: Users,
    title: "Luxury Concierge",
    description:
      "Experience white-glove service from start to finish. I coordinate every detail so you can focus on enjoying your new Sedona lifestyle.",
    features: [
      "Private jet and luxury transportation coordination",
      "Interior design and furnishing connections",
      "Local membership and club introductions",
      "Trusted vendor referrals",
      "Post-closing support and check-ins",
    ],
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-charcoal">
        <div className="container-luxury text-center">
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4 block">
            How I Help
          </span>
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-foreground font-semibold mb-6">
            Full-Service Real Estate
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Whether you're buying, selling, or investing in Sedona real estate,
            I provide comprehensive, personalized service tailored to your
            unique needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-luxury">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 rounded-lg bg-primary/20 flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="font-playfair text-3xl text-foreground font-semibold mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-foreground/80"
                      >
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={`${
                    index % 2 === 1 ? "lg:order-1" : ""
                  } luxury-card rounded-lg aspect-[4/3] flex items-center justify-center`}
                >
                  <service.icon className="w-24 h-24 text-primary/30" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-charcoal">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="My Process"
            title="How We Work Together"
            description="A seamless, stress-free experience from first consultation to closing day."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description:
                  "We discuss your goals, preferences, and timeline to create a personalized plan.",
              },
              {
                step: "02",
                title: "Strategy",
                description:
                  "I develop a customized approach tailored to your specific needs and market conditions.",
              },
              {
                step: "03",
                title: "Execution",
                description:
                  "Whether buying or selling, I handle every detail with precision and care.",
              },
              {
                step: "04",
                title: "Success",
                description:
                  "We celebrate your real estate goals achieved, and I remain your resource for life.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <span className="text-primary font-playfair text-5xl font-bold mb-4 block">
                  {item.step}
                </span>
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

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-luxury text-center max-w-3xl">
          <h2 className="font-playfair text-3xl md:text-4xl text-foreground font-semibold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Contact me today for a complimentary consultation. Let's discuss
            your real estate goals and create a plan to achieve them.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link to="/contact">
                Schedule Consultation
                <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Link to="/properties">Browse Properties</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
