"use client";
import { motion } from "framer-motion";

export default function AnimatedItem({
  children,
  index,
  className,
  as = "div",
}) {
  const fromLeft = index % 2 === 0;
  const MotionComponent = motion[as];

  return (
    <MotionComponent
      initial={{ opacity: 0, x: fromLeft ? -60 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {children}
    </MotionComponent>
  );
}
