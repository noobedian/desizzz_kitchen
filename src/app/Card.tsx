import * as React from "react";

export function Card({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`bg-white shadow-lg rounded-lg overflow-hidden ${className}`} {...props} />
  );
}

export function CardImage({ src, alt }: { src: string; alt: string }) {
  return (
    <img src={src} alt={alt} className="w-full h-48 object-cover" />
  );
}

export function CardBody({ children }: { children: React.ReactNode }) {
  return <div className="p-4 text-center">{children}</div>;
}
