import { Card, CardContent } from '@/components/ui/card';
import { Code, Database, Wrench, Brain } from 'lucide-react';

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    color: "text-primary",
    bgColor: "bg-primary/10",
    skills: [
      { name: "Java", level: 85 },
      { name: "Python", level: 80 },
      { name: "SQL", level: 75 },
    ]
  },
  {
    title: "Database & Tools",
    icon: Database,
    color: "text-success",
    bgColor: "bg-success/10",
    skills: [
      { name: "MySQL", level: 80 },
      { name: "MySQL Workbench", level: 75 },
      { name: "Jupyter Notebook", level: 85 },
    ]
  },
  {
    title: "Development Tools",
    icon: Wrench,
    color: "text-accent",
    bgColor: "bg-accent/10",
    skills: [
      { name: "GitHub", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Git Version Control", level: 85 },
    ]
  },
  {
    title: "Core Interests",
    icon: Brain,
    color: "text-purple-600",
    bgColor: "bg-purple-100",
    skills: [
      { name: "Data Structures", level: 80 },
      { name: "DBMS", level: 75 },
      { name: "Power Electronics", level: 85 },
      { name: "Renewable Energy", level: 90 },
    ]
  }
];

const SkillBar = ({ skill, delay = 0 }: { skill: { name: string; level: number }; delay?: number }) => {
  return (
    <div className="mb-4" style={{ animationDelay: `${delay}s` }}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-foreground">{skill.name}</span>
        <span className="text-sm text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-2">
        <div 
          className="h-2 bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
          style={{ 
            width: `${skill.level}%`,
            animationDelay: `${delay}s`
          }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proficient in modern technologies and engineering principles
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={category.title} 
              className="bg-gradient-card hover-glow transition-all duration-300 fade-in-up"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <div className={`p-3 ${category.bgColor} rounded-lg mr-4`}>
                    <category.icon className={`w-6 h-6 ${category.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar 
                      key={skill.name} 
                      skill={skill} 
                      delay={categoryIndex * 0.2 + skillIndex * 0.1}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills Cloud */}
        <div className="text-center fade-in-up">
          <h3 className="text-2xl font-display font-semibold text-foreground mb-8">
            Additional Technologies & Concepts
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "Electrical Engineering", "IoT Development", "Piezoelectric Sensors", 
              "Energy Storage Systems", "Microprocessors", "Microcontrollers",
              "Circuit Design", "Power Systems", "Control Systems", "MATLAB",
              "Arduino", "Raspberry Pi", "Sensor Integration", "Automation",
              "Machine Learning Basics", "Data Analysis", "Technical Writing",
              "Project Management", "Research & Development"
            ].map((tech, index) => (
              <span 
                key={tech}
                className="bg-muted hover:bg-primary/10 hover:text-primary px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-default"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;