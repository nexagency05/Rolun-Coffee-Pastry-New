"use client";

/**
 * Lightweight, reusable scroll-reveal primitives built on Framer Motion.
 * Animations are subtle (opacity + small translate) and only run once when an
 * element scrolls into view. `prefers-reduced-motion` is honoured globally via
 * CSS and Framer's own reduced-motion handling.
 */
import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const VIEWPORT = { once: true, margin: "-80px" } as const;

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** vertical offset in px (default 24) */
  y?: number;
  as?: "div" | "section" | "li" | "article" | "header" | "span";
};

export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  as = "div",
}: RevealProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      variants={{
        hidden: { opacity: 0, y },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: EASE, delay },
        },
      }}
    >
      {children}
    </MotionTag>
  );
}

type StaggerProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "ul" | "section";
};

/** Wrap a group of <StaggerItem> children to reveal them in sequence. */
export function Stagger({ children, className, as = "div" }: StaggerProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      variants={container}
    >
      {children}
    </MotionTag>
  );
}

export function StaggerItem({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "article";
}) {
  const MotionTag = motion[as];
  return (
    <MotionTag className={className} variants={fadeUp}>
      {children}
    </MotionTag>
  );
}
