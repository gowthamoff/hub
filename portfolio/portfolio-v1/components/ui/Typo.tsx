"use client";
import React from "react";

// Define font scale ratio (1.25 - Major Third Scale)
const fontScale = {
  // Display - Used for hero sections and major features
  display1:
    "text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight", // 72px+
  display2:
    "text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight", // 60px+

  // Headlines - Article titles, section headers
  headline1: "text-4xl md:text-5xl lg:text-6xl font-bold leading-tight", // 48px+
  headline2: "text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight", // 36px+
  headline3: "text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug", // 30px+

  // Titles - Card titles, modal headers
  title1: "text-xl md:text-2xl lg:text-3xl font-semibold leading-snug", // 24px+
  title2: "text-lg md:text-xl lg:text-2xl font-semibold leading-snug", // 20px+
  title3: "text-base md:text-lg lg:text-xl font-medium leading-normal", // 18px+

  // Body text variants
  bodyLarge: "text-lg md:text-xl font-normal leading-relaxed", // 18px
  bodyDefault: "text-base font-normal leading-relaxed", // 16px
  bodySmall: "text-sm font-normal leading-relaxed", // 14px
  bodyXSmall: "text-xs font-normal leading-relaxed", // 12px

  // UI elements
  button: "text-sm md:text-base font-medium leading-none tracking-wide", // 14-16px
  caption: "text-xs font-normal leading-normal text-gray-600", // 12px
  overline: "text-xs font-medium uppercase tracking-widest", // 12px

  // Data display
  tabular: "text-sm md:text-base font-normal tabular-nums leading-normal",
  code: "text-sm font-mono leading-normal",

  // Marketing-specific
  hero: "text-7xl md:text-8xl lg:text-9xl font-black leading-tight tracking-tighter",
  tagline:
    "text-xl md:text-2xl lg:text-3xl font-light leading-relaxed tracking-wide",
};

interface TextProps {
  variant: keyof typeof fontScale;
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  color?: string;
  align?: "left" | "center" | "right" | "justify";
  truncate?: boolean;
  uppercase?: boolean;
  lowercase?: boolean;
  capitalize?: boolean;
  weight?:
    | "thin"
    | "light"
    | "normal"
    | "medium"
    | "semibold"
    | "bold"
    | "black";
  italic?: boolean;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  id?: string;
}

const weightClasses = {
  thin: "font-thin",
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-[700]",
  black: "font-black",
};

const defaultElements: Record<string, keyof JSX.IntrinsicElements> = {
  display1: "h1",
  display2: "h1",
  headline1: "h1",
  headline2: "h2",
  headline3: "h3",
  title1: "h4",
  title2: "h5",
  title3: "h6",
  bodyLarge: "p",
  bodyDefault: "p",
  bodySmall: "p",
  bodyXSmall: "p",
  button: "span",
  caption: "span",
  overline: "span",
  tabular: "span",
  code: "code",
  hero: "h1",
  tagline: "p",
};

const Text = ({
  variant,
  children = "",
  as,
  className = "",
  color = "",
  align,
  truncate,
  uppercase,
  lowercase,
  capitalize,
  weight,
  italic,
  onClick,
  id,
}: TextProps) => {
  const Component = as || defaultElements[variant];

  const classes = [
    fontScale[variant],
    color,
    align && `text-${align}`,
    truncate && "truncate",
    uppercase && "uppercase",
    lowercase && "lowercase",
    capitalize && "capitalize",
    weight && weightClasses[weight],
    italic && "italic",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return React.createElement(
    Component,
    {
      className: classes,
      onClick,
      id,
    },
    children
  );
};

// Example usage component demonstrating various text styles
export const TypographyExample = () => {
  return (
    <div className="space-y-8 p-8">
      {/* Marketing */}
      <section className="space-y-4">
        <Text variant="hero">Welcome</Text>
        <Text variant="tagline" color="text-gray-600">
          Crafting digital experiences that matter
        </Text>
      </section>

      {/* Article/Content */}
      <section className="space-y-4">
        <Text variant="headline1">Main Article Title</Text>
        <Text variant="bodyLarge" color="text-gray-700">
          Lead paragraph with important opening information that draws the
          reader in and provides context for the content that follows.
        </Text>
        <Text variant="bodyDefault">
          Regular content text that forms the main body of the article. This
          text should be highly readable and maintain comfortable line length
          and height.
        </Text>
      </section>

      {/* UI Elements */}
      <section className="space-y-2">
        <Text variant="overline" color="text-gray-500">
          SECTION LABEL
        </Text>
        <Text variant="title2">Card Title</Text>
        <Text variant="bodySmall" color="text-gray-600">
          Supporting text for UI element
        </Text>
      </section>

      {/* Data Display */}
      <section className="space-y-2">
        <Text variant="tabular">1,234.56</Text>
      </section>
    </div>
  );
};

export default Text;
