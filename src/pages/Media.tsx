import { motion } from "framer-motion";
import AnimatedBackground from "@/components/AnimatedBackground";
import Navigation from "@/components/Navigation";
import AIChatbot from "@/components/AIChatbot";

interface MediaProps {
  user: { email: string } | null;
}

const galleryImages = [
  { id: 1, title: "Heating Process", description: "Paper being heated", src: "/images/heating.jpeg" },
  { id: 2, title: "Invisible Writing", description: "Message written but invisible", src: "/images/writing.jpeg" },
];


const teamPhotos = [
  { name: "Ankush Dudhe", role: "Project Manager" },
  { name: "Alok Kadtan", role: "Lab Technician" },
  { name: "Nakul Mohite", role: "Data Analyst" },
  { name: "Rushikesh Shinde", role: "Lead Researcher" },
  { name: "Diksha Dhakne", role: "Safety Officer" }
];


const Media = ({ user }: MediaProps) => {
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
              <span>Gallery & Videos</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold gradient-text mb-4">
              Media Gallery
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore photos and videos from our crystallization experiment, 
              documenting every step of our scientific journey.
            </p>
          </motion.div>

          {/* Video Section */}
          <motion.section
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <h2 className="font-display text-2xl font-bold text-foreground">
                Experiment Video
              </h2>
            </div>

            <div className="glass-card p-4 overflow-hidden">
              <div className="aspect-video bg-muted rounded-xl flex items-center justify-center relative group cursor-pointer">
                <video 
                  src="/images/finalV.mp4" 
                  controls 
                  className="w-full h-full rounded-xl"
                  controlsList="nodownload"
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              
              <div className="mt-4 p-4 bg-muted/30 rounded-xl">
                <h3 className="font-display font-semibold text-foreground mb-2">
                  About This Video
                </h3>
                <p className="text-sm text-muted-foreground">
                  Watch the complete invisible ink experiment from start to finish. This video explains how acidic solutions react with heat to reveal hidden messages on paper, 
                  demonstrating oxidation and heat-activated chemical changes in real time. 
                  Perfect for students and science enthusiasts.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Photo Gallery */}
          <motion.section
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <h2 className="font-display text-2xl font-bold text-foreground">
                Experiment Gallery
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  className="glass-card p-3 group cursor-pointer hover:border-primary/50 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ y: -5 }}
                >
                  <div className="aspect-square bg-gradient-to-br from-chemistry-purple/10 to-chemistry-blue/10 rounded-xl mb-3 flex items-center justify-center relative overflow-hidden">
                    <img 
                      src={image.src} 
                      alt={image.title} 
                      className="w-full h-full object-cover" 
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-chemistry-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  </div>
                  <h3 className="font-medium text-foreground text-sm">
                    {image.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {image.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Team Photos */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <h2 className="font-display text-2xl font-bold text-foreground">
                Our Team
              </h2>
            </div>

            <div className="glass-card p-6">
              {/* Team group photo */}
              <div className="aspect-[21/9] bg-gradient-to-br from-chemistry-purple/10 to-chemistry-blue/10 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
                <img 
                  src="/images/group.jpeg" 
                  alt="Chemistry Research Team" 
                  className="w-full h-full object-cover" 
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>

              {/* Individual team members */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {teamPhotos.map((member, index) => (
                  <motion.div
                    key={member.name}
                    className="text-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <div className="w-20 h-20 rounded-full bg-chemistry-gradient mx-auto mb-3 flex items-center justify-center">
                      <span className="font-display text-2xl font-bold text-primary-foreground">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                    <h4 className="font-medium text-foreground">
                      {member.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {member.role}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default Media;
