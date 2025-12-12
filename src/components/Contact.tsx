"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Download } from "lucide-react";

const Contact = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById("contact-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Open to exciting opportunities and collaborations
          </p>
        </div>

        {/* Contact Card */}
        <Card className="card-gradient border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(6,182,212,0.2)]">
          <CardContent className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-muted-foreground">
                    pabbakavya123@gmail.com
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-muted-foreground">
                    Italy (available for opportunities across Europe)
                  </p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 border-t border-border">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105"
                onClick={scrollToForm}
              >
                <Mail className="mr-2 h-4 w-4" />
                Send Message
              </Button>

              {/* Replace /cv.pdf with your actual file path */}
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 hover:bg-primary/10 transition-all hover:scale-105"
                asChild
              >
                <a href="/cv.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;