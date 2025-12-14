import { Layout } from "@/components/layout/Layout";
import { TestimonialCard } from "@/components/TestimonialCard";
import { testimonials } from "@/data/testimonials";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight, Star } from "lucide-react";

export default function Testimonials() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-charcoal">
        <div className="container-luxury text-center">
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4 block">
            Client Stories
          </span>
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-foreground font-semibold mb-6">
            What My Clients Say
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            The greatest compliment I receive is the trust and referrals from my
            past clients. Here's what some of them have to say about working
            with me.
          </p>
          <div className="flex items-center justify-center gap-2">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-6 h-6 text-primary fill-primary" />
              ))}
            </div>
            <span className="text-foreground font-semibold ml-2">5.0</span>
            <span className="text-muted-foreground">
              Average Rating • 500+ Reviews
            </span>
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="section-padding">
        <div className="container-luxury">
          <div className="luxury-card rounded-lg p-8 md:p-12 text-center max-w-4xl mx-auto">
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-6 h-6 text-primary fill-primary" />
              ))}
            </div>
            <p className="font-playfair text-2xl md:text-3xl text-foreground italic leading-relaxed mb-8">
              "Diyana didn't just help us buy a house—she helped us find our
              forever home. Her knowledge of Sedona, her patience, and her
              genuine care for our family made all the difference. We couldn't
              have asked for a better partner in this journey."
            </p>
            <div>
              <p className="font-playfair text-xl text-foreground font-medium">
                The Richardson Family
              </p>
              <p className="text-primary">Relocated from Boston, MA</p>
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials */}
      <section className="section-padding bg-charcoal">
        <div className="container-luxury">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container-luxury">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "500+", label: "Happy Clients" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "85%", label: "Referral Business" },
              { value: "100%", label: "5-Star Reviews" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-playfair text-4xl md:text-5xl text-primary font-semibold mb-2">
                  {stat.value}
                </p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Placeholder */}
      <section className="section-padding bg-charcoal">
        <div className="container-luxury text-center">
          <h2 className="font-playfair text-3xl md:text-4xl text-foreground font-semibold mb-12">
            Video Testimonials
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((num) => (
              <div
                key={num}
                className="luxury-card rounded-lg aspect-video flex items-center justify-center"
              >
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary text-2xl">▶</span>
                  </div>
                  <p className="text-muted-foreground">Video Coming Soon</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-luxury text-center max-w-3xl">
          <h2 className="font-playfair text-3xl md:text-4xl text-foreground font-semibold mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Join the hundreds of satisfied clients who have found their dream
            home in Sedona with my help. Let's start your journey today.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Link to="/contact">
              Contact Me
              <ChevronRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
