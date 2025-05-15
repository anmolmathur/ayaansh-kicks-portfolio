
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const technicalSkills = [
  { skill: "Passing Ability", level: 90 },
  { skill: "Dribbling", level: 92 },
  { skill: "Finishing", level: 95 },
  { skill: "Game Vision", level: 88 },
  { skill: "Defensive Contributions", level: 85 },
  { skill: "Work Rate", level: 90 },
];

const physicalSkills = [
  { skill: "Speed", level: 90 },
  { skill: "Agility", level: 88 },
  { skill: "Endurance", level: 92 },
  { skill: "Strength", level: 82 },
  { skill: "Balance", level: 85 },
  { skill: "Coordination", level: 87 },
];

const mentalSkills = [
  { skill: "Tactical Intelligence", level: 90 },
  { skill: "Leadership", level: 88 },
  { skill: "Decision Making", level: 85 },
  { skill: "Adaptability", level: 90 },
  { skill: "Composure", level: 85 },
  { skill: "Game Reading", level: 88 },
];

const achievements = [
  {
    year: "2025",
    title: "Real Madrid World Cup - Spain",
    description: "Represented India U14 team (Real Madrid Academy). Team awarded Best Teamwork. Semi-finalist."
  },
  {
    year: "2024",
    title: "Multiple Championships",
    description: "Played Reliance I-League Sub Junior Nationals (RFYC Mumbai U13). Interdistrict U13 Champion with Mumbai Team. Selected for RFYC National Camp top 50."
  },
  {
    year: "2023",
    title: "International Exposure",
    description: "First major international exposure at Barca World Cup (Spain). MSSA School Top Scorer. Represented Mumbai Interdistrict."
  },
  {
    year: "2022",
    title: "Major Growth Year",
    description: "Played with Barca Mumbai. 100+ goals scored. Bayside Sports Cup champion. First Singa Cup appearance in Singapore."
  },
  {
    year: "2021",
    title: "Expanding Circuits",
    description: "Competed in YSA MPL and SSA Championship with continued strong goal-scoring form."
  },
  {
    year: "2020",
    title: "Debut Year",
    description: "Debut at SoccerStar Academy. Won early youth tournaments including TMFC Cup and Grassroot Super Cup."
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
            <h2 className="section-title">Technical Evaluation</h2>
            <p className="mb-8 text-gray-600">
              Throughout my career, I've developed a well-rounded skill set validated by official coaches. 
              My greatest strengths are my goal-scoring instinct, vision, passing accuracy, and technical ball control.
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

            <h3 className="section-subtitle mt-12">Tactical Attributes</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <span className="font-medium">Formation Adaptability</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <span className="font-medium">Positional Flexibility</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <span className="font-medium">Game Understanding</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <span className="font-medium">Coachable</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <span className="font-medium">Spatial Awareness</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <span className="font-medium">Leadership</span>
              </div>
            </div>
          </div>
          
          <div id="achievements">
            <h2 className="section-title">Career Timeline</h2>
            <p className="mb-8 text-gray-600">
              My journey has been marked by consistent growth and achievement from 2020 to 2025,
              with increasing levels of competition and international exposure.
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
