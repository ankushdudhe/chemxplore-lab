import { motion } from "framer-motion";
import { AlertTriangle, Shield, FlaskConical, Atom } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";
import Navigation from "@/components/Navigation";
import AIChatbot from "@/components/AIChatbot";

interface ChemicalsProps {
  user: { email: string } | null;
}

const chemicals = [
  {
    name: "Citric Acid",
    formula: "C₆H₈O₇",
    purpose: "Acts as the invisible ink; reacts with heat to reveal hidden writing on paper",
    safety: "Mildly acidic. Avoid eye contact. Wash hands after handling.",
    color: "from-chemistry-yellow to-chemistry-orange",
    hazardLevel: "low",
  },
  {
    name: "Lemon Juice",
    formula: "Mixture (contains citric acid)",
    purpose: "Natural source of acid used as invisible ink",
    safety: "Generally safe. Avoid contact with eyes or cuts. Wash hands after use.",
    color: "from-chemistry-yellow to-chemistry-green",
    hazardLevel: "low",
  },
  {
    name: "Water",
    formula: "H₂O",
    purpose: "Used to dilute citric acid or lemon juice to control ink strength",
    safety: "Safe for handling. Use clean containers to prevent contamination.",
    color: "from-chemistry-blue to-chemistry-cyan",
    hazardLevel: "none",
  },
  {
    name: "Paper",
    formula: "Cellulose",
    purpose: "Surface for writing and observing heat-activated color change",
    safety: "Safe to handle. Do not overheat to avoid burning.",
    color: "from-chemistry-neutral to-chemistry-gray",
    hazardLevel: "none",
  },
  {
    name: "Hair Dryer (Heat Source)",
    formula: "N/A",
    purpose: "Provides heat to activate the chemical reaction and reveal the invisible ink",
    safety: "Use with caution. Keep moving and at a safe distance to prevent fire hazards.",
    color: "from-chemistry-red to-chemistry-orange",
    hazardLevel: "medium",
  },
];


const getHazardBadge = (level: string) => {
  const styles = {
    none: "bg-chemistry-green/20 text-chemistry-green border-chemistry-green/30",
    low: "bg-chemistry-cyan/20 text-chemistry-cyan border-chemistry-cyan/30",
    medium: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    high: "bg-destructive/20 text-destructive border-destructive/30",
  };
  return styles[level as keyof typeof styles] || styles.low;
};

const Chemicals = ({ user }: ChemicalsProps) => {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <Navigation user={user} />
      <AIChatbot />

      <div className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-muted-foreground mb-4">
              <FlaskConical className="h-4 w-4 text-primary" />
              <span>Materials List</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold gradient-text mb-4">
              Chemicals Used
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive list of all reagents and compounds used in our 
              crystallization experiment, including their formulas and safety information.
            </p>
          </motion.div>

          {/* Safety Banner */}
          <motion.div
            className="glass-card p-6 mb-12 border-l-4 border-l-primary"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground mb-2">
                  Safety First
                </h3>
                <p className="text-muted-foreground">
                  Always handle lemon juice or citric acid solutions with care to avoid skin or eye irritation. Wear basic protective equipment such as safety goggles and gloves when preparing and using the solution. Use the hair dryer cautiously and keep it at a safe distance from the paper to prevent overheating or fire hazards.
                   Perform the experiment in a well-ventilated area and under adult supervision if required.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Chemicals Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {chemicals.map((chemical, index) => (
              <motion.div
                key={chemical.name}
                className="glass-card p-6 hover:border-primary/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${chemical.color} flex items-center justify-center flex-shrink-0`}>
                    <Atom className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-2">
                      <h3 className="font-display text-xl font-semibold text-foreground">
                        {chemical.name}
                      </h3>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${getHazardBadge(chemical.hazardLevel)}`}>
                        {chemical.hazardLevel === "none" ? "Safe" : `${chemical.hazardLevel.charAt(0).toUpperCase() + chemical.hazardLevel.slice(1)} Risk`}
                      </span>
                    </div>
                    <p className="font-mono text-lg text-primary mb-3">
                      {chemical.formula}
                    </p>
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-sm font-medium text-foreground mb-1">Purpose</h4>
                        <p className="text-sm text-muted-foreground">
                          {chemical.purpose}
                        </p>
                      </div>
                      <div className="flex items-start gap-2 p-3 rounded-lg bg-muted/50">
                        <AlertTriangle className="h-4 w-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                        <p className="text-xs text-muted-foreground">
                          {chemical.safety}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Legend */}
<motion.div
  className="mt-12 glass-card p-6"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.6 }}
>
  <h3 className="font-display font-semibold text-foreground mb-4">
    Hazard Level Legend
  </h3>
  <div className="flex flex-wrap gap-4">
    {[
      { level: "none", label: "Safe – No special precautions required" },
      { level: "low", label: "Low Risk – Avoid eye contact; wash hands after use" },
      { level: "medium", label: "Medium Risk – Heat source; use with care and supervision" },
    ].map((item) => (
      <div key={item.level} className="flex items-center gap-2">
        <span
          className={`px-2 py-0.5 rounded-full text-xs font-medium border ${getHazardBadge(
            item.level
          )}`}
        >
          {item.level === "none"
            ? "Safe"
            : item.level.charAt(0).toUpperCase() + item.level.slice(1)}
        </span>
        <span className="text-sm text-muted-foreground">{item.label}</span>
      </div>
    ))}
  </div>
</motion.div>
        </div>
      </div>
    </div>
  );
};

export default Chemicals;
