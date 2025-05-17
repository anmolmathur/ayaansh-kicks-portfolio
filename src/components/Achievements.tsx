
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const achievements = [
  {
    title: "Career Statistics",
    stats: [
      { label: "Matches Played", value: "370+" },
      { label: "Goals Scored", value: "540+" },
      { label: "Goal Ratio", value: "~1.5 per match" },
      { label: "Man of the Match", value: "55+ awards" },
      { label: "Player of the Tournament", value: "18+ awards" }
    ]
  },
  {
    title: "International Tournaments",
    stats: [
      { label: "Singa Cup", value: "Singapore (2022 & 2024)" },
      { label: "Barca World Cup", value: "Spain (2023)" },
      { label: "Gothia Cup", value: "Sweden (2023)" },
      { label: "Real Madrid World Cup", value: "Spain (2025)" },
      { label: "Real Madrid Award", value: "Best Teamwork" }
    ]
  },
  {
    title: "Tournament Championships",
    stats: [
      { label: "TMFC Cup Champion", value: "2020" },
      { label: "Grassroot Super Cup", value: "2020" },
      { label: "Bayside Sports Cup", value: "2022" },
      { label: "YSA MPL Winner", value: "2023" },
      { label: "Nashik League Champion", value: "2024" }
    ]
  },
  {
    title: "Representative Experience",
    stats: [
      { label: "Mumbai District U13", value: "Championship Winner" },
      { label: "Maharashtra U13", value: "National Championships" },
      { label: "AIFF Sub-Junior I-League", value: "RFYC Mumbai U13" },
      { label: "RFYC National Camp", value: "Top 50 in India" },
      { label: "Real Madrid India", value: "U14 Team" }
    ]
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="section-container">
        <h2 className="section-title text-center">Achievements</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          A summary of my football journey, showcasing key milestones, statistics, 
          and accomplishments from local competitions to international tournaments.
        </p>

        <div className="mt-10 max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {achievements.map((achievement, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="bg-white h-full border-t-4 border-football-blue">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4 text-football-blue">{achievement.title}</h3>
                      <ul className="space-y-3">
                        {achievement.stats.map((stat, statIndex) => (
                          <li key={statIndex} className="flex justify-between items-center">
                            <span className="text-sm font-medium text-gray-600">{stat.label}</span>
                            <span className="text-sm font-bold">{stat.value}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-4">
              <CarouselPrevious className="static transform-none mx-0" />
              <CarouselNext className="static transform-none mx-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
