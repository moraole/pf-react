import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { portfolioData } from '../mock';
import { toast } from 'sonner';

const Contact = () => {
  const { contact } = portfolioData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission - will be connected to backend later
    toast.success('Message sent successfully! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: contact.email,
      link: `mailto:${contact.email}`
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: contact.phone,
      link: `tel:${contact.phone}`
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Location',
      value: contact.location,
      link: null
    }
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto">
            Have a project in mind? Let's work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6 animate-fade-in-up">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-700 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                    <CardContent className="p-5 flex items-center gap-4 relative">
                      <div className="p-2.5 rounded-lg bg-slate-100 group-hover:bg-slate-900 text-slate-900 group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-sm text-slate-600 font-semibold">
                          {info.label}
                        </p>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-slate-900 hover:text-slate-700 transition-colors duration-200 font-semibold"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-slate-900 font-semibold">{info.value}</p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <Card className="border-none shadow-xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-12 border-slate-200 focus:border-slate-900 transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-12 border-slate-200 focus:border-slate-900 transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <Input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="h-12 border-slate-200 focus:border-slate-900 transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="resize-none border-slate-200 focus:border-slate-900 transition-colors duration-300"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white h-12 text-lg transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl"
                  >
                    Send Message
                    <Send className="ml-2" size={18} />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
