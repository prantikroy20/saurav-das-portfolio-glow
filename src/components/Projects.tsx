import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Zap, Shield, Award } from 'lucide-react';

const projects = [
  {
    title: "Footstep Power Generation",
    description: "An innovative system that converts footstep pressure into electricity using piezoelectric sensors and energy storage mechanisms. This sustainable energy solution harnesses human movement to generate clean power.",
    technologies: ["Piezoelectric Sensors", "Energy Storage", "Circuit Design", "Sustainability"],
    features: [
      "Pressure-to-electricity conversion",
      "Energy storage optimization",
      "Sustainable power generation",
      "Smart sensor integration"
    ],
    icon: Zap,
    color: "text-yellow-600",
    bgColor: "bg-yellow-100",
    status: "Completed",
    category: "Renewable Energy"
  },
  {
    title: "ASAP Fire & Gas Protector",
    description: "IoT-based fire and gas detection system with real-time alerts and automated pump control. Winner at JIS Celeb 2024, this project demonstrates excellence in safety technology innovation.",
    technologies: ["IoT", "Sensor Networks", "Automation", "Real-time Systems"],
    features: [
      "Real-time fire & gas detection",
      "Automated alert system",
      "Remote monitoring capabilities",
      "Automated pump control"
    ],
    icon: Shield,
    color: "text-red-600",
    bgColor: "bg-red-100",
    status: "Award Winner",
    category: "IoT & Safety",
    award: "Winner at JIS Celeb 2024"
  }
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  return (
    <Card 
      className="bg-gradient-card hover-glow transition-all duration-300 fade-in-up group"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className={`p-3 ${project.bgColor} rounded-lg`}>
              <project.icon className={`w-6 h-6 ${project.color}`} />
            </div>
            <div>
              <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                {project.title}
              </CardTitle>
              <p className="text-sm text-muted-foreground">{project.category}</p>
            </div>
          </div>
          <div className="flex flex-col items-end space-y-2">
            <Badge variant={project.status === "Award Winner" ? "default" : "secondary"}>
              {project.status}
            </Badge>
            {project.award && (
              <div className="flex items-center space-x-1 text-yellow-600">
                <Award className="w-4 h-4" />
                <span className="text-xs font-medium">Award Winner</span>
              </div>
            )}
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <p className="text-muted-foreground leading-relaxed">
          {project.description}
        </p>
        
        {project.award && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
            <p className="text-yellow-800 text-sm font-medium">🏆 {project.award}</p>
          </div>
        )}

        {/* Key Features */}
        <div>
          <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
          <ul className="space-y-2">
            {project.features.map((feature, idx) => (
              <li key={idx} className="flex items-center space-x-2 text-sm text-muted-foreground">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div>
          <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <Badge key={idx} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3 pt-4">
          <Button size="sm" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
            <ExternalLink className="w-4 h-4 mr-2" />
            View Details
          </Button>
          <Button size="sm" variant="outline" className="hover:bg-muted transition-all duration-300">
            <Github className="w-4 h-4 mr-2" />
            Source Code
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions in renewable energy, IoT, and safety technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Project Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 fade-in-up">
          <Card className="bg-gradient-card text-center p-6 hover-glow transition-all duration-300">
            <div className="mb-4">
              <Zap className="w-12 h-12 text-primary mx-auto" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">2+</h3>
            <p className="text-muted-foreground">Major Projects</p>
          </Card>
          
          <Card className="bg-gradient-card text-center p-6 hover-glow transition-all duration-300">
            <div className="mb-4">
              <Award className="w-12 h-12 text-yellow-600 mx-auto" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">1</h3>
            <p className="text-muted-foreground">Competition Win</p>
          </Card>
          
          <Card className="bg-gradient-card text-center p-6 hover-glow transition-all duration-300">
            <div className="mb-4">
              <Shield className="w-12 h-12 text-success mx-auto" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">IoT</h3>
            <p className="text-muted-foreground">Safety Solutions</p>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 fade-in-up">
          <p className="text-muted-foreground mb-6">
            Interested in collaborating on innovative projects?
          </p>
          <Button 
            size="lg"
            className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Let's Build Something Amazing
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;