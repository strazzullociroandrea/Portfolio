
import React from 'react';
import { ArrowDown, Download, Mail, Terminal, Code, Cpu, Monitor, Keyboard } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Floating tech icons */}
        <div className="absolute top-20 left-20 text-primary/20 animate-bounce delay-300">
          <Terminal size={32} />
        </div>
        <div className="absolute top-32 right-32 text-primary/15 animate-bounce delay-700">
          <Code size={28} />
        </div>
        <div className="absolute bottom-32 left-32 text-primary/20 animate-bounce delay-500">
          <Cpu size={36} />
        </div>
        <div className="absolute bottom-20 right-20 text-primary/15 animate-bounce delay-1000">
          <Monitor size={30} />
        </div>
        <div className="absolute top-1/2 left-10 text-primary/10 animate-bounce delay-200">
          <Keyboard size={24} />
        </div>
        <div className="absolute top-1/3 right-10 text-primary/10 animate-bounce delay-800">
          <Terminal size={26} />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 inline-block">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-primary-foreground text-4xl font-bold shadow-2xl shadow-primary/20 hover:scale-110 transition-transform duration-300 relative">
              CS
              {/* Code brackets animation */}
              <div className="absolute -top-2 -left-2 text-primary/30 animate-pulse">{"<"}</div>
              <div className="absolute -bottom-2 -right-2 text-primary/30 animate-pulse delay-500">{">"}</div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground animate-fade-in">
            Ciro Andrea Strazzullo
          </h1>

          {/* Subtitle with typing effect */}
          <p className="text-xl md:text-2xl text-primary mb-8 animate-fade-in delay-200 font-medium flex items-center justify-center gap-3">
            <Terminal size={24} className="animate-pulse" />
            Full Stack Developer & Cofondatore di StackHorizon
            <Code size={24} className="animate-pulse" />
          </p>


           
          {/* Scroll Indicator */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown size={24} className="text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
