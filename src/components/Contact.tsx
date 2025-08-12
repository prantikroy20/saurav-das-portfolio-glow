import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Send } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "saurav.das1257@gmail.com",
    href: "mailto:saurav.das1257@gmail.com",
    color: "text-blue-600",
    bgColor: "bg-blue-100"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8981634479",
    href: "tel:+918981634479",
    color: "text-green-600",
    bgColor: "bg-green-100"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kolkata, West Bengal, India",
    href: "#",
    color: "text-red-600",
    bgColor: "bg-red-100"
  }
];

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/saurav-das-43217a37a/",
    color: "text-blue-600",
    bgColor: "bg-blue-100"
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/sauravdas1257-stack",
    color: "text-gray-800",
    bgColor: "bg-gray-100"
  },
  {
    icon: ExternalLink,
    label: "Portfolio",
    href: "https://your-portfolio-link.com",
    color: "text-purple-600",
    bgColor: "bg-purple-100"
  }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Create mailto link with form data
    const mailtoLink = `mailto:saurav.das1257@gmail.com?subject=${encodeURIComponent(formData.subject || 'Contact from Portfolio')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Email Client Opened",
      description: "Your default email client should open with the message pre-filled.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's discuss opportunities, collaborations, or just have a conversation about technology and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div className="fade-in-up">
              <h3 className="text-xl font-semibold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center space-x-4 p-4 bg-gradient-card rounded-lg hover-glow transition-all duration-300 group"
                  >
                    <div className={`p-3 ${info.bgColor} rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className={`w-5 h-5 ${info.color}`} />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{info.label}</p>
                      <p className="text-muted-foreground text-sm">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="fade-in-up">
              <h3 className="text-xl font-semibold text-foreground mb-6">Follow Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 ${social.bgColor} rounded-lg hover-glow transition-all duration-300 hover:scale-110 group`}
                    title={social.label}
                  >
                    <social.icon className={`w-6 h-6 ${social.color} group-hover:scale-110 transition-transform duration-300`} />
                  </a>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-primary text-white p-6 rounded-lg fade-in-up">
              <h4 className="font-semibold mb-2">Ready to collaborate?</h4>
              <p className="text-blue-100 text-sm mb-4">
                Whether it's a project, internship, or just a conversation about technology, I'm always open to new opportunities.
              </p>
              <Button 
                variant="secondary" 
                className="bg-white text-primary hover:bg-blue-50"
                onClick={() => window.open('mailto:saurav.das1257@gmail.com', '_blank')}
              >
                <Mail className="w-4 h-4 mr-2" />
                Send Email
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-card shadow-lg fade-in-up">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        className="bg-background border-border"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        className="bg-background border-border"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      className="bg-background border-border"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project, opportunity, or just say hello..."
                      rows={6}
                      className="bg-background border-border resize-none"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                    size="lg"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
                
                <p className="text-xs text-muted-foreground mt-4 text-center">
                  * This form will open your default email client with the message pre-filled
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Contact Options */}
        <div className="mt-16 text-center fade-in-up">
          <h3 className="text-xl font-semibold text-foreground mb-6">Other Ways to Connect</h3>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <span>📞</span>
              <span>Available for phone calls</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <span>💼</span>
              <span>Open to internship opportunities</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <span>🤝</span>
              <span>Interested in collaborations</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;