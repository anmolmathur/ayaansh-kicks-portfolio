
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const testimonials = [
  {
    name: "Ajit Sawant",
    role: "Head Youth Coach – SoccerStar Academy Mumbai",
    quote: "Ayaansh Mathur is a standout footballer with excellent attacking instinct, tactical intelligence, and exceptional versatility. His leadership both on and off the field, his technical skills with the ball, and his finishing ability are qualities that separate him from many of his peers. I have witnessed his journey since 2017, and he has always shown discipline, resilience, and passion towards reaching the highest level of competitive football."
  },
  {
    name: "Shantanu Jain",
    role: "Head Coach – Barca Academy Mumbai (U10–U12) & Real Madrid (U14)",
    quote: "Ayaansh combines technical brilliance with a strong mental attitude, attributes crucial for a professional career in football. His performance during the Singa Cup (Singapore) and the Barca World Cup (Spain) and Real Madrid World Cup displayed his ability to adapt, compete internationally, and consistently perform under pressure."
  },
  {
    name: "Aakar",
    role: "Coach – Reliance Foundation Youth Champs",
    quote: "Ayaansh's progression through Mumbai's elite youth structures into the I-League Sub-Junior reflects his growth and dedication. His technical skills, particularly in ball control, vision and positioning, complemented by his natural goal-scoring instincts, make him one of the top prospects in his age group."
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16">
      <div className="section-container">
        <h2 className="section-title text-center">Coach References</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          What professional coaches and mentors have to say about my skills, potential, and development as a player.
        </p>

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <Card className="h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex-grow">
                        <svg className="h-8 w-8 text-football-blue opacity-50 mb-4" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                        </svg>
                        <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                      </div>
                      <div>
                        <p className="font-semibold text-football-blue">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6">
              <CarouselPrevious className="relative static top-0 left-0 translate-y-0 mr-2" />
              <CarouselNext className="relative static top-0 right-0 translate-y-0 ml-2" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
