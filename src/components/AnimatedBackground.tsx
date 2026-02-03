import { motion } from "framer-motion";

const molecules = [
  { id: 1, x: "10%", y: "20%", delay: 0, size: 60 },
  { id: 2, x: "80%", y: "15%", delay: 1, size: 40 },
  { id: 3, x: "20%", y: "70%", delay: 2, size: 50 },
  { id: 4, x: "70%", y: "60%", delay: 0.5, size: 35 },
  { id: 5, x: "50%", y: "30%", delay: 1.5, size: 45 },
  { id: 6, x: "85%", y: "80%", delay: 2.5, size: 55 },
  { id: 7, x: "15%", y: "45%", delay: 3, size: 30 },
];

const AtomIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    {/* Nucleus */}
    <circle cx="50" cy="50" r="8" fill="url(#nucleusGradient)" />
    
    {/* Electron orbits */}
    <ellipse cx="50" cy="50" rx="35" ry="15" 
      stroke="url(#orbitGradient)" strokeWidth="1" opacity="0.4" 
      transform="rotate(-30 50 50)" />
    <ellipse cx="50" cy="50" rx="35" ry="15" 
      stroke="url(#orbitGradient)" strokeWidth="1" opacity="0.4" 
      transform="rotate(30 50 50)" />
    <ellipse cx="50" cy="50" rx="35" ry="15" 
      stroke="url(#orbitGradient)" strokeWidth="1" opacity="0.4" 
      transform="rotate(90 50 50)" />
    
    {/* Electrons */}
    <circle cx="85" cy="50" r="4" fill="hsl(190 90% 50%)">
      <animateTransform 
        attributeName="transform" 
        type="rotate" 
        from="0 50 50" 
        to="360 50 50" 
        dur="4s" 
        repeatCount="indefinite" />
    </circle>
    <circle cx="50" cy="15" r="4" fill="hsl(270 70% 60%)">
      <animateTransform 
        attributeName="transform" 
        type="rotate" 
        from="120 50 50" 
        to="480 50 50" 
        dur="3s" 
        repeatCount="indefinite" />
    </circle>
    <circle cx="15" cy="50" r="4" fill="hsl(220 80% 55%)">
      <animateTransform 
        attributeName="transform" 
        type="rotate" 
        from="240 50 50" 
        to="600 50 50" 
        dur="5s" 
        repeatCount="indefinite" />
    </circle>
    
    <defs>
      <radialGradient id="nucleusGradient">
        <stop offset="0%" stopColor="hsl(270 70% 70%)" />
        <stop offset="100%" stopColor="hsl(270 70% 50%)" />
      </radialGradient>
      <linearGradient id="orbitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(270 70% 60%)" />
        <stop offset="100%" stopColor="hsl(220 80% 55%)" />
      </linearGradient>
    </defs>
  </svg>
);

const BeakerIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <path 
      d="M30 20 L30 50 L20 80 C18 85 22 90 28 90 L72 90 C78 90 82 85 80 80 L70 50 L70 20" 
      stroke="url(#beakerGradient)" 
      strokeWidth="2" 
      fill="none" 
      opacity="0.6" 
    />
    <path 
      d="M25 75 Q50 65 75 75 L72 85 C70 88 65 90 50 90 C35 90 30 88 28 85 Z" 
      fill="url(#liquidGradient)" 
      opacity="0.4" 
    />
    <line x1="25" y1="20" x2="35" y2="20" stroke="hsl(270 70% 60%)" strokeWidth="2" />
    <line x1="65" y1="20" x2="75" y2="20" stroke="hsl(270 70% 60%)" strokeWidth="2" />
    
    <defs>
      <linearGradient id="beakerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(190 90% 50%)" />
        <stop offset="100%" stopColor="hsl(220 80% 55%)" />
      </linearGradient>
      <linearGradient id="liquidGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="hsl(270 70% 60%)" />
        <stop offset="100%" stopColor="hsl(320 70% 60%)" />
      </linearGradient>
    </defs>
  </svg>
);

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Gradient overlay */}
      <div className="absolute inset-0 animated-bg" />
      
      {/* Radial gradient spots */}
      <div 
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, hsl(270 70% 60% / 0.3) 0%, transparent 70%)",
        }}
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, hsl(220 80% 55% / 0.3) 0%, transparent 70%)",
        }}
      />
      
      {/* Floating molecules */}
      {molecules.map((molecule, index) => (
        <motion.div
          key={molecule.id}
          className="absolute"
          style={{ left: molecule.x, top: molecule.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 0.3, 
            scale: 1,
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            opacity: { delay: molecule.delay, duration: 1 },
            scale: { delay: molecule.delay, duration: 1 },
            y: { 
              repeat: Infinity, 
              duration: 4 + index * 0.5, 
              ease: "easeInOut",
              delay: molecule.delay,
            },
            rotate: {
              repeat: Infinity,
              duration: 6 + index * 0.5,
              ease: "easeInOut",
              delay: molecule.delay,
            },
          }}
        >
          {index % 2 === 0 ? (
            <AtomIcon size={molecule.size} />
          ) : (
            <BeakerIcon size={molecule.size} />
          )}
        </motion.div>
      ))}
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(hsl(270 70% 60% / 0.1) 1px, transparent 1px),
            linear-gradient(90deg, hsl(270 70% 60% / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
