import * as React from "react";
import Spline from "@splinetool/react-spline";

interface Spline3DProps {
  scene?: string;
  className?: string;
}

export function Spline3D({
  scene = "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode",
  className = "",
}: Spline3DProps) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [hasError, setHasError] = React.useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  return (
    <div className={`relative w-full h-full min-h-[350px] md:min-h-[500px] lg:min-h-[600px] flex items-center justify-center ${className}`}>
      {/* Absolute Glow Background behind Spline */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] pointer-events-none -z-10 bg-[radial-gradient(circle_at_center,rgba(160,120,255,0.08)_0%,rgba(76,215,246,0.05)_50%,transparent_100%)] blur-2xl" />

      {/* Loading State / Fallback UI */}
      {(isLoading || hasError) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-6">
          {/* Stunning Interactive CSS Particle fallback */}
          <div className="relative w-full h-full max-w-[450px] max-h-[450px] aspect-square rounded-full flex items-center justify-center">
            {/* Spinning orbital glow rings */}
            <div className="absolute inset-0 border-2 border-dashed border-[#d0bcff]/20 rounded-full animate-spin" style={{ animationDuration: "20s" }} />
            <div className="absolute inset-10 border border-dashed border-[#4cd7f6]/30 rounded-full animate-spin" style={{ animationDuration: "12s", animationDirection: "reverse" }} />
            <div className="absolute inset-20 border border-[#d0bcff]/10 rounded-full animate-ping" style={{ animationDuration: "4s" }} />
            
            {/* Inner Glowing Orb */}
            <div className="w-40 h-40 rounded-full bg-gradient-to-tr from-[#6d3bd7]/40 via-[#d0bcff]/20 to-[#4cd7f6]/40 blur-lg animate-pulse" />
            
            {/* Elegant glass interactive center */}
            <div className="absolute w-32 h-32 rounded-full bg-[#15121b]/80 border border-white/10 flex flex-col items-center justify-center text-center backdrop-blur-md shadow-[0_0_30px_rgba(208,188,255,0.2)]">
              <span className="text-xs font-bold text-[#4cd7f6] uppercase tracking-widest mb-1">AETHER CORE</span>
              <div className="flex space-x-1">
                <span className="w-2 h-2 rounded-full bg-[#d0bcff] animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-2 h-2 rounded-full bg-[#4cd7f6] animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-2 h-2 rounded-full bg-pink-400 animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
            
            {/* Floating digital labels in fallback */}
            <div className="absolute top-10 right-10 text-[10px] font-mono text-[#cbc3d7] bg-white/5 border border-white/10 px-2 py-1 rounded backdrop-blur">
              LATENCY // 12ms
            </div>
            <div className="absolute bottom-12 left-4 text-[10px] font-mono text-[#cbc3d7] bg-white/5 border border-white/10 px-2 py-1 rounded backdrop-blur">
              MODEL // v4.2-NEURAL
            </div>
          </div>
          
          {isLoading && !hasError && (
            <p className="mt-4 text-xs font-semibold text-[#cbc3d7] tracking-widest uppercase animate-pulse">
              Synthesizing 3D Holospace...
            </p>
          )}
          {hasError && (
            <p className="mt-4 text-xs font-semibold text-red-400 tracking-widest uppercase">
              Holospace Fallback Active
            </p>
          )}
        </div>
      )}

      {/* Actual Spline Canvas */}
      {!hasError && (
        <div className={`w-full h-full transition-opacity duration-1000 ${isLoading ? "opacity-0" : "opacity-100"}`}>
          <Spline
            scene={scene}
            onLoad={handleLoad}
            onError={handleError}
          />
        </div>
      )}
    </div>
  );
}

export default Spline3D;
