import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PropertyCard } from "@/components/PropertyCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { ContactForm } from "@/components/ContactForm";
import { properties } from "@/data/properties";
import { testimonials } from "@/data/testimonials";
import {
  Award,
  Home,
  Users,
  TrendingUp,
  ChevronRight,
  Play,
} from "lucide-react";

const stats = [
  { icon: Home, value: "200+", label: "Properties Sold" },
  { icon: Users, value: "500+", label: "Happy Clients" },
  { icon: Award, value: "10+", label: "Years Experience" },
  { icon: TrendingUp, value: "$150M+", label: "In Sales" },
];

export default function Index() {
  const featuredProperties = properties.filter((p) => p.featured).slice(0, 3);
  const featuredTestimonials = testimonials.slice(0, 3);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="relative z-10 container-luxury text-center pt-20">
          <span className="inline-block text-primary text-sm tracking-[0.3em] uppercase font-medium mb-6 animate-fade-up">
            Sedona's Premier Real Estate Expert
          </span>
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl text-foreground font-semibold mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Find Your Dream Home<br />
            <span className="text-gradient-gold">In Sedona</span>
          </h1>
          <p className="text-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Experience luxury living amidst Sedona's breathtaking red rock
            landscapes. Let me guide you home.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8"
            >
              <Link to="/properties">View Properties</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-foreground/30 text-foreground hover:bg-foreground/10 px-8"
            >
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-8 h-8 text-primary rotate-90" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-charcoal border-y border-border/30">
        <div className="container-luxury">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="font-playfair text-3xl md:text-4xl text-foreground font-semibold mb-1">
                  {stat.value}
                </p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section-padding">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80"
                alt="Diyana Nicolas - Sedona Real Estate Agent"
                className="w-full rounded-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg hidden md:block">
                <p className="font-playfair text-4xl font-semibold">10+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </div>
            <div>
              <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4 block">
                Meet Your Agent
              </span>
              <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-foreground font-semibold mb-6">
                Diyana Nicolas
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                With over a decade of experience in Sedona's luxury real estate
                market, I've built my career on a foundation of integrity,
                expertise, and an unwavering commitment to my clients.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                My deep knowledge of Sedona's unique neighborhoods, from the
                stunning views of Red Rock to the serene beauty of Oak Creek
                Canyon, allows me to match you with your perfect home.
              </p>
              <Button
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Link to="/about">
                  Learn More About Me
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="section-padding bg-charcoal">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="Featured Listings"
            title="Exceptional Properties"
            description="Discover Sedona's finest homes, handpicked for their stunning locations and luxury amenities."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Link to="/properties">
                View All Properties
                <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Video/Sedona Section */}
      <section className="relative py-32 md:py-40">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1527549993586-dff825b37782?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="relative z-10 container-luxury text-center">
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4 block">
            Discover
          </span>
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-foreground font-semibold mb-6">
            Life in Sedona
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
            From world-class hiking trails to spiritual vortexes, Sedona offers
            a lifestyle unlike any other. Experience the magic of red rock
            country.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Link to="/sedona-guide">
              Explore Sedona
              <ChevronRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="How I Help"
            title="Full-Service Real Estate"
            description="Whether you're buying, selling, or investing, I provide comprehensive support every step of the way."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Buying",
                description:
                  "From first-time buyers to luxury seekers, I'll help you find the perfect Sedona property that matches your lifestyle and budget.",
                icon: "🏠",
              },
              {
                title: "Selling",
                description:
                  "Maximize your property's value with my proven marketing strategies and deep understanding of Sedona's luxury market.",
                icon: "💰",
              },
              {
                title: "Investing",
                description:
                  "Leverage Sedona's strong vacation rental market and appreciation potential with expert investment guidance.",
                icon: "📈",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="luxury-card rounded-lg p-8 text-center group hover-gold-glow"
              >
                <div className="text-5xl mb-6">{service.icon}</div>
                <h3 className="font-playfair text-2xl text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Link to="/services">
                View All Services
                <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-charcoal">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="Client Stories"
            title="What My Clients Say"
            description="Don't just take my word for it. Hear from the families and investors I've had the privilege of serving."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Link to="/testimonials">
                Read More Reviews
                <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4 block">
                Let's Connect
              </span>
              <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-foreground font-semibold mb-6">
                Ready to Find Your<br />
                <span className="text-gradient-gold">Dream Home?</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Whether you're ready to start your search or just exploring your
                options, I'm here to help. Reach out for a complimentary
                consultation and let's discuss your real estate goals.
              </p>
              <div className="space-y-4 text-muted-foreground">
                <p className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  Personalized property recommendations
                </p>
                <p className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  Market insights and pricing guidance
                </p>
                <p className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  No pressure, no obligation
                </p>
              </div>
            </div>
            <div className="luxury-card rounded-lg p-8">
              <ContactForm title="Send Me a Message" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
