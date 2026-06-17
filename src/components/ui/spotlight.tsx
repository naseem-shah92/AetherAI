import React from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";

interface SpotlightProps {
  className?: string;
  fill?: string;
}

export const Spotlight: React.FC<SpotlightProps> = ({
  className = "",
  fill = "rgba(109, 59, 215, 0.15)",
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = React.useCallback(
    ({ currentTarget, clientX, clientY }: React.MouseEvent) => {
      const { left, top } = currentTarget.getBoundingClientRect();
      const x = clientX - left;
      const y = clientY - top;
      mouseX.set(x);
      mouseY.set(y);
    },
    [mouseX, mouseY]
  );

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`pointer-events-none absolute inset-0 z-0 h-full w-full overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 bg-transparent" />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(600px_at_var(--x)_var(--y),var(--color),transparent_80%)]"
        style={
          {
            "--x": useMotionTemplate`${mouseX}px`,
            "--y": useMotionTemplate`${mouseY}px`,
            "--color": fill,
          } as any
        }
      />
    </div>
  );
};
