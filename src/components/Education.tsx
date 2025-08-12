import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Calendar, MapPin, Trophy } from 'lucide-react';

const educationData = [
  {
    degree: "B.Tech in Electrical Engineering",
    institution: "Guru Nanak Institute of Technology (MAKAUT)",
    duration: "Jul 2022 – Jun 2026 (Expected)",
    grade: "CGPA: 7.68 (up to 5th Semester)",
    location: "Kolkata, West Bengal",
    description: "Specializing in Power Electronics, Renewable Energy, and IoT systems. Active in research and project development.",
    highlights: ["IEEE Conference Publication", "Project Competition Winner", "Research in Hybrid Vehicle Control Systems"]
  },
  {
    degree: "Higher Secondary (Science)",
    institution: "Central Model School",
    duration: "2021",
    grade: "69%",
    location: "Kolkata, West Bengal",
    description: "Focused on Physics, Chemistry, and Mathematics with strong foundation in scientific principles.",
    highlights: ["Science Stream Specialization", "Strong Mathematical Foundation"]
  },
  {
    degree: "Secondary Education (Science)",
    institution: "St. Xavier's Institution",
    duration: "2019",
    grade: "93.2%",
    location: "Kolkata, West Bengal",
    description: "Achieved excellence in secondary education with outstanding performance across all subjects.",
    highlights: ["Academic Excellence", "Top Performer", "Strong Foundation in Sciences"]
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic journey building strong foundations in electrical engineering and sciences
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block"></div>
            
            <div className="space-y-8">
              {educationData.map((edu, index) => (
                <div key={index} className="relative fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block"></div>
                  
                  <Card className="ml-0 md:ml-20 bg-gradient-card hover-glow transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                            {edu.degree}
                          </h3>
                          <p className="text-lg font-medium text-primary mb-2">
                            {edu.institution}
                          </p>
                        </div>
                        
                        <div className="lg:text-right space-y-1">
                          <div className="flex items-center lg:justify-end space-x-2 text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">{edu.duration}</span>
                          </div>
                          <div className="flex items-center lg:justify-end space-x-2 text-muted-foreground">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">{edu.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Grade */}
                      <div className="inline-flex items-center space-x-2 bg-success/10 text-success px-3 py-1 rounded-lg text-sm font-medium mb-4">
                        <Trophy className="w-4 h-4" />
                        <span>{edu.grade}</span>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {edu.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-2">
                        <h4 className="font-semibold text-foreground">Key Highlights:</h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.highlights.map((highlight, idx) => (
                            <span 
                              key={idx}
                              className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Academic Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 fade-in-up">
          <Card className="bg-gradient-card text-center p-6 hover-glow transition-all duration-300">
            <div className="mb-4">
              <GraduationCap className="w-12 h-12 text-primary mx-auto" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">7.68</h3>
            <p className="text-muted-foreground">Current CGPA</p>
          </Card>
          
          <Card className="bg-gradient-card text-center p-6 hover-glow transition-all duration-300">
            <div className="mb-4">
              <Trophy className="w-12 h-12 text-success mx-auto" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">93.2%</h3>
            <p className="text-muted-foreground">Secondary School</p>
          </Card>
          
          <Card className="bg-gradient-card text-center p-6 hover-glow transition-all duration-300">
            <div className="mb-4">
              <Calendar className="w-12 h-12 text-accent mx-auto" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">2026</h3>
            <p className="text-muted-foreground">Expected Graduation</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;