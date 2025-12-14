import { Star, Quote } from "lucide-react";

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
  image?: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="luxury-card rounded-lg p-8 relative">
      <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/20" />
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < testimonial.rating
                ? "text-primary fill-primary"
                : "text-muted"
            }`}
          />
        ))}
      </div>
      <p className="text-foreground/90 text-lg leading-relaxed mb-6 italic">
        "{testimonial.text}"
      </p>
      <div className="flex items-center gap-4">
        {testimonial.image ? (
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">
            {testimonial.name.charAt(0)}
          </div>
        )}
        <div>
          <p className="font-playfair text-foreground font-medium">
            {testimonial.name}
          </p>
          <p className="text-muted-foreground text-sm">{testimonial.location}</p>
        </div>
      </div>
    </div>
  );
}
