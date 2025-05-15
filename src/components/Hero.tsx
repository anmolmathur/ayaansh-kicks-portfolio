
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative bg-gradient-to-r from-football-dark to-football-blue text-white py-20 md:py-32"
    >
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552667466-07770ae110d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-20"></div>
      
      <div className="section-container relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-4">
              Ayaansh Mathur
            </h1>
            <h2 className="font-heading text-2xl md:text-3xl mb-6 text-gray-200">
              Professional Football Player
            </h2>
            <p className="text-lg mb-8 max-w-lg">
              A passionate and dedicated midfielder with exceptional vision and technical abilities.
              Currently playing for Maruti Suzuki Football Club, looking to make the next big step in my career.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-white text-football-blue hover:bg-gray-100"
                asChild
              >
                <a href="#contact">Contact Me</a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent border-white text-white hover:bg-white/10"
                asChild
              >
                <a href="#achievements">
                  View Achievements
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative h-[500px] w-full max-w-md mx-auto bg-white p-2 rounded-lg shadow-xl transform rotate-2">
              <img 
                src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Ayaansh Mathur playing football" 
                className="w-full h-full object-cover rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
