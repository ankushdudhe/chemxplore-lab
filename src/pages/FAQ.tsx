import { motion } from "framer-motion";
import { HelpCircle, ChevronDown } from "lucide-react";
import { useState } from "react";
import AnimatedBackground from "@/components/AnimatedBackground";
import Navigation from "@/components/Navigation";
import AIChatbot from "@/components/AIChatbot";

interface FAQProps {
  user: { email: string } | null;
}

const faqs = [
  {
    question: "What is invisible ink and how does it work?",
    answer: "Invisible ink is a substance that is applied to paper and is invisible when it dries. In our experiment, citric acid or lemon juice acts as the ink. It contains organic compounds that are invisible when dry but react with heat to oxidize, making the writing appear brown on the paper.",
  },
  {
    question: "Why does the message appear when the paper is heated?",
    answer: "When the paper with lemon juice or citric acid is gently heated, the organic acids oxidize due to the heat, causing a color change. This is why the previously invisible message suddenly becomes visible as brown text on the paper.",
  },
  {
    question: "Is this experiment safe to do at home?",
    answer: "Yes, this experiment is safe when proper precautions are taken. Citric acid and lemon juice are food-safe substances. However, heating should be done carefully—use an adult's supervision, avoid direct flames, and handle hot surfaces like ovens or irons with caution.",
  },
  {
    question: "What method can I use to reveal the hidden message?",
    answer: "You can reveal the message by gently heating the paper. Common methods include using an iron on low heat, placing the paper under a warm lamp, or carefully holding it above a toaster oven. Avoid overheating, which could burn the paper.",
  },
  {
    question: "Why didn't my invisible ink show up?",
    answer: "There are several reasons why the message may not appear: 1) The ink layer was too thin or diluted, 2) The paper was too wet or too thick, 3) The heat source was too low or uneven, 4) You heated the paper for too short a time. Try using slightly more concentrated lemon juice and applying heat evenly.",
  },
  {
    question: "Can I reuse the same paper for writing again?",
    answer: "Once the paper has been heated and the message revealed, the visible mark usually cannot be erased. However, you can reuse new paper for multiple experiments. The ink itself (lemon juice) is safe and easy to prepare again for repeated experiments.",
  },
  {
    question: "What is the chemical reaction behind the color change?",
    answer: "The color change is due to the oxidation of the organic compounds in lemon juice (mainly citric acid and sugars) when heated. This is a simple thermal reaction, not a complex chemical transformation. The heat causes the molecules to break down and form brown-colored compounds, revealing the writing.",
  },
  {
    question: "Why is this called 'invisible ink'?",
    answer: "It’s called 'invisible ink' because the writing is hidden until a specific action (like heating) is applied. The ink itself is clear and undetectable on paper when dry, giving the appearance of a blank sheet until the message is revealed.",
  },
  {
    question: "How long can an invisible ink message remain hidden?",
    answer: "A message made with lemon juice or citric acid can stay hidden indefinitely if the paper is stored in a cool, dry place away from sunlight and moisture. Exposure to heat or sunlight over time can accidentally reveal the message.",
  },
  {
    question: "What other applications does lemon juice or citric acid have in experiments?",
    answer: "Lemon juice and citric acid are versatile: 1) pH indicator in acid-base experiments, 2) Natural cleaning agent, 3) Part of food preservation experiments, 4) Making simple chemical reactions visible (like color-changing tests), 5) DIY science crafts like invisible ink, 6) Studying oxidation reactions safely at home.",
  },
];


const FAQItem = ({ faq, index }: { faq: typeof faqs[0]; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="glass-card overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.05 * index }}
    >
      <button
        className="w-full p-6 flex items-start gap-4 text-left hover:bg-muted/30 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="w-8 h-8 rounded-lg bg-chemistry-gradient flex items-center justify-center flex-shrink-0">
          <span className="font-display font-bold text-primary-foreground text-sm">
            {index + 1}
          </span>
        </div>
        <div className="flex-1">
          <h3 className="font-display font-semibold text-foreground pr-8">
            {faq.question}
          </h3>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="h-5 w-5 text-muted-foreground" />
        </motion.div>
      </button>

      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6 pl-18">
          <div className="pl-12 pt-2 border-l-2 border-primary/30 ml-4">
            <p className="text-muted-foreground leading-relaxed">
              {faq.answer}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const FAQ = ({ user }: FAQProps) => {
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
              <HelpCircle className="h-4 w-4 text-primary" />
              <span>Common Questions</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold gradient-text mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our crystallization experiment, 
              the science behind it, and how to achieve the best results.
            </p>
          </motion.div>

          {/* FAQ List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} faq={faq} index={index} />
            ))}
          </div>

          {/* Still have questions? */}
          <motion.div
            className="mt-12 glass-card p-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="font-display text-2xl font-bold gradient-text mb-4">
              Still Have Questions?
            </h2>
            <p className="text-muted-foreground mb-6">
              Use our AI chatbot assistant to ask any questions about the experiment. 
              Click the chat button in the bottom-right corner to get started!
            </p>
            <div className="inline-flex items-center gap-2 text-primary">
              <div className="w-3 h-3 rounded-full bg-chemistry-green animate-pulse" />
              <span className="text-sm">ChemBot is online and ready to help</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
