import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ChevronRight, MapPin, Sun, Mountain, Sparkles } from "lucide-react";

const neighborhoods = [
  {
    name: "West Sedona",
    description:
      "A convenient location with easy access to shopping, dining, and healthcare. Great for families and those who want to be close to amenities.",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&q=80",
  },
  {
    name: "Uptown Sedona",
    description:
      "The vibrant heart of Sedona with galleries, restaurants, and tourist attractions. Perfect for those who love being in the center of activity.",
    image: "https://images.unsplash.com/photo-1527549993586-dff825b37782?w=600&q=80",
  },
  {
    name: "Village of Oak Creek",
    description:
      "A peaceful community south of Sedona with golf courses, hiking trails, and stunning views of Bell Rock and Courthouse Butte.",
    image: "https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?w=600&q=80",
  },
  {
    name: "Oak Creek Canyon",
    description:
      "Lush, forested beauty along the creek. Ideal for nature lovers who want to escape the desert landscape for creekside living.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
  },
];

const attractions = [
  {
    icon: Mountain,
    title: "World-Class Hiking",
    description:
      "Over 100 trails ranging from easy strolls to challenging climbs, all with breathtaking red rock scenery.",
  },
  {
    icon: Sparkles,
    title: "Spiritual Vortexes",
    description:
      "Sedona is known for its energy vortexes, believed to be centers of spiritual power and healing.",
  },
  {
    icon: Sun,
    title: "300+ Sunny Days",
    description:
      "Enjoy perfect weather year-round with an average of 300+ days of sunshine and mild temperatures.",
  },
  {
    icon: MapPin,
    title: "Art & Culture",
    description:
      "A thriving arts community with over 80 galleries, world-class restaurants, and cultural events.",
  },
];

export default function SedonaGuide() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-20 min-h-[70vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1527549993586-dff825b37782?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="relative z-10 container-luxury">
          <div className="max-w-2xl">
            <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4 block">
              Discover
            </span>
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-foreground font-semibold mb-6">
              Life in Sedona
            </h1>
            <p className="text-foreground/80 text-lg mb-8">
              Nestled among Arizona's stunning red rock formations, Sedona offers
              a lifestyle that combines natural beauty, outdoor adventure, and a
              thriving arts community. Discover why so many choose to call this
              magical place home.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link to="/properties">
                Explore Properties
                <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Sedona */}
      <section className="section-padding bg-charcoal">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="Why Sedona"
            title="A Lifestyle Like No Other"
            description="From breathtaking landscapes to a vibrant community, discover what makes Sedona one of America's most desirable places to live."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {attractions.map((item) => (
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

      {/* Neighborhoods */}
      <section className="section-padding">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="Explore"
            title="Sedona's Neighborhoods"
            description="Each area of Sedona offers its own unique character and lifestyle. Find the perfect neighborhood that matches your vision."
          />
          <div className="grid md:grid-cols-2 gap-8">
            {neighborhoods.map((neighborhood) => (
              <div
                key={neighborhood.name}
                className="group luxury-card rounded-lg overflow-hidden hover-gold-glow"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={neighborhood.image}
                    alt={neighborhood.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-playfair text-2xl text-foreground mb-2">
                      {neighborhood.name}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {neighborhood.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-charcoal">
        <div className="container-luxury">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: "10,000+", label: "Residents" },
              { value: "4,500 ft", label: "Elevation" },
              { value: "300+", label: "Sunny Days/Year" },
              { value: "100+", label: "Hiking Trails" },
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

      {/* Things to Do */}
      <section className="section-padding">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="Activities"
            title="Things to Do in Sedona"
            description="From outdoor adventures to cultural experiences, Sedona offers endless ways to enjoy life."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Outdoor Adventures",
                items: [
                  "Hiking & Trail Running",
                  "Mountain Biking",
                  "Rock Climbing",
                  "Jeep Tours",
                  "Hot Air Ballooning",
                  "Horseback Riding",
                ],
              },
              {
                title: "Arts & Culture",
                items: [
                  "Art Galleries",
                  "Live Music & Theater",
                  "Wine Tasting",
                  "Farm-to-Table Dining",
                  "Festivals & Events",
                  "Museums",
                ],
              },
              {
                title: "Wellness & Spirituality",
                items: [
                  "Spa & Wellness Centers",
                  "Yoga Retreats",
                  "Vortex Meditation",
                  "Holistic Healing",
                  "Stargazing",
                  "Nature Therapy",
                ],
              },
            ].map((category) => (
              <div key={category.title} className="luxury-card rounded-lg p-8">
                <h3 className="font-playfair text-xl text-foreground mb-6">
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-muted-foreground"
                    >
                      <span className="w-2 h-2 bg-primary rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-charcoal">
        <div className="container-luxury text-center max-w-3xl">
          <h2 className="font-playfair text-3xl md:text-4xl text-foreground font-semibold mb-6">
            Ready to Call Sedona Home?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Let me help you find the perfect property in Sedona's most desirable
            neighborhoods. Schedule a consultation to start your journey.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Link to="/properties">View Properties</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
