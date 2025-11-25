import { motion } from "framer-motion";

const HeroMinimal = () => {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center pt-[90px] pb-0 px-0 bg-black max-w-[1480px] mx-auto overflow-hidden">
      <motion.div 
        className="w-full text-center px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1 
          className="text-[15vw] md:text-[12vw] font-bold leading-none tracking-tight text-foreground mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Kavya Pabba
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-xl md:text-2xl text-muted-foreground mb-6">
            Data Scientist
          </p>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transforming complex data into scalable pipelines, actionable insights, and AI-driven business solutions across cloud, analytics, and governance systems.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroMinimal;
