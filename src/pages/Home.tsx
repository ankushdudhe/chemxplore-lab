import { motion } from "framer-motion";
import { FlaskConical, Atom, TestTube2, Beaker, ArrowRight, Users } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedBackground from "@/components/AnimatedBackground";
import Navigation from "@/components/Navigation";
import AIChatbot from "@/components/AIChatbot";

interface HomeProps {
  user: { email: string } | null;
}

const features = [
  {
    icon: TestTube2,
    title: "Chemicals Used",
    description: "Explore the reagents and compounds used in our experiment",
    path: "/chemicals",
    color: "from-chemistry-purple to-chemistry-blue",
  },
  {
    icon: Beaker,
    title: "Procedure",
    description: "Step-by-step experimental methodology",
    path: "/procedure",
    color: "from-chemistry-blue to-chemistry-cyan",
  },
  {
    icon: Atom,
    title: "Process & Workflow",
    description: "Animated visualization of the chemical process",
    path: "/process",
    color: "from-chemistry-cyan to-chemistry-green",
  },
  {
    icon: FlaskConical,
    title: "Media Gallery",
    description: "Photos and videos from our experiment",
    path: "/media",
    color: "from-chemistry-purple to-chemistry-pink",
  },
];

const teamMembers = [
    { name: "Ankush Dudhe", role: "Project Manager" },
  { name: "Alok Kadtan", role: "Lab Technician" },
  { name: "Nakul Mohite", role: "Data Analyst" },
  { name: "Rushikesh Shinde", role: "Lead Researcher" },
  { name: "Diksha Dhakne", role: "Safety Officer" }
];

const Home = ({ user }: HomeProps) => {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <Navigation user={user} />
      <AIChatbot />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-muted-foreground mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Atom className="h-4 w-4 text-primary animate-spin" style={{ animationDuration: "8s" }} />
              <span>Chemistry Research Project 2026</span>
            </motion.div>

            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Invisible Ink</span>
              <br />
              <span className="text-foreground">Reaction Study</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Exploring the fascinating world of crystal formation through 
              supersaturated solutions. Discover the science behind beautiful 
              molecular structures.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/procedure"
                className="btn-chemistry flex items-center gap-2 text-primary-foreground"
              >
                Start Exploring
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/faq"
                className="px-8 py-3 rounded-xl border border-border hover:bg-muted/50 transition-colors text-foreground"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experiment Overview */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto">
          <motion.div
            className="glass-card p-8 md:p-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl font-bold gradient-text mb-6">
              About Our Experiment
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              This chemistry project investigates the use of invisible ink made from lemon juice and citric acid. 
              We examine how heat causes the hidden writing to appear by triggering chemical changes in the treated paper.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
             Our experiment uses common household materials to demonstrate fundamental principles of chemistry, 
             including oxidation and the effects of acids on organic materials. 
             By applying heat with a hair dryer, the invisible message becomes visible as the acid-treated areas darken faster than untreated paper. 
             The results highlight how simple chemical reactions can create surprising and engaging visual effects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.h2
            className="font-display text-3xl font-bold text-center gradient-text mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Explore Our Research
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature.path}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={feature.path}
                  className="group block glass-card p-6 h-full hover:border-primary/50 transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl font-bold gradient-text mb-4">
              Our Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Meet the dedicated researchers behind this chemistry experiment
            </p>
          </motion.div>

          <motion.div
            className="glass-card p-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center mb-8">
              <div className="w-24 h-24 rounded-2xl bg-chemistry-gradient flex items-center justify-center">
                <Users className="h-12 w-12 text-primary-foreground" />
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  className="text-center"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 rounded-full bg-muted mx-auto mb-3 flex items-center justify-center">
                    <span className="font-display font-bold text-primary text-xl">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <h4 className="font-medium text-foreground text-sm">
                    {member.name}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {member.role}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border/50">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 ChemLab Research Project.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
