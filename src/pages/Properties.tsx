import { useState, useMemo } from "react";
import { Layout } from "@/components/layout/Layout";
import { PropertyCard } from "@/components/PropertyCard";
import { properties } from "@/data/properties";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, SlidersHorizontal } from "lucide-react";

export default function Properties() {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState("all");
  const [beds, setBeds] = useState("all");
  const [status, setStatus] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      const matchesSearch =
        property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.address.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesPrice =
        priceRange === "all" ||
        (priceRange === "under-1m" && property.price < 1000000) ||
        (priceRange === "1m-2m" &&
          property.price >= 1000000 &&
          property.price < 2000000) ||
        (priceRange === "2m-3m" &&
          property.price >= 2000000 &&
          property.price < 3000000) ||
        (priceRange === "over-3m" && property.price >= 3000000);

      const matchesBeds =
        beds === "all" ||
        (beds === "3" && property.beds === 3) ||
        (beds === "4" && property.beds === 4) ||
        (beds === "5+" && property.beds >= 5);

      const matchesStatus = status === "all" || property.status === status;

      return matchesSearch && matchesPrice && matchesBeds && matchesStatus;
    });
  }, [searchTerm, priceRange, beds, status]);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-charcoal">
        <div className="container-luxury text-center">
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4 block">
            Browse Listings
          </span>
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-foreground font-semibold mb-6">
            Sedona Properties
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our curated collection of luxury homes, estates, and
            investment properties in Sedona's most desirable locations.
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-charcoal border-b border-border/30 sticky top-20 z-40">
        <div className="container-luxury">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1 w-full lg:max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search by address or property name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-secondary border-border text-foreground"
              />
            </div>

            {/* Mobile Filter Toggle */}
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden border-border text-foreground"
            >
              <SlidersHorizontal className="w-4 h-4 mr-2" />
              Filters
            </Button>

            {/* Desktop Filters */}
            <div
              className={`flex flex-col lg:flex-row gap-4 w-full lg:w-auto ${
                showFilters ? "flex" : "hidden lg:flex"
              }`}
            >
              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger className="w-full lg:w-[160px] bg-secondary border-border text-foreground">
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="under-1m">Under $1M</SelectItem>
                  <SelectItem value="1m-2m">$1M - $2M</SelectItem>
                  <SelectItem value="2m-3m">$2M - $3M</SelectItem>
                  <SelectItem value="over-3m">$3M+</SelectItem>
                </SelectContent>
              </Select>

              <Select value={beds} onValueChange={setBeds}>
                <SelectTrigger className="w-full lg:w-[140px] bg-secondary border-border text-foreground">
                  <SelectValue placeholder="Bedrooms" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Beds</SelectItem>
                  <SelectItem value="3">3 Beds</SelectItem>
                  <SelectItem value="4">4 Beds</SelectItem>
                  <SelectItem value="5+">5+ Beds</SelectItem>
                </SelectContent>
              </Select>

              <Select value={status} onValueChange={setStatus}>
                <SelectTrigger className="w-full lg:w-[140px] bg-secondary border-border text-foreground">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="For Sale">For Sale</SelectItem>
                  <SelectItem value="Pending">Pending</SelectItem>
                  <SelectItem value="Sold">Sold</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="section-padding">
        <div className="container-luxury">
          <div className="flex justify-between items-center mb-8">
            <p className="text-muted-foreground">
              Showing {filteredProperties.length} properties
            </p>
          </div>
          {filteredProperties.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg mb-4">
                No properties match your criteria.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm("");
                  setPriceRange("all");
                  setBeds("all");
                  setStatus("all");
                }}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
