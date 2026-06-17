import React from "react";
import { motion } from "framer-motion";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverGlow?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  hoverGlow = true,
  id,
  ...props
}) => {
  return (
    <motion.div
      id={id}
      whileHover={hoverGlow ? { y: -4, scale: 1.01 } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`relative overflow-hidden rounded-2xl border border-white/10 bg-[#1d1a23]/60 backdrop-blur-xl p-6 transition-all duration-300 hover:border-white/20 select-none ${className}`}
      style={{
        boxShadow: hoverGlow ? "0 10px 30px -15px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.05)" : "inset 0 1px 0 rgba(255,255,255,0.05)",
      }}
      {...props}
    >
      {/* Interactive subtle inner glow or background ray */}
      {hoverGlow && (
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 opacity-0 transition-opacity duration-500 hover:opacity-100 pointer-events-none" />
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className = "",
  ...props
}) => (
  <div className={`mb-4 flex flex-col space-y-1.5 ${className}`} {...props}>
    {children}
  </div>
);

export const CardTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  className = "",
  ...props
}) => (
  <h3 className={`font-sans text-xl font-semibold tracking-tight text-white ${className}`} {...props}>
    {children}
  </h3>
);

export const CardDescription: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({
  children,
  className = "",
  ...props
}) => (
  <p className={`font-sans text-sm text-[#cbc3d7]/80 ${className}`} {...props}>
    {children}
  </p>
);

export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className = "",
  ...props
}) => (
  <div className={`mt-2 ${className}`} {...props}>
    {children}
  </div>
);

export const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className = "",
  ...props
}) => (
  <div className={`mt-4 pt-4 border-t border-white/5 flex items-center ${className}`} {...props}>
    {children}
  </div>
);
