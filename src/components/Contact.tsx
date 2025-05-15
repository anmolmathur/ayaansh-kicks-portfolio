
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from "@/hooks/use-toast";
import { Globe, Instagram, Mail, MapPin, Phone, Twitter, User } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. We'll get back to you soon."
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-16">
      <div className="section-container">
        <h2 className="section-title text-center">Contact</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          Interested in discussing opportunities, trials, academy programs, or just want to connect? 
          Feel free to reach out using the form below or through my contact details.
        </p>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-gray-50 p-6 md:p-8 rounded-lg">
            <h3 className="section-subtitle mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Your Name</Label>
                <Input 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input 
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input 
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this regarding?"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here"
                  rows={5}
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-football-blue hover:bg-football-light-blue"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          <div>
            <h3 className="section-subtitle mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <User className="h-5 w-5 text-football-blue mr-3 mt-1" />
                <div>
                  <h4 className="font-medium">Parents/Guardians</h4>
                  <p className="text-gray-600">Anmol Mathur / Kruti Garg</p>
                </div>
              </div>
            
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-football-blue mr-3 mt-1" />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-gray-600">+91 9867191999 / +91 9967064688</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-football-blue mr-3 mt-1" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-gray-600">anmolm@gmail.com / krutigarg@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-football-blue mr-3 mt-1" />
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-gray-600">Mumbai, India</p>
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-200">
                <h4 className="font-medium mb-4">Social Media</h4>
                <div className="flex space-x-4">
                  <a href="#" className="bg-gray-100 hover:bg-football-blue hover:text-white p-3 rounded-full transition-colors">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-gray-100 hover:bg-football-blue hover:text-white p-3 rounded-full transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-gray-100 hover:bg-football-blue hover:text-white p-3 rounded-full transition-colors">
                    <Globe className="h-5 w-5" />
                  </a>
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-200">
                <h4 className="font-medium mb-4">Available For</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Football Academy Trials (International & National)</li>
                  <li>Elite Residential Program Selections</li>
                  <li>School Academy & Scholarship Programs</li>
                  <li>International training camps and football exchanges</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
