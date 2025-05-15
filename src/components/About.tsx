
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, MapPin, Trophy, Flag, User } from 'lucide-react';

const personalInfo = [
  { label: "Full Name", value: "Ayaansh Mathur" },
  { label: "Date of Birth", value: "September 6, 2012" },
  { label: "Nationality", value: "Indian" },
  { label: "Age", value: "12 years" },
  { label: "Dominant Foot", value: "Right" },
  { label: "Primary Positions", value: "Striker / Attacking Midfielder" },
  { label: "Secondary Positions", value: "Central Defensive Midfield / Wing" },
  { label: "Languages", value: "English, Hindi" },
  { label: "Current City", value: "Mumbai, Maharashtra, India" },
  { label: "Passport", value: "Available (Y9435944)" },
];

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title text-center mb-12">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="section-subtitle">Player Profile</h3>
            <p className="mb-4">
              A highly talented and dynamic young footballer with vast experience in competitive matches both nationally and internationally. 
              Recognized for my speed, excellent ball control, vision, goal-scoring instinct, versatility across midfield and attack, and leadership on and off the pitch.
            </p>
            <p className="mb-4">
              I have a proven record at club, academy, school, district, state, and international levels. 
              My work rate, tactical intelligence, and technical precision make me a promising prospect for any elite football training program.
            </p>
            <p>
              My goal is to represent India at the international level and play in one of Europe's top leagues. 
              I'm constantly working to improve all aspects of my game, from technical skills to tactical awareness and physical conditioning.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <Card className="stat-card">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-2 text-football-blue">
                    <Clock className="h-5 w-5 mr-2" />
                    <h4 className="font-semibold">370+</h4>
                  </div>
                  <p className="text-gray-600">Matches Played</p>
                </CardContent>
              </Card>
              
              <Card className="stat-card">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-2 text-football-blue">
                    <Trophy className="h-5 w-5 mr-2" />
                    <h4 className="font-semibold">540+</h4>
                  </div>
                  <p className="text-gray-600">Career Goals</p>
                </CardContent>
              </Card>
              
              <Card className="stat-card">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-2 text-football-blue">
                    <User className="h-5 w-5 mr-2" />
                    <h4 className="font-semibold">55+</h4>
                  </div>
                  <p className="text-gray-600">Man of the Match</p>
                </CardContent>
              </Card>
              
              <Card className="stat-card">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-2 text-football-blue">
                    <Flag className="h-5 w-5 mr-2" />
                    <h4 className="font-semibold">18+</h4>
                  </div>
                  <p className="text-gray-600">Player of the Tournament</p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div>
            <h3 className="section-subtitle">Personal Information</h3>
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <ul className="space-y-4">
                {personalInfo.map((item, index) => (
                  <li key={index} className="flex justify-between pb-2 border-b border-gray-100">
                    <span className="font-medium text-gray-700">{item.label}</span>
                    <span className="text-gray-600">{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <h3 className="section-subtitle mt-8">Education</h3>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="achievement-item mb-4">
                <h4 className="font-medium">Utpal Shanghvi Global School, Mumbai</h4>
                <p className="text-sm text-gray-600">Good academic standing with balance between sports & academics</p>
              </div>
              <div className="achievement-item">
                <h4 className="font-medium">Languages Studied</h4>
                <p className="text-sm text-gray-600">English, Hindi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
