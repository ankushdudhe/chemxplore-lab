import { motion } from "framer-motion";
import { Atom, Sparkles } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";
import Navigation from "@/components/Navigation";
import AIChatbot from "@/components/AIChatbot";

interface ProcessProps {
  user: { email: string } | null;
}

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
              <Atom
                className="h-4 w-4 text-primary animate-spin"
                style={{ animationDuration: "8s" }}
              />
              <span>Molecular Journey</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl font-bold gradient-text mb-4">
              Process & Workflow
            </h1>

            <p className="text-muted-foreground max-w-2xl mx-auto">
              Visualize how simple chemical reactions and heat transform invisible ink
              into visible writing through this process flow diagram.
            </p>
          </motion.div>

          {/* Process Flow Diagram */}
          <motion.div
            className="flex justify-center items-center mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-6 md:p-10 max-w-4xl w-full text-center">
              
              <h2 className="font-display text-2xl font-bold gradient-text mb-6">
                Process Flow Diagram
              </h2>

              <img
                src="public\images\process flow.png"  // Place image inside public folder
                alt="Invisible Ink Process Flow Diagram"
                className="w-full h-auto rounded-2xl shadow-xl mx-auto transition-transform duration-300 hover:scale-105"
              />

              <p className="text-sm text-muted-foreground mt-4">
                The diagram illustrates how acid-treated paper reacts with heat,
                causing oxidation and revealing the hidden message.
              </p>
            </div>
          </motion.div>

          {/* Key Concepts */}
          <motion.div
            className="mt-16 glass-card p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="font-display text-2xl font-bold gradient-text mb-6 text-center">
              Key Scientific Concepts
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Oxidation",
                  description:
                    "A chemical reaction where paper fibers darken when exposed to heat and oxygen.",
                  icon: "🔥",
                },
                {
                  title: "Acidic Compounds",
                  description:
                    "Citric acid weakens cellulose fibers, causing treated areas to brown more quickly.",
                  icon: "🍋",
                },
                {
                  title: "Heat Activation",
                  description:
                    "Thermal energy speeds up chemical reactions, revealing the hidden message.",
                  icon: "🌡️",
                },
              ].map((concept, index) => (
                <motion.div
                  key={concept.title}
                  className="p-5 rounded-xl bg-muted/30"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
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
            transition={{ delay: 0.8 }}
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
