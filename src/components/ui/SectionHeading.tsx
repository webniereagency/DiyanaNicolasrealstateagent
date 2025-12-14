import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      {eyebrow && (
        <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4 block">
          {eyebrow}
        </span>
      )}
      <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-foreground font-semibold mb-4">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-muted-foreground text-lg max-w-2xl",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
