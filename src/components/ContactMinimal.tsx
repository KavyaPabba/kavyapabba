import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { AnimatedDotsBackground } from "@/components/ui/animated-dots-background";

const ContactMinimal = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact: ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:pabbakavya123@gmail.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    toast({
      title: "Opening email client",
      description: "Your default email application will open with the message.",
    });
    
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <AnimatedDotsBackground />
      <GlowingEffect disabled={false} proximity={200} spread={80} blur={20} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 
            className="text-5xl md:text-7xl font-bold mb-8"
            style={{
              background: "var(--gradient-text)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Let's Connect
          </h2>
          <div className="h-1 w-32 mx-auto mb-8" style={{ background: "var(--gradient-button)" }} />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your data into actionable insights? Let's discuss how we can drive your business forward with AI and analytics.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-12 text-foreground">Get in Touch</h3>
            
            <div className="space-y-6">
              {/* Email */}
              <motion.a
                href="mailto:pabbakavya123@gmail.com"
                className="flex items-start gap-4 p-6 bg-secondary/50 backdrop-blur rounded-lg hover:bg-secondary transition-colors group"
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-3 bg-accent rounded-lg">
                  <Mail className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <p className="text-foreground font-medium">pabbakavya123@gmail.com</p>
                </div>
              </motion.a>

              {/* Phone */}
              <motion.a
                href="tel:+393479237782"
                className="flex items-start gap-4 p-6 bg-secondary/50 backdrop-blur rounded-lg hover:bg-secondary transition-colors group"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                whileHover={{ scale: 1.02, x: 10 }}
              >
                <div className="p-3 bg-accent rounded-lg">
                  <Phone className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Phone</p>
                  <p className="text-foreground font-medium">+39 3479237782</p>
                </div>
              </motion.a>

              {/* Location */}
              <motion.div
                className="flex items-start gap-4 p-6 bg-secondary/50 backdrop-blur rounded-lg"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{ scale: 1.02, x: 10 }}
              >
                <div className="p-3 bg-accent rounded-lg">
                  <MapPin className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Location</p>
                  <p className="text-foreground font-medium">Italy (available for opportunities across Europe)</p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              <motion.a 
                href="https://www.linkedin.com/in/pabba-kavya-b160a9163/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 bg-secondary/50 backdrop-blur hover:bg-accent rounded-lg transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-6 h-6 text-foreground" />
              </motion.a>
              <motion.a 
                href="https://github.com/KavyaPabba" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 bg-secondary/50 backdrop-blur hover:bg-accent rounded-lg transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-6 h-6 text-foreground" />
              </motion.a>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-foreground mb-2 block">
                  Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-secondary/50 backdrop-blur border-border text-foreground placeholder:text-muted-foreground focus:border-accent"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-foreground mb-2 block">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-secondary/50 backdrop-blur border-border text-foreground placeholder:text-muted-foreground focus:border-accent"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-foreground mb-2 block">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="bg-secondary/50 backdrop-blur border-border text-foreground placeholder:text-muted-foreground focus:border-accent resize-none"
                />
              </div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  className="w-full text-lg py-6 font-semibold text-white border-0"
                  style={{
                    background: "var(--gradient-button)",
                  }}
                >
                  Send Message
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactMinimal;
