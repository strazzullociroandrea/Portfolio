
import React from 'react';
import { Monitor, Smartphone, Server, Search, Zap, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: "Sviluppo Web Application",
      description: "Applicazioni web moderne con React, Next.js e tecnologie all'avanguardia",
      features: ["Single Page Applications", "E-commerce Platform", "Dashboard Admin", "Progressive Web Apps"]
    },
    {
      icon: Server,
      title: "Backend & API Development",
      description: "Architetture scalabili, microservizi e API RESTful per la tua infrastruttura",
      features: ["REST/GraphQL APIs", "Database Design", "Microservizi", "Cloud Architecture"]
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "App mobile native e cross-platform per iOS e Android",
      features: ["React Native", "Flutter", "App Store Deploy", "Push Notifications"]
    },
    {
      icon: Search,
      title: "SEO & Performance",
      description: "Ottimizzazione per motori di ricerca e performance web eccellenti",
      features: ["Technical SEO", "Core Web Vitals", "Page Speed", "Analytics Setup"]
    },
    {
      icon: Zap,
      title: "DevOps & Deployment",
      description: "CI/CD, containerizzazione e automazione per deployment sicuri",
      features: ["Docker/Kubernetes", "AWS/Azure", "CI/CD Pipelines", "Monitoring"]
    },
    {
      icon: Shield,
      title: "Consulenza Tecnica",
      description: "Audit del codice, architettura e strategia tecnologica per la crescita",
      features: ["Code Review", "Tech Strategy", "Team Training", "Best Practices"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            I Miei Servizi
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Offro soluzioni complete per trasformare le tue idee in prodotti digitali di successo, 
            dalla progettazione iniziale al deployment e manutenzione.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-card p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-border"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon size={32} className="text-primary" />
              </div>
              
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="mt-6 text-primary font-medium hover:text-primary/80 transition-colors duration-200">
                Richiedi Preventivo →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
