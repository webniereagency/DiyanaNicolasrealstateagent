import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";
import { properties } from "@/data/properties";
import {
  Bath,
  BedDouble,
  Maximize,
  MapPin,
  Calendar,
  ChevronLeft,
  Share2,
  Heart,
  Home,
  Car,
  Trees,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function PropertyDetail() {
  const { id } = useParams();
  const property = properties.find((p) => p.id === id);

  if (!property) {
    return (
      <Layout>
        <section className="pt-32 pb-20 min-h-screen">
          <div className="container-luxury text-center">
            <h1 className="font-playfair text-4xl text-foreground mb-4">
              Property Not Found
            </h1>
            <p className="text-muted-foreground mb-8">
              The property you're looking for doesn't exist or has been removed.
            </p>
            <Button asChild className="bg-primary text-primary-foreground">
              <Link to="/properties">View All Properties</Link>
            </Button>
          </div>
        </section>
      </Layout>
    );
  }

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(price);

  const features = [
    { icon: BedDouble, label: "Bedrooms", value: property.beds },
    { icon: Bath, label: "Bathrooms", value: property.baths },
    { icon: Maximize, label: "Square Feet", value: property.sqft.toLocaleString() },
    { icon: Home, label: "Property Type", value: "Single Family" },
    { icon: Car, label: "Garage", value: "3 Car" },
    { icon: Trees, label: "Lot Size", value: "1.5 Acres" },
  ];

  return (
    <Layout>
      {/* Hero Image */}
      <section className="pt-20">
        <div className="relative h-[60vh] md:h-[70vh]">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <div className="container-luxury">
              <Link
                to="/properties"
                className="inline-flex items-center gap-2 text-foreground/80 hover:text-primary mb-4 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                Back to Properties
              </Link>
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <Badge
                    className={`mb-3 ${
                      property.status === "For Sale"
                        ? "bg-primary text-primary-foreground"
                        : property.status === "Pending"
                        ? "bg-copper text-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {property.status}
                  </Badge>
                  <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-foreground font-semibold mb-2">
                    {property.title}
                  </h1>
                  <div className="flex items-center gap-2 text-foreground/80">
                    <MapPin className="w-4 h-4" />
                    <span>{property.address}</span>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <p className="font-playfair text-3xl md:text-4xl text-primary font-semibold">
                    {formatPrice(property.price)}
                  </p>
                  <div className="flex gap-2 mt-3">
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-foreground/30 text-foreground hover:bg-foreground/10"
                    >
                      <Share2 className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-foreground/30 text-foreground hover:bg-foreground/10"
                    >
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Details */}
      <section className="section-padding">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Features Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {features.map((feature) => (
                  <div
                    key={feature.label}
                    className="luxury-card rounded-lg p-6 text-center"
                  >
                    <feature.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                    <p className="text-muted-foreground text-sm mb-1">
                      {feature.label}
                    </p>
                    <p className="text-foreground font-semibold text-lg">
                      {feature.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Description */}
              <div>
                <h2 className="font-playfair text-2xl text-foreground mb-4">
                  Property Description
                </h2>
                <div className="text-muted-foreground space-y-4 leading-relaxed">
                  <p>
                    Welcome to this stunning luxury estate nestled in the heart
                    of Sedona's most coveted neighborhood. This exceptional
                    property offers breathtaking panoramic views of the iconic
                    red rock formations that make Sedona world-famous.
                  </p>
                  <p>
                    The open-concept floor plan seamlessly blends indoor and
                    outdoor living, with floor-to-ceiling windows that frame the
                    spectacular scenery. The gourmet kitchen features premium
                    appliances, custom cabinetry, and a spacious island perfect
                    for entertaining.
                  </p>
                  <p>
                    The primary suite is a private retreat with vaulted
                    ceilings, a spa-like bathroom, and a private terrace
                    overlooking the stunning landscape. Additional bedrooms
                    offer comfortable accommodations for family and guests.
                  </p>
                  <p>
                    Outdoor amenities include a heated infinity pool, multiple
                    patios for al fresco dining, and professionally landscaped
                    grounds that complement the natural desert beauty. The
                    three-car garage provides ample storage, and the property is
                    equipped with a state-of-the-art smart home system.
                  </p>
                </div>
              </div>

              {/* Amenities */}
              <div>
                <h2 className="font-playfair text-2xl text-foreground mb-4">
                  Property Amenities
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    "Heated Infinity Pool",
                    "Smart Home System",
                    "Wine Cellar",
                    "Home Theater",
                    "Gourmet Kitchen",
                    "Mountain Views",
                    "Outdoor Kitchen",
                    "Fire Pit",
                    "Security System",
                    "Solar Panels",
                    "EV Charging",
                    "Guest Casita",
                  ].map((amenity) => (
                    <div
                      key={amenity}
                      className="flex items-center gap-2 text-foreground/80"
                    >
                      <span className="w-2 h-2 bg-primary rounded-full" />
                      {amenity}
                    </div>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div>
                <h2 className="font-playfair text-2xl text-foreground mb-4">
                  Location & Neighborhood
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Located in one of Sedona's premier neighborhoods, this
                  property offers the perfect balance of privacy and
                  convenience. Just minutes from uptown Sedona's galleries,
                  restaurants, and shops, yet surrounded by the natural beauty
                  that draws visitors from around the world.
                </p>
                <div className="aspect-video bg-secondary rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Map View</p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                {/* Schedule Tour Card */}
                <div className="luxury-card rounded-lg p-6">
                  <h3 className="font-playfair text-xl text-foreground mb-4 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    Schedule a Viewing
                  </h3>
                  <ContactForm />
                </div>

                {/* Agent Card */}
                <div className="luxury-card rounded-lg p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80"
                      alt="Diyana Nicolas"
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-playfair text-foreground font-medium">
                        Diyana Nicolas
                      </p>
                      <p className="text-primary text-sm">Listing Agent</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">
                    Contact me directly for private showings and detailed
                    property information.
                  </p>
                  <div className="space-y-2">
                    <a
                      href="tel:+19285551234"
                      className="block w-full text-center py-2 border border-border rounded-md text-foreground hover:bg-secondary transition-colors"
                    >
                      (928) 555-1234
                    </a>
                    <a
                      href="mailto:diyana@sedonaluxury.com"
                      className="block w-full text-center py-2 border border-border rounded-md text-foreground hover:bg-secondary transition-colors"
                    >
                      Email Me
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
