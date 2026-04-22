import { motion } from "motion/react";

export const FireBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      {/* Base Image with subtle zoom-in animation */}
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
      >
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat opacity-50"
          style={{
            backgroundImage: "url('/branding/numens background.png')"
          }}
        />
      </motion.div>

      {/* Layer for deep vignette and color depth */}
      <div 
        className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20"
      />

      {/* Intensive Pulsing Light Glow from the bottom-left */}
      <motion.div
        className="absolute bottom-[-30%] left-[-20%] w-[120%] h-[120%] rounded-full bg-orange-600/20 blur-[160px]"
        animate={{
          opacity: [0.2, 0.5, 0.2],
          scale: [0.8, 1.2, 0.8],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Fiery Heat Distortion / Glow overlay */}
      <motion.div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 100%, rgba(234, 88, 12, 0.3) 0%, transparent 70%)"
        }}
        animate={{
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating Sparkles (Increased density and movement) */}
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-orange-500 opacity-40 blur-[1px]"
          style={{
            width: Math.random() * 4 + 1,
            height: Math.random() * 4 + 1,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100 + 20}%`, // Start slightly lower
          }}
          animate={{
            y: [-100, -800], // Fast upward movement like true sparks
            x: [(Math.random() - 0.5) * 100, (Math.random() - 0.5) * 400],
            opacity: [0, 0.8, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: Math.random() * 4 + 4,
            repeat: Infinity,
            delay: Math.random() * 15,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Subtle Scanline Effect for technical feel */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />
    </div>
  );
};
