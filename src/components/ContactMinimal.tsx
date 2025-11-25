import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const ContactMinimal = () => {
  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-8 text-foreground">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Open to collaboration on data science projects and opportunities.
          </p>

          {/* Social Links */}
          <div className="flex gap-8 justify-center mb-16">
            <motion.a 
              href="https://github.com/KavyaPabba" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-6 bg-secondary hover:bg-accent rounded-full transition-colors group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-8 h-8 text-foreground" />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/pabba-kavya-b160a9163/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-6 bg-secondary hover:bg-accent rounded-full transition-colors group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-8 h-8 text-foreground" />
            </motion.a>
            <motion.a 
              href="mailto:kavya@example.com"
              className="p-6 bg-secondary hover:bg-accent rounded-full transition-colors group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-8 h-8 text-foreground" />
            </motion.a>
          </div>

          <div className="space-y-4 text-muted-foreground">
            <p className="text-lg">
              <strong className="text-foreground">Email:</strong> kavya.pabba@example.com
            </p>
            <p className="text-lg">
              <strong className="text-foreground">Location:</strong> Available for remote opportunities
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactMinimal;
