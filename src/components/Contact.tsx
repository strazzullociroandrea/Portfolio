import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa';
import { Player } from '@lottiefiles/react-lottie-player';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-muted/30 relative">
      <div className="container mx-auto px-6 sm:px-10 lg:px-24 relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center text-foreground">
          Contatti
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-card border border-border rounded-2xl shadow-xl p-6 sm:p-10 lg:p-14">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Mail size={20} className="text-primary" />
              </div>
              <div>
                <p className="text-sm sm:text-base text-muted-foreground">Email</p>
                <a
                  href="mailto:ciroandreastrazzullo06@gmail.com"
                  className="text-base sm:text-lg md:text-xl font-medium text-foreground hover:underline break-all"
                >
                  ciroandreastrazzullo06@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Phone size={20} className="text-primary" />
              </div>
              <div>
                <p className="text-sm sm:text-base text-muted-foreground">Telefono</p>
                <a
                  href="tel:+393890979120"
                  className="text-base sm:text-lg md:text-xl font-medium text-foreground hover:underline"
                >
                  +39 389 097 9120
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <MapPin size={20} className="text-primary" />
              </div>
              <div>
                <p className="text-sm sm:text-base text-muted-foreground">Località</p>
                <p className="text-base sm:text-lg md:text-xl font-medium text-foreground">
                  Milano e Monza Brianza, Italia
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 pt-2 flex-wrap">
              <a
                href="https://github.com/strazzullociroandrea"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/ciro-strazzullo-8484a5339"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://stackhorizon.it"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80"
                aria-label="Sito azienda"
              >
                <FaGlobe size={24} />
              </a>
            </div>
          </div>

          {/* Right Side Animation */}
          <div className="flex justify-center">
            <Player
              autoplay
              loop
              src="https://lottie.host/91ad51c7-0cc6-463d-9c19-e78bf54949fd/EMwFBXgc1n.json"
              className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
