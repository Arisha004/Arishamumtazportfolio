"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Select, SelectItem } from "@/components/ui/select";
import { CalendarIcon } from "lucide-react";
import emailjs from "emailjs-com";

export default function ScheduleAppointment() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [meetingType, setMeetingType] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const times = ["10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "4:00 PM"];
  const meetingTypes = ["Consultation", "Follow-up", "Strategy Session"];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedDate || !selectedTime || !meetingType || !formData.name || !formData.email) {
      return;
    }

    setLoading(true);

    try {
      // Send confirmation email with EmailJS
      await emailjs.send(
        "your_service_id",   // replace with your EmailJS service ID
        "your_template_id",  // replace with your EmailJS template ID
        {
          to_name: formData.name,
          to_email: formData.email,
          meeting_type: meetingType,
          meeting_date: selectedDate.toDateString(),
          meeting_time: selectedTime,
        },
        "your_public_key" // replace with your EmailJS public key
      );

      setSuccessMsg("🎉 Your appointment has been scheduled! A confirmation email has been sent.");
      setFormData({ name: "", email: "" });
      setSelectedDate(null);
      setSelectedTime("");
      setMeetingType("");
    } catch (error) {
      console.error("EmailJS error:", error);
      setSuccessMsg("❌ Something went wrong while scheduling. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white shadow rounded-xl space-y-4">
      <h2 className="text-xl font-bold text-center mb-2">Schedule Appointment</h2>

      <Input
        type="text"
        placeholder="Your Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />
      <Input
        type="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
      />

      <Calendar
        mode="single"
        selected={selectedDate || undefined}
        onSelect={setSelectedDate}
        className="rounded-md border"
      />

      <Select value={selectedTime} onValueChange={setSelectedTime}>
        <SelectItem value="">Select Time</SelectItem>
        {times.map((time) => (
          <SelectItem key={time} value={time}>{time}</SelectItem>
        ))}
      </Select>

      <Select value={meetingType} onValueChange={setMeetingType}>
        <SelectItem value="">Select Meeting Type</SelectItem>
        {meetingTypes.map((type) => (
          <SelectItem key={type} value={type}>{type}</SelectItem>
        ))}
      </Select>

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

      {successMsg && (
        <p className="text-center text-sm font-medium text-green-600">{successMsg}</p>
      )}
    </form>
  );
}
