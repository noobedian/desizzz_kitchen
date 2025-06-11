import * as React from "react";
import clsx from "clsx";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "outline";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "solid", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(
          "font-semibold rounded-full transition focus:outline-none focus:ring-2 focus:ring-offset-2",
          {
            "bg-[#800000] text-white hover:bg-[#9a0000]": variant === "solid",
            "border border-[#800000] text-[#800000] bg-transparent hover:bg-[#800000] hover:text-white": variant === "outline",
            "px-4 py-2 text-base": size === "md",
            "px-6 py-3 text-lg": size === "lg",
            "px-3 py-1.5 text-sm": size === "sm",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
