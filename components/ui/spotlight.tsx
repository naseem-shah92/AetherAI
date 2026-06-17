import * as React from "react";

export interface SpotlightProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  fill?: string;
  size?: number;
}

export function Spotlight({ className = "", fill = "rgba(160, 120, 255, 0.15)", size = 600, ...props }: SpotlightProps) {
  return (
    <div
      className={`pointer-events-none absolute -z-10 overflow-hidden ${className}`}
      style={{
        width: size,
        height: size,
      }}
      {...props}
    >
      <div
        className="w-full h-full rounded-full animate-pulse-slow filter blur-[120px]"
        style={{
          background: `radial-gradient(circle, ${fill} 0%, rgba(0,0,0,0) 70%)`,
          animationDuration: "8s",
        }}
      />
    </div>
  );
}
export default Spotlight;
