
import React from 'react';
import { Code, Palette, Server, GitBranch, Database } from 'lucide-react';
const About = () => {
  const skills = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Sviluppo interfacce moderne e responsive con React, TypeScript e Astro."
    },
    {
      icon: Server,
      title: "Backend & API",
      description: "Progettazione di API RESTful scalabili con Node.js, Python e Java, basate su architetture modulari."
    },
    {
      icon: Database,
      title: "Database",
      description: "Gestione di database relazionali (SQL) e non relazionali (NoSQL), progettazione e ottimizzazione delle strutture dati."
    },
    {
      icon: GitBranch,  
      title: "Deploy & Manutenzione",
      description: "Gestione del ciclo di vita delle applicazioni: versionamento, deploy e manutenzione continua dei progetti."
    }
  ];


  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Chi Sono
          </h2> 
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Sono un Full Stack Developer, sviluppo siti web, database e API, occupandomi anche della loro manutenzione.  
            Lavoro su soluzioni digitali complete, aiutando startup e aziende a gestire e far crescere la loro presenza online.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="group bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 border border-border"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <skill.icon size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {skill.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
