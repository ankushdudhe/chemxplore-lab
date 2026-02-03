import { motion } from "framer-motion";
import { Atom, ArrowRight, Sparkles, Thermometer, Droplets, FlaskConical } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";
import Navigation from "@/components/Navigation";
import AIChatbot from "@/components/AIChatbot";

interface ProcessProps {
  user: { email: string } | null;
}

const processSteps = [
  {
    id: 1,
    icon: FlaskConical,
    title: "Ink Preparation",
    subtitle: "Acid Solution",
    description: "Citric acid or lemon juice is prepared as a weak acidic solution for use as invisible ink.",
    formula: "C₆H₈O₇ (aq)",
    color: "from-chemistry-yellow to-chemistry-orange",
  },
  {
    id: 2,
    icon: Droplets,
    title: "Application",
    subtitle: "Writing on Paper",
    description: "The acidic solution is applied to paper using a cotton swab, leaving no visible marks once dry.",
    formula: "Paper + Acid → Invisible Writing",
    color: "from-chemistry-orange to-chemistry-green",
  },
  {
    id: 3,
    icon: Thermometer,
    title: "Heat Activation",
    subtitle: "Thermal Energy",
    description: "Heat is applied using a hair dryer, supplying energy to trigger chemical changes.",
    formula: "↑ Heat Energy",
    color: "from-chemistry-green to-chemistry-red",
  },
  {
    id: 4,
    icon: Atom,
    title: "Oxidation",
    subtitle: "Paper Fiber Reaction",
    description: "Acid-treated paper fibers oxidize and weaken, darkening faster than untreated areas.",
    formula: "Cellulose + Heat → Oxidation",
    color: "from-chemistry-red to-chemistry-purple",
  },
  {
    id: 5,
    icon: Sparkles,
    title: "Message Revealed",
    subtitle: "Visible Ink",
    description: "The hidden message appears as browned text due to localized chemical reactions.",
    formula: "Invisible → Visible",
    color: "from-chemistry-purple to-chemistry-pink",
  },
];


const Process = ({ user }: ProcessProps) => {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <Navigation user={user} />
      <AIChatbot />

      <div className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-muted-foreground mb-4">
              <Atom className="h-4 w-4 text-primary animate-spin" style={{ animationDuration: "8s" }} />
              <span>Molecular Journey</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold gradient-text mb-4">
              Process & Workflow
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
             Visualize how simple chemical reactions and heat transform invisible ink 
             into visible writing through this animated workflow.

            </p>
          </motion.div>

          {/* Animated Workflow */}
          <div className="relative">
            {/* Connection lines for desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-chemistry-purple via-chemistry-blue to-chemistry-cyan opacity-20" style={{ transform: "translateY(-50%)" }} />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-4">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 * index }}
                >
                  {/* Arrow for mobile */}
                  {index < processSteps.length - 1 && (
                    <div className="lg:hidden flex justify-center my-4">
                      <ArrowRight className="h-6 w-6 text-primary rotate-90" />
                    </div>
                  )}

                  {/* Card */}
                  <motion.div
                    className="glass-card p-6 h-full hover:border-primary/50 transition-all duration-300 group"
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    {/* Icon */}
                    <motion.div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mx-auto mb-4`}
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <step.icon className="h-8 w-8 text-primary-foreground" />
                    </motion.div>

                    {/* Step number */}
                    <div className="text-center mb-3">
                      <span className="text-sm text-muted-foreground">Step {step.id}</span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-lg font-semibold text-foreground text-center mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-primary text-center mb-3">
                      {step.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground text-center mb-4">
                      {step.description}
                    </p>

                    {/* Formula */}
                    <div className="p-3 rounded-lg bg-muted/50 text-center">
                      <code className="text-xs text-chemistry-cyan font-mono">
                        {step.formula}
                      </code>
                    </div>
                  </motion.div>

                  {/* Arrow between cards (desktop) */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-4 z-10" style={{ transform: "translateY(-50%)" }}>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                      >
                        <ArrowRight className="h-6 w-6 text-primary" />
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Key Concepts */}
          <motion.div
            className="mt-16 glass-card p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <h2 className="font-display text-2xl font-bold gradient-text mb-6 text-center">
              Key Scientific Concepts
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
  {
    title: "Oxidation",
    description: "A chemical reaction where paper fibers darken when exposed to heat and oxygen.",
    icon: "🔥",
  },
  {
    title: "Acidic Compounds",
    description: "Citric acid weakens cellulose fibers, causing treated areas to brown more quickly.",
    icon: "🍋",
  },
  {
    title: "Heat Activation",
    description: "Thermal energy speeds up chemical reactions, revealing the hidden message.",
    icon: "🌡️",
  },
].map((concept, index) => (
                <motion.div
                  key={concept.title}
                  className="p-5 rounded-xl bg-muted/30"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                >
                  <div className="text-3xl mb-3">{concept.icon}</div>
                  <h3 className="font-display font-semibold text-foreground mb-2">
                    {concept.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {concept.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Animated molecule decoration */}
          <motion.div
            className="mt-12 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <div className="flex items-center gap-4 text-muted-foreground">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              >
                <Atom className="h-8 w-8 text-primary" />
              </motion.div>
              <span className="font-mono text-sm">
                Heat revealing hidden chemical messages...
              </span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                <Sparkles className="h-6 w-6 text-chemistry-cyan" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Process;
