import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
// Using uploaded profile image

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-6 fade-in-up">
            <div className="space-y-2">
              <p className="text-lg font-medium opacity-90">Hello, I'm</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight">
                Saurav Das
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-blue-100">
                B.Tech Electrical Engineering Student
              </p>
            </div>
            
            <p className="text-lg opacity-90 max-w-lg">
              IoT & Renewable Energy Enthusiast | State-Level Table Tennis Player | 
              Passionate about innovation in Power Electronics and Hybrid Vehicle Technologies
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-blue-100">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5" />
                <span>Kolkata, West Bengal, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5" />
                <a href="mailto:saurav.das1257@gmail.com" className="hover:text-white transition-colors">
                  saurav.das1257@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5" />
                <a href="tel:+918981634479" className="hover:text-white transition-colors">
                  +91 8981634479
                </a>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-blue-50 hover-glow transition-all duration-300 transform hover:scale-105"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105 hover:shadow-lg backdrop-blur-sm bg-white/10"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              <a 
                href="https://www.linkedin.com/in/saurav-das-43217a37a/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-lg hover:bg-white/20 hover-glow transition-all duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://github.com/sauravdas1257-stack"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-lg hover:bg-white/20 hover-glow transition-all duration-300"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://your-portfolio-link.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-lg hover:bg-white/20 hover-glow transition-all duration-300"
              >
                <ExternalLink className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end fade-in-delayed">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl float">
                <img 
                  src="/lovable-uploads/e875fa60-ce00-46c5-abee-42ece74386f5.png" 
                  alt="Saurav Das - Electrical Engineering Student"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-300/30 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;