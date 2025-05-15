
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const technicalSkills = [
  { skill: "Passing", level: 92 },
  { skill: "Shot Accuracy", level: 85 },
  { skill: "Ball Control", level: 90 },
  { skill: "Dribbling", level: 88 },
  { skill: "Free Kicks", level: 80 },
  { skill: "Crossing", level: 85 },
];

const physicalSkills = [
  { skill: "Speed", level: 85 },
  { skill: "Stamina", level: 90 },
  { skill: "Strength", level: 82 },
  { skill: "Agility", level: 87 },
  { skill: "Jumping", level: 80 },
  { skill: "Balance", level: 85 },
];

const mentalSkills = [
  { skill: "Vision", level: 95 },
  { skill: "Positioning", level: 88 },
  { skill: "Decision Making", level: 90 },
  { skill: "Leadership", level: 85 },
  { skill: "Teamwork", level: 92 },
  { skill: "Composure", level: 85 },
];

const achievements = [
  {
    year: "2023",
    title: "Corporate Football League Champion",
    description: "Led Maruti Suzuki FC to their first league title, scoring 8 goals and providing 15 assists throughout the season."
  },
  {
    year: "2022",
    title: "Most Valuable Player",
    description: "Named MVP of the Delhi Premier League after finishing the season with the most assists (17)."
  },
  {
    year: "2021",
    title: "India U-21 Team Selection",
    description: "Selected for the national U-21 team, representing India in the Asian Youth Championship."
  },
  {
    year: "2020",
    title: "Delhi State Cup Winner",
    description: "Won the Delhi State Cup with the youth academy team, scoring in the final match."
  },
  {
    year: "2019",
    title: "Emerging Player of the Year",
    description: "Recognized as the most promising young talent in the Delhi football circuit."
  }
];

const SkillBar = ({ skill, level }: { skill: string, level: number }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-sm font-medium">{skill}</span>
      <span className="text-sm text-gray-500">{level}%</span>
    </div>
    <div className="skill-bar">
      <div className="skill-progress" style={{ width: `${level}%` }}></div>
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-16">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="section-title">Skills & Abilities</h2>
            <p className="mb-8 text-gray-600">
              Throughout my career, I've worked diligently to develop a well-rounded skill set that allows me to excel in midfield positions. 
              My greatest strengths are my vision, passing accuracy, and technical ball control.
            </p>
            
            <Tabs defaultValue="technical" className="w-full">
              <TabsList className="grid grid-cols-3 mb-6">
                <TabsTrigger value="technical">Technical</TabsTrigger>
                <TabsTrigger value="physical">Physical</TabsTrigger>
                <TabsTrigger value="mental">Mental</TabsTrigger>
              </TabsList>
              <TabsContent value="technical" className="space-y-4">
                {technicalSkills.map((item, index) => (
                  <SkillBar key={index} skill={item.skill} level={item.level} />
                ))}
              </TabsContent>
              <TabsContent value="physical" className="space-y-4">
                {physicalSkills.map((item, index) => (
                  <SkillBar key={index} skill={item.skill} level={item.level} />
                ))}
              </TabsContent>
              <TabsContent value="mental" className="space-y-4">
                {mentalSkills.map((item, index) => (
                  <SkillBar key={index} skill={item.skill} level={item.level} />
                ))}
              </TabsContent>
            </Tabs>

            <h3 className="section-subtitle mt-12">Specialties</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <span className="font-medium">Through Balls</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <span className="font-medium">Set Pieces</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <span className="font-medium">Playmaking</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <span className="font-medium">Long Shots</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <span className="font-medium">Game Reading</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <span className="font-medium">Leadership</span>
              </div>
            </div>
          </div>
          
          <div id="achievements">
            <h2 className="section-title">Achievements</h2>
            <p className="mb-8 text-gray-600">
              My journey has been marked by several key achievements that reflect my growth and dedication to the sport. 
              Each milestone has pushed me to strive for greater excellence.
            </p>
            
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex">
                      <div className="bg-football-blue text-white p-4 flex items-center justify-center">
                        <span className="text-xl font-bold">{achievement.year}</span>
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium text-lg mb-1">{achievement.title}</h3>
                        <p className="text-sm text-gray-600">{achievement.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
