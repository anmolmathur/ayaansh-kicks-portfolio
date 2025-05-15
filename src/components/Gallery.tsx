
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const matchImages = [
  {
    url: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    caption: "Delhi Premier League Semi-final",
  },
  {
    url: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    caption: "Corporate League Match",
  },
  {
    url: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    caption: "State Cup Final",
  },
  {
    url: "https://images.unsplash.com/photo-1571056642134-45c76844a8de?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    caption: "Championship Celebration",
  },
  {
    url: "https://images.unsplash.com/photo-1550881111-7cfde14b8073?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    caption: "International Tournament",
  },
  {
    url: "https://images.unsplash.com/photo-1624526267942-ab0c2946bbf3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    caption: "Team Practice Session",
  },
];

const trainingImages = [
  {
    url: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    caption: "Morning Training Session",
  },
  {
    url: "https://images.unsplash.com/photo-1600679472829-3044539ce8ed?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    caption: "Fitness Training",
  },
  {
    url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    caption: "Team Strategy Session",
  },
  {
    url: "https://images.unsplash.com/photo-1570498839593-e565b39455fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    caption: "Gym Workout",
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-16 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title text-center">Gallery</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          A glimpse into my football journey through photos from matches, training sessions, and special moments.
        </p>

        <Tabs defaultValue="matches" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="matches">Match Photos</TabsTrigger>
              <TabsTrigger value="training">Training</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="matches">
            <div className="gallery-grid">
              {matchImages.map((image, index) => (
                <div key={index} className="overflow-hidden rounded-lg shadow-md bg-white">
                  <div className="relative aspect-[4/3]">
                    <img 
                      src={image.url} 
                      alt={image.caption} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-3">
                    <p className="text-center text-sm text-gray-600">{image.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="training">
            <div className="gallery-grid">
              {trainingImages.map((image, index) => (
                <div key={index} className="overflow-hidden rounded-lg shadow-md bg-white">
                  <div className="relative aspect-[4/3]">
                    <img 
                      src={image.url} 
                      alt={image.caption} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-3">
                    <p className="text-center text-sm text-gray-600">{image.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Gallery;
