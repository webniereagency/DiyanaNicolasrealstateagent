import { Link } from "react-router-dom";
import { Bath, BedDouble, Maximize, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export interface Property {
  id: string;
  title: string;
  price: number;
  address: string;
  beds: number;
  baths: number;
  sqft: number;
  image: string;
  status: "For Sale" | "Pending" | "Sold";
  featured?: boolean;
}

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  const formatPrice = (price: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(price);

  return (
    <Link
      to={`/properties/${property.id}`}
      className="group block luxury-card rounded-lg overflow-hidden hover-gold-glow"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        <Badge
          className={`absolute top-4 left-4 ${
            property.status === "For Sale"
              ? "bg-primary text-primary-foreground"
              : property.status === "Pending"
              ? "bg-copper text-foreground"
              : "bg-muted text-muted-foreground"
          }`}
        >
          {property.status}
        </Badge>
        {property.featured && (
          <Badge className="absolute top-4 right-4 bg-gold-dark text-foreground">
            Featured
          </Badge>
        )}
      </div>
      <div className="p-6">
        <p className="text-primary text-2xl font-playfair font-semibold mb-2">
          {formatPrice(property.price)}
        </p>
        <h3 className="text-foreground font-playfair text-xl mb-2 group-hover:text-primary transition-colors">
          {property.title}
        </h3>
        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
          <MapPin className="w-4 h-4" />
          <span>{property.address}</span>
        </div>
        <div className="flex items-center gap-6 pt-4 border-t border-border/50">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <BedDouble className="w-4 h-4" />
            <span>{property.beds} Beds</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <Bath className="w-4 h-4" />
            <span>{property.baths} Baths</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <Maximize className="w-4 h-4" />
            <span>{property.sqft.toLocaleString()} sqft</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
