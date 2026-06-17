import React, { useState, Suspense } from "react";
import Spline from "@splinetool/react-spline";
import { motion, AnimatePresence } from "framer-motion";

interface SplineSceneProps {
  scene: string;
  className?: string;
}

export const SplineScene: React.FC<SplineSceneProps> = ({
  scene,
  className = "",
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative w-full h-full overflow-hidden min-h-[300px] md:min-h-[500px] ${className}`}>
      {/* Fallback & Loading state under the Spine scene */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="fallback"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 flex flex-col items-center justify-center bg-transparent z-10"
          >
            {/* Pulsing Ethereal Portal Fallback */}
            <div className="relative w-56 h-56 md:w-80 md:h-80 rounded-full flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-600/30 via-cyan-500/20 to-pink-500/30 blur-3xl animate-pulse" />
              <div className="absolute inset-4 rounded-full bg-[#15121b]/80 border border-white/10 backdrop-blur-3xl flex flex-col items-center justify-center p-4 text-center">
                <div className="w-8 h-8 rounded-full border-t-2 border-r-2 border-cyan-400 animate-spin mb-4" />
                <p className="text-xs text-[#cbc3d7]/60 tracking-wider font-mono">
                  INITIALIZING COGNITIVE INTERFACE...
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!hasError ? (
        <Suspense fallback={null}>
          <div className="w-full h-full">
            <Spline
              scene={scene}
              onLoad={() => {
                setIsLoading(false);
              }}
              onError={() => {
                setHasError(true);
                setIsLoading(false);
              }}
            />
          </div>
        </Suspense>
      ) : (
        /* Gorgeous alternative interactive glow illustration if offline or error occurs */
        <div className="w-full h-full flex items-center justify-center bg-transparent">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-600/20 via-cyan-500/20 to-pink-500/25 blur-3xl animate-pulse" />
            
            {/* Spinning vector rings imitating real-time AI processing */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-purple-500/20"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className="absolute inset-10 rounded-full border border-double border-cyan-400/30"
            />
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute inset-20 rounded-full bg-gradient-to-r from-purple-500/30 to-cyan-500/30 blur-2xl flex items-center justify-center"
            />

            {/* Glowing active core */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              <span className="text-sm font-semibold text-white/90 drop-shadow-[0_0_15px_rgba(208,188,255,0.4)]">
                AetherAI Interactive Model
              </span>
              <span className="text-[10px] font-mono mt-1 text-cyan-400/90 tracking-widest uppercase">
                Ready & Responsive
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
