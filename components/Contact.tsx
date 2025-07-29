"use client";
import React, { useState } from "react";
import { Card } from "./ui/card";
import { InstagramIcon, LucideLinkedin, Mail, Twitter } from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import axios from "axios";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    console.log(form);

    try {
      const res = await axios.post("/api/contact", form);

      if (res.status === 200) {
        alert("Message sent successfully!");
        setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        alert("Failed to send message.");
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Email error:", error.message);
      } else {
        console.error("Unknown error:", error);
      }
      alert("Something went wrong while sending your message.");
    }
  };
  return (
    <section className="pt-20 min-h-screen scroll-mt-28">
      <div className="flex lg:flex-row flex-col gap-16 mb-16 lg:items-center">
        <div className="space-y-7  lg:w-[26%] font-serif">
          <h1 className="font-bold text-3xl text-[#956549]">Get in Touch</h1>
          <p className="text-xl">
            Interested in working together ? Fill out the Project inquiry form
          </p>
          <div className="flex flex-row gap-4 items-center bg-[#956549]  p-8 rounded-2xl lg:w-full w-[50%] text-white">
            <Mail className="h-6 w-6" />
            <p>renuu157@gmail.com</p>
          </div>

          <p className="font-bold text-xl text-[#956549]">Social sites</p>

          <div className="flex flex-row justify-between w-64">
            <a
              href="https://www.instagram.com/codebyrenu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon className="border rounded-full p-3 h-14 w-14  bg-white border-[#956549] text-[#956549] hover:bg-[#956549] hover:text-white" />
            </a>

            <a
              href="https://www.linkedin.com/in/renu-a1910526b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LucideLinkedin className="border rounded-full p-3 h-14 w-14  bg-white border-[#956549] text-[#956549] hover:bg-[#956549] hover:text-white" />
            </a>

            <a
              href="https://twitter.com/renu05010"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="border rounded-full p-3 h-14 w-14  bg-white border-[#956549] text-[#956549] hover:bg-[#956549] hover:text-white" />
            </a>
          </div>
        </div>

        <Card className="p-10 lg:w-[70%] bg-transparent text-[#956549] ">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-row w-full gap-10">
              <div className="w-[50%]  text-xl">
                <label htmlFor="name">Name *</label>
                <Input
                  id="name"
                  type="text"
                  className="p-8 mt-4"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div className="w-[50%]  text-xl">
                <label htmlFor="email">Email *</label>
                <Input
                  id="email"
                  type="email"
                  className="p-8 mt-4"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
            </div>
            <div className="flex flex-row w-full gap-10">
              <div className="w-[50%]  text-xl">
                <label htmlFor="phone">Phone *</label>
                <Input
                  id="phone"
                  type="text"
                  className="p-8 mt-4"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              </div>
              <div className="w-[50%]  text-xl">
                <label htmlFor="subject">Subject *</label>
                <Textarea
                  id="subject"
                  cols={50}
                  className="mt-4 p-3"
                  required
                  value={form.subject}
                  onChange={(e) =>
                    setForm({ ...form, subject: e.target.value })
                  }
                />
              </div>
            </div>
            <label htmlFor="message" className="text-xl mb-2">
              Message *
            </label>
            <Textarea
              id="message"
              cols={90}
              className="p-3"
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
            <Button
              className="bg-gradient-to-l from-white via-[#D9AB91]/50 via-40% to-white p-8 border-2 border-[#956549] text-[#956549] font-bold w-full hover:*:bg-[#D9AB91]/50 hover:text-white"
              type="submit"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
