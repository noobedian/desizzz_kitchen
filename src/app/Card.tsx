import * as React from "react";
import Image from "next/image";

export function Card({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`bg-white shadow-lg rounded-lg overflow-hidden ${className}`} {...props} />
  );
}

export function CardImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={400}
      height={224}
      className={className}
    />
  );
}

export function CardBody({ children }: { children: React.ReactNode }) {
  return <div className="p-4 text-center">{children}</div>;
}
