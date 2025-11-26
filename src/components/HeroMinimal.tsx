import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.png";

const HeroMinimal = () => {
  return (
    <section className="w-full min-h-screen flex flex-col justify-between pt-[90px] pb-12 px-6 bg-black max-w-[1480px] mx-auto overflow-hidden relative perspective-1000">
      {/* Top Section - Title Left, Image Right */}
      <motion.div 
        className="w-full flex justify-between items-start"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
      >
        {/* Left - Data Scientist & Subheading */}
        <motion.div
          className="max-w-xl flex flex-col justify-start"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.7 }}
          whileHover={{ 
            scale: 1.02,
            rotateY: -5,
            transition: { duration: 0.3 }
          }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <p className="text-2xl md:text-3xl lg:text-4xl text-foreground font-semibold mb-4">
            Data Scientist
          </p>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
            Transforming complex data into scalable pipelines, actionable insights, and AI-driven business solutions across cloud, analytics, and governance systems.
          </p>
        </motion.div>

        {/* Right - Profile Image */}
        <motion.div
          className="w-48 h-48 md:w-72 md:h-72 lg:w-80 lg:h-80 overflow-hidden flex-shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.7 }}
          whileHover={{ 
            scale: 1.05,
            rotateY: 5,
            rotateX: -5,
            transition: { duration: 0.3 }
          }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <img 
            src={profilePhoto} 
            alt="Kavya Pabba" 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>

      {/* Bottom Center - Name */}
      <motion.h1 
        className="text-[20vw] md:text-[18vw] lg:text-[16vw] font-bold leading-none tracking-tight text-foreground text-center"
        initial={{ opacity: 0, y: "-50vh", scale: 1.2 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ 
          duration: 1.2, 
          delay: 0.2,
          ease: [0.43, 0.13, 0.23, 0.96]
        }}
        whileHover={{ 
          scale: 1.02,
          rotateX: 5,
          transition: { duration: 0.3 }
        }}
        style={{ transformStyle: "preserve-3d" }}
      >
        Kavya Pabba
      </motion.h1>
    </section>
  );
};

export default HeroMinimal;
