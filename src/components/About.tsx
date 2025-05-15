
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, MapPin, Trophy } from 'lucide-react';

const personalInfo = [
  { label: "Full Name", value: "Ayaansh Mathur" },
  { label: "Date of Birth", value: "September 10, 1999" },
  { label: "Nationality", value: "Indian" },
  { label: "Height", value: "183 cm (6'0\")" },
  { label: "Weight", value: "75 kg" },
  { label: "Position", value: "Midfielder (Attacking, Central)" },
  { label: "Current Club", value: "Maruti Suzuki Football Club" },
  { label: "Preferred Foot", value: "Right" },
];

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title text-center mb-12">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="section-subtitle">My Journey</h3>
            <p className="mb-4">
              Born and raised in Delhi, I discovered my passion for football at the age of 8 when my father first took me to a local match. 
              What began as a childhood interest quickly evolved into a serious pursuit as I joined my school team and later the Delhi Youth Academy.
            </p>
            <p className="mb-4">
              By 16, I was representing Delhi in national youth competitions, which laid the foundation for my professional career. 
              After completing my education, I joined Maruti Suzuki Football Club, where I've been developing my skills and contributing to the team's success.
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
                    <h4 className="font-semibold">7+ Years</h4>
                  </div>
                  <p className="text-gray-600">Professional Experience</p>
                </CardContent>
              </Card>
              
              <Card className="stat-card">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-2 text-football-blue">
                    <Trophy className="h-5 w-5 mr-2" />
                    <h4 className="font-semibold">15+</h4>
                  </div>
                  <p className="text-gray-600">Awards & Honors</p>
                </CardContent>
              </Card>
              
              <Card className="stat-card">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-2 text-football-blue">
                    <Calendar className="h-5 w-5 mr-2" />
                    <h4 className="font-semibold">150+</h4>
                  </div>
                  <p className="text-gray-600">Matches Played</p>
                </CardContent>
              </Card>
              
              <Card className="stat-card">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-2 text-football-blue">
                    <MapPin className="h-5 w-5 mr-2" />
                    <h4 className="font-semibold">5+</h4>
                  </div>
                  <p className="text-gray-600">Tournaments</p>
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
            
            <h3 className="section-subtitle mt-8">Career Highlights</h3>
            <div className="space-y-4">
              <div className="achievement-item">
                <h4 className="font-medium">India U-21 National Team</h4>
                <p className="text-sm text-gray-600">Represented India at the U-21 level in 3 international tournaments</p>
              </div>
              <div className="achievement-item">
                <h4 className="font-medium">Delhi Premier League Champion</h4>
                <p className="text-sm text-gray-600">Won the championship and was named Midfielder of the Tournament</p>
              </div>
              <div className="achievement-item">
                <h4 className="font-medium">Corporate Football League MVP</h4>
                <p className="text-sm text-gray-600">Named Most Valuable Player while playing for Maruti Suzuki FC</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
