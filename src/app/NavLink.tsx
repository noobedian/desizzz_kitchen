// src/app/NavLink.tsx
import React from "react";
import clsx from "clsx";

interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  href: string;
  className?: string;
}

export const NavLink: React.FC<NavLinkProps> = ({ children, href, className = "", ...props }) => {
  return (
    <a
      href={href}
      className={clsx(
        "relative inline-flex items-center justify-center px-3 py-1.5 font-medium text-[#800000] group focus:outline-none",
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {/* 6 animated spans for the hover effect */}
      {/* Top 3 */}
      <span className="navlink-span top-0 left-0" />
      <span className="navlink-span top-0 left-[25%]" />
      <span className="navlink-span top-0 left-[50%]" />
      {/* Bottom 3 */}
      <span className="navlink-span bottom-0 left-0" />
      <span className="navlink-span bottom-0 left-[33%]" />
      <span className="navlink-span bottom-0 left-[66%]" />
    </a>
  );
};
