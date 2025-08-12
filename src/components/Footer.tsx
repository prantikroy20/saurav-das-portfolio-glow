import { Mail, Linkedin, Github, ExternalLink, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <h3 className="text-xl font-display font-bold">Saurav Das</h3>
            <p className="text-blue-100 text-sm leading-relaxed">
              B.Tech Electrical Engineering Student passionate about IoT, Renewable Energy, 
              and innovation. Always exploring new technologies and opportunities.
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:saurav.das1257@gmail.com"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300"
                title="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/saurav-das-43217a37a/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/sauravdas1257-stack"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://your-portfolio-link.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300"
                title="Portfolio"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {[
                { name: 'About', href: '#about' },
                { name: 'Education', href: '#education' },
                { name: 'Skills', href: '#skills' },
                { name: 'Projects', href: '#projects' },
                { name: 'Publications', href: '#publications' },
                { name: 'Experience', href: '#experience' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-blue-100 hover:text-white transition-colors duration-200 text-sm"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-blue-100">Email</p>
                <a 
                  href="mailto:saurav.das1257@gmail.com"
                  className="text-white hover:text-blue-200 transition-colors"
                >
                  saurav.das1257@gmail.com
                </a>
              </div>
              <div>
                <p className="text-blue-100">Phone</p>
                <a 
                  href="tel:+918981634479"
                  className="text-white hover:text-blue-200 transition-colors"
                >
                  +91 8981634479
                </a>
              </div>
              <div>
                <p className="text-blue-100">Location</p>
                <p className="text-white">Kolkata, West Bengal, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-blue-100">
              © {currentYear} Saurav Das. All rights reserved.
            </div>
            <div className="flex items-center space-x-1 text-sm text-blue-100">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span>using React & Tailwind CSS</span>
            </div>
          </div>
        </div>

        {/* Achievement Badge */}
        <div className="mt-6 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full text-sm">
            <span>🏆</span>
            <span>JIS Celeb 2024 Winner | IEEE Published Author | State-level Athlete</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;