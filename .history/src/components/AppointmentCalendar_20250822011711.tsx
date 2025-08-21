"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Calendar as CalendarIcon, 
  Clock, 
  Video, 
  Coffee, 
  Briefcase, 
  CheckCircle, 
  MessageSquare 
} from "lucide-react";
import { toast } from "sonner";
import { format } from "date-fns";
import emailjs from "emailjs-com";

const AppointmentCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>();
  const [meetingType, setMeetingType] = useState<string>();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectDetails: ""
  });

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"
  ];

  const meetingTypes = [
    {
      id: "consultation",
      title: "Free Consultation",
      duration: "30 minutes",
      icon: Coffee,
      description: "Discuss your project and explore how AI can enhance your design"
    },
    {
      id: "project-review",
      title: "Project Review",
      duration: "45 minutes", 
      icon: Briefcase,
      description: "Deep dive into your current project and identify improvement opportunities"
    },
    {
      id: "design-workshop",
      title: "Design Workshop",
      duration: "60 minutes",
      icon: Video,
      description: "Collaborative session to brainstorm and prototype solutions"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedDate || !selectedTime || !meetingType || !formData.name || !formData.email) {
      toast.error("Please fill in all required details.");
      return;
    }

    setLoading(true);

    try {
     await emailjs.send(
  "service_ji21wqs",   // ✅ your service ID
  "template_wov9ch6",  // ✅ your template ID
  {
    name: formData.name,  // matches {{name}}
    email: formData.email,  // matches {{email}}
    selectedDate: format(selectedDate, "PPP"), // matches {{selectedDate}}
    selectedTime: selectedTime, // matches {{selectedTime}}
    meetingType: meetingTypes.find(t => t.id === meetingType)?.title, // matches {{meetingType}}
    company: formData.company, // optional (if you add {{company}} to template)
    projectDetails: formData.projectDetails // optional (if you add {{projectDetails}} to template)
  },
  "I8-_oOYGGsza3p9WI"  // ✅ your public key
);
      toast.success(`✅ Appointment scheduled for ${format(selectedDate, "PPP")} at ${selectedTime}. Confirmation email sent!`);

      // Reset form
      setSelectedDate(undefined);
      setSelectedTime(undefined);
      setMeetingType(undefined);
      setFormData({ name: "", email: "", company: "", projectDetails: "" });

    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("❌ Something went wrong while scheduling. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const isDateDisabled = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today || date.getDay() === 0 || date.getDay() === 6;
  };

  return (
    <section id="schedule" className="py-24 px-6 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/30">
            Schedule Appointment
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your ideas into reality? Schedule a personalized consultation 
            to discuss how AI-powered design can elevate your project.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Meeting Types */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-primary mb-4">Select Meeting Type</h3>
            {meetingTypes.map((type) => (
              <Card 
                key={type.id}
                className={`cursor-pointer transition-all duration-300 border-2 ${
                  meetingType === type.id 
                    ? 'border-primary bg-gradient-to-br from-primary/10 to-accent/10' 
                    : 'border-primary/20 hover:border-primary/40'
                }`}
                onClick={() => setMeetingType(type.id)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg ${
                      meetingType === type.id ? 'bg-primary/20' : 'bg-primary/10'
                    }`}>
                      <type.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-foreground">{type.title}</h4>
                        <Badge variant="secondary" className="text-xs">{type.duration}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{type.description}</p>
                      {meetingType === type.id && (
                        <div className="flex items-center mt-3 text-primary text-sm">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Selected
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Calendar */}
          <Card className="bg-gradient-to-br from-card to-card/50 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center text-primary">
                <CalendarIcon className="w-5 h-5 mr-2" />
                Select Date
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                disabled={isDateDisabled}
                className="w-full pointer-events-auto"
              />
              
              {selectedDate && (
                <div className="mt-6">
                  <h4 className="font-semibold text-primary mb-3 flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    Available Times
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {timeSlots.map((time) => (
                      <Button
                        key={time}
                        variant={selectedTime === time ? "default" : "outline"}
                        size="sm"
                        className={`${
                          selectedTime === time 
                            ? 'btn-ai' 
                            : 'border-primary/30 hover:border-primary hover:bg-primary/10'
                        }`}
                        onClick={() => setSelectedTime(time)}
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card className="bg-gradient-to-br from-card to-card/50 border-primary/20">
            <CardHeader>
              <CardTitle className="text-primary">Your Details</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="bg-background/50 border-primary/20 focus:border-primary"
                    placeholder="Arisha Mumtaz"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="bg-background/50 border-primary/20 focus:border-primary"
                    placeholder="arisha@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Company</label>
                  <Input
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    className="bg-background/50 border-primary/20 focus:border-primary"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Project Details</label>
                  <Textarea
                    rows={4}
                    value={formData.projectDetails}
                    onChange={(e) => handleInputChange('projectDetails', e.target.value)}
                    className="bg-background/50 border-primary/20 focus:border-primary resize-none"
                    placeholder="Tell me about your project goals and how AI can help..."
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full btn-ai"
                  disabled={
                    !selectedDate || 
                    !selectedTime || 
                    !meetingType || 
                    !formData.name.trim() || 
                    !formData.email.trim() || 
                    loading
                  }
                >
                  {loading ? "Scheduling..." : (
                    <>
                      <CalendarIcon className="w-4 h-4 mr-2" />
                      Schedule Appointment
                    </>
                  )}
                </Button>
              </form>

              {selectedDate && selectedTime && meetingType && (
                <div className="mt-6 p-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-primary/20">
                  <h4 className="font-semibold text-primary mb-2">Appointment Summary</h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p><strong>Date:</strong> {format(selectedDate, "PPP")}</p>
                    <p><strong>Time:</strong> {selectedTime} (PST)</p>
                    <p><strong>Type:</strong> {meetingTypes.find(t => t.id === meetingType)?.title}</p>
                    <p><strong>Duration:</strong> {meetingTypes.find(t => t.id === meetingType)?.duration}</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-2xl border border-primary/20">
            <h3 className="text-xl font-bold mb-4 text-primary">Prefer Other Ways to Connect?</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                variant="outline"
                className="border-primary/30 hover:border-primary"
              >
                <a
                  href="https://calendly.com/arishamumtaz340"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Video className="w-4 h-4 mr-2" />
                  Schedule Instant Call With Me 
                </a>
              </Button>  
              <Button
                asChild
                variant="outline"
                className=" border-accent/30 hover:border-accent"
              >
                <a
                  href="https://www.linkedin.com/in/arisha-mumtaz/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Message Me on LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentCalendar;
