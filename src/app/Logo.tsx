import * as React from "react";
import Image from "next/image";

export function Logo() {
  return (
    <Image
      src="/mylogo.svg" // or "/mylogo.png" if it's a PNG
      alt="Desizzz Kitchen Logo"
      width={120}
      height={40}
      priority
    />
  );
}
