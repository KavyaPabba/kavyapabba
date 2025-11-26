import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.png";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const HeroMinimal = () => {
  return (
    <section className="w-full min-h-screen flex flex-col justify-between pt-[90px] pb-8 px-6 bg-black max-w-[1480px] mx-auto overflow-hidden relative perspective-1000">
      <GlowingEffect disabled={false} proximity={200} spread={80} blur={20} />
      {/* Top Section - Title Left, Image Right */}
      <motion.div 
        className="w-full flex justify-between items-start gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
      >
        {/* Left - Data Scientist & Subheading */}
        <motion.div
          className="flex-1 max-w-2xl flex flex-col justify-start"
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
          <p className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-foreground font-semibold mb-6">
            Data Scientist
          </p>
          <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-muted-foreground leading-relaxed">
            Transforming complex data into scalable pipelines, actionable insights, and AI-driven business solutions across cloud, analytics, and governance systems.
          </p>
        </motion.div>

        {/* Right - Profile Image */}
        <motion.div
          className="w-56 h-56 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] overflow-hidden flex-shrink-0"
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
        className="text-[18vw] md:text-[16vw] lg:text-[14vw] xl:text-[12vw] font-bold leading-none tracking-tight text-foreground text-center whitespace-nowrap"
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
