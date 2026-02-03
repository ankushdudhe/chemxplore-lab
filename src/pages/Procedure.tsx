import { motion } from "framer-motion";
import { Clock, AlertTriangle, CheckCircle2, FlaskConical } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";
import Navigation from "@/components/Navigation";
import AIChatbot from "@/components/AIChatbot";

interface ProcedureProps {
  user: { email: string } | null;
}

const steps = [
  {
    step: 1,
    title: "Prepare the Invisible Ink",
    duration: "5 minutes",
    description: "Prepare a dilute solution of lemon juice or citric acid to use as invisible ink.",
    details: [
      "Mix lemon juice with a small amount of water if using concentrated citric acid",
      "Stir until the solution is uniform",
      "Pour a small amount into a clean container",
    ],
  },
  {
    step: 2,
    title: "Write the Message",
    duration: "10 minutes",
    description: "Use a cotton swab or brush to write a message on plain white paper.",
    details: [
      "Dip the swab lightly into the solution",
      "Write clearly but avoid oversaturating the paper",
      "Allow the paper to dry completely",
    ],
  },
  {
    step: 3,
    title: "Allow Ink to Become Invisible",
    duration: "10 minutes",
    description: "Let the paper air-dry until the writing is no longer visible.",
    details: [
      "Place paper on a flat surface",
      "Do not apply heat at this stage",
      "Ensure the paper appears blank before proceeding",
    ],
  },
  {
    step: 4,
    title: "Apply Heat",
    duration: "5 minutes",
    description: "Gently heat the paper using a hair dryer to reveal the hidden message.",
    details: [
      "Set the hair dryer to low or medium heat",
      "Keep the dryer moving to avoid scorching",
      "Observe the writing darken and become visible",
    ],
  },
  {
    step: 5,
    title: "Observe Chemical Reaction",
    duration: "5 minutes",
    description: "Watch as the acid-treated areas darken faster than untreated paper.",
    details: [
      "Note the color change of the writing",
      "Compare heated vs non-heated areas",
      "Relate observations to oxidation and heat effects",
    ],
  },
  {
    step: 6,
    title: "Record Results",
    duration: "10 minutes",
    description: "Document observations and photograph the revealed message.",
    details: [
      "Take photos before and after heating",
      "Record clarity and darkness of text",
      "Note any differences based on ink concentration",
    ],
  },
];


const safetyPrecautions = [
  "Avoid contact with eyes when handling lemon juice or citric acid",
  "Wash hands after completing the experiment",
  "Use the hair dryer on low or medium heat only",
  "Keep the heat source moving to prevent paper from burning",
  "Perform the experiment in a well-ventilated area",
  "Adult supervision is recommended when using heat sources",
];

const Procedure = ({ user }: ProcedureProps) => {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <Navigation user={user} />
      <AIChatbot />

      <div className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-muted-foreground mb-4">
              <FlaskConical className="h-4 w-4 text-primary" />
              <span>Step-by-Step Guide</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold gradient-text mb-4">
              Experimental Procedure
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Follow these detailed steps to successfully conduct the 
              invisible ink experiment from start to finish.
            </p>
          </motion.div>

          {/* Safety Section */}
          <motion.div
            className="glass-card p-6 mb-12 border-l-4 border-l-destructive"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-destructive/20 flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="h-6 w-6 text-destructive" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground mb-3">
                  Safety Precautions
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {safetyPrecautions.map((precaution, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-chemistry-green flex-shrink-0 mt-0.5" />
                      <span>{precaution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-chemistry-purple via-chemistry-blue to-chemistry-cyan hidden md:block" />

            {/* Steps */}
            <div className="space-y-8">
              {steps.map((item, index) => (
                <motion.div
                  key={item.step}
                  className="relative"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <div className="flex gap-6">
                    {/* Step number */}
                    <div className="relative z-10 hidden md:flex">
                      <div className="w-16 h-16 rounded-2xl bg-chemistry-gradient flex items-center justify-center pulse-glow">
                        <span className="font-display text-2xl font-bold text-primary-foreground">
                          {item.step}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 glass-card p-6 hover:border-primary/50 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="md:hidden w-10 h-10 rounded-xl bg-chemistry-gradient flex items-center justify-center">
                          <span className="font-display font-bold text-primary-foreground">
                            {item.step}
                          </span>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-display text-xl font-semibold text-foreground">
                            {item.title}
                          </h3>
                        </div>
                        <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-muted text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{item.duration}</span>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4">
                        {item.description}
                      </p>

                      <div className="space-y-2">
                        {item.details.map((detail, detailIndex) => (
                          <div
                            key={detailIndex}
                            className="flex items-start gap-2 text-sm"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Total Time */}
          <motion.div
            className="mt-12 glass-card p-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 text-primary">
              <Clock className="h-5 w-5" />
              <span className="font-display font-semibold">Total Experiment Time:</span>
            </div>
            <p className="text-2xl font-display font-bold text-foreground mt-2">
              Approximately 45–60 minutes
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              (May vary based on ambient conditions and equipment)
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Procedure;
