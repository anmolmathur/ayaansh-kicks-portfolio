
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card, CardContent } from '@/components/ui/card';
import { YoutubeIcon } from 'lucide-react';

const matchImages = [
  {
    url: "/lovable-uploads/1c7d037e-0bf1-4675-b208-0b69b44912c0.png",
    caption: "Ayaansh playing for Conscient Sports",
  },
  {
    url: "/lovable-uploads/6b0e5f1c-20d5-4afc-aebd-d283d49eca2b.png",
    caption: "Ayaansh in action during a match",
  },
  {
    url: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    caption: "Real Madrid World Cup - Spain",
  },
  {
    url: "https://images.unsplash.com/photo-1571056642134-45c76844a8de?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    caption: "Gothia Cup - Sweden",
  },
  {
    url: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    caption: "MFA YPL Tournament",
  },
  {
    url: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    caption: "Reliance I-League Match",
  },
];

const tournamentImages = [
  {
    url: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    caption: "TMFC Cup Champion (2020)",
  },
  {
    url: "https://images.unsplash.com/photo-1600679472829-3044539ce8ed?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    caption: "Grassroot Super Cup Winner (2020)",
  },
  {
    url: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    caption: "Bayside Sports Cup Champion (2022)",
  },
  {
    url: "https://images.unsplash.com/photo-1570498839593-e565b39455fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    caption: "YSA MPL Winner (2023)",
  },
  {
    url: "/lovable-uploads/6b0e5f1c-20d5-4afc-aebd-d283d49eca2b.png",
    caption: "Playing in the 5v5 Sports Cup (2023)",
  },
  {
    url: "/lovable-uploads/1c7d037e-0bf1-4675-b208-0b69b44912c0.png",
    caption: "Nashik League Champion (2024)",
  },
];

const mediaContent = [
  {
    type: "youtube",
    url: "https://www.youtube.com/embed/B7ZpkaqHNyI",
    caption: "Ayaansh Mathur Interview",
  }
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-16 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title text-center">Gallery</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          A glimpse into my football journey through photos from international tournaments, 
          championship matches, and special moments in my career.
        </p>

        <Tabs defaultValue="international" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="international">International Events</TabsTrigger>
              <TabsTrigger value="tournaments">Tournament Victories</TabsTrigger>
              <TabsTrigger value="media">Media Coverage</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="international">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
          
          <TabsContent value="tournaments">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {tournamentImages.map((image, index) => (
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

          <TabsContent value="media">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {mediaContent.map((item, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-0">
                    {item.type === "youtube" && (
                      <div className="aspect-video w-full">
                        <iframe 
                          className="w-full h-full"
                          src={item.url} 
                          title={item.caption}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                          allowFullScreen
                        ></iframe>
                      </div>
                    )}
                    <div className="p-4 flex items-center gap-2">
                      <YoutubeIcon className="h-5 w-5 text-red-600" />
                      <p className="text-sm font-medium">{item.caption}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Gallery;
