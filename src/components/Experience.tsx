import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Calendar, MapPin, Award, Trophy, User } from 'lucide-react';

const experiences = [
  {
    type: "internship",
    title: "Buyer, Procurement Department",
    company: "Schneider Electric India",
    location: "Vadodara",
    duration: "June – August 2024",
    description: "Gained valuable experience in procurement processes, vendor management, and supply chain operations in a leading multinational corporation.",
    responsibilities: [
      "Assisted in vendor evaluation and selection processes",
      "Supported procurement team with purchase order management",
      "Analyzed supplier performance and cost optimization",
      "Participated in inventory management systems"
    ],
    skills: ["Procurement", "Vendor Management", "Supply Chain", "Cost Analysis", "ERP Systems"],
    icon: Building,
    color: "text-blue-600",
    bgColor: "bg-blue-100"
  }
];

const achievements = [
  {
    title: "2nd Runner-up",
    event: "Think Tank Competition",
    organization: "Applied Physics Department, University of Calcutta",
    description: "Recognized for innovative thinking and problem-solving skills in physics and engineering applications.",
    icon: Trophy,
    color: "text-yellow-600",
    bgColor: "bg-yellow-100"
  },
  {
    title: "Winner",
    event: "JIS Celeb 2024",
    organization: "JIS University",
    award: "JIS SAMMAN 2025",
    description: "Won the prestigious competition for ASAP Fire & Gas Protector project, demonstrating excellence in IoT and safety technology innovation.",
    icon: Award,
    color: "text-green-600",
    bgColor: "bg-green-100"
  }
];

const certifications = [
  {
    title: "Fundamentals of Artificial Intelligence",
    provider: "NPTEL",
    description: "Comprehensive course covering AI basics, problem-solving techniques, and machine learning fundamentals.",
    topics: ["AI Fundamentals", "Problem Solving", "Machine Learning Basics", "Algorithms"],
    icon: "🤖"
  },
  {
    title: "Microprocessors and Microcontrollers",
    provider: "NPTEL",
    description: "In-depth study of microprocessor architecture, programming, and interfacing techniques.",
    topics: ["Architecture", "Programming", "Interfacing", "Embedded Systems"],
    icon: "⚡"
  }
];

const extracurricular = [
  {
    activity: "State-level Table Tennis Player",
    description: "Competing at state level, demonstrating dedication, discipline, and competitive spirit.",
    icon: "🏓"
  },
  {
    activity: "Tabla (Intermediate)",
    description: "Proficient in playing tabla, showcasing musical talent and cultural appreciation.",
    icon: "🥁"
  },
  {
    activity: "Aquarist",
    description: "Passionate about maintaining aquariums, demonstrating attention to detail and responsibility.",
    icon: "🐠"
  },
  {
    activity: "Bike Riding",
    description: "Enthusiast rider, promoting adventure and exploration spirit.",
    icon: "🏍️"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Experience & Achievements
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional experience, academic achievements, and personal interests
          </p>
        </div>

        {/* Internship Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-display font-semibold text-foreground mb-8 text-center">
            Professional Experience
          </h3>
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <Card 
                key={index}
                className="bg-gradient-card hover-glow transition-all duration-300 fade-in-up"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`p-3 ${exp.bgColor} rounded-lg`}>
                        <exp.icon className={`w-6 h-6 ${exp.color}`} />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-semibold">{exp.title}</CardTitle>
                        <p className="text-lg font-medium text-primary">{exp.company}</p>
                      </div>
                    </div>
                    <Badge variant="secondary">{exp.type}</Badge>
                  </div>
                  <div className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0 text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Responsibilities:</h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Skills Gained:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, idx) => (
                        <Badge key={idx} variant="outline">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h3 className="text-2xl font-display font-semibold text-foreground mb-8 text-center">
            Achievements & Recognition
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <Card 
                key={index}
                className="bg-gradient-card hover-glow transition-all duration-300 fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`p-3 ${achievement.bgColor} rounded-lg`}>
                      <achievement.icon className={`w-6 h-6 ${achievement.color}`} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">{achievement.title}</h4>
                      <p className="text-primary font-medium">{achievement.event}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{achievement.organization}</p>
                  {achievement.award && (
                    <Badge className="mb-3 bg-yellow-100 text-yellow-800 border-yellow-200">
                      🏆 {achievement.award}
                    </Badge>
                  )}
                  <p className="text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-display font-semibold text-foreground mb-8 text-center">
            Certifications
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <Card 
                key={index}
                className="bg-gradient-card hover-glow transition-all duration-300 fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="text-2xl">{cert.icon}</div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">{cert.title}</h4>
                      <p className="text-primary font-medium">{cert.provider}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {cert.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cert.topics.map((topic, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Extracurricular Activities */}
        <div>
          <h3 className="text-2xl font-display font-semibold text-foreground mb-8 text-center">
            Extracurricular Activities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {extracurricular.map((activity, index) => (
              <Card 
                key={index}
                className="bg-gradient-card hover-glow transition-all duration-300 fade-in-up text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{activity.icon}</div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">
                    {activity.activity}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {activity.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;