
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted/30 py-8 text-center" >
      <div className="container mx-auto px-4">
         
          <div className="mt-4 pt-4 border-t border-border">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Ciro Andrea Strazzullo. Tutti i diritti riservati.
            </p>
          </div>
           
      </div>
    </footer>
  );
};

export default Footer;
