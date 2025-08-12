import { Card, CardContent } from '@/components/ui/card';
import { Code, Database, Wrench, Brain } from 'lucide-react';

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    color: "text-primary",
    bgColor: "bg-primary/10",
    skills: [
      { name: "Java", level: "Advanced", description: "Object-oriented programming, data structures" },
      { name: "Python", level: "Intermediate", description: "Automation, data analysis, machine learning basics" },
      { name: "SQL", level: "Intermediate", description: "Database queries, data manipulation" },
    ]
  },
  {
    title: "Database & Tools",
    icon: Database,
    color: "text-success",
    bgColor: "bg-success/10",
    skills: [
      { name: "MySQL", level: "Intermediate", description: "Database design, optimization, complex queries" },
      { name: "MySQL Workbench", level: "Intermediate", description: "Database administration and design" },
      { name: "Jupyter Notebook", level: "Advanced", description: "Data analysis, prototyping, documentation" },
    ]
  },
  {
    title: "Development Tools",
    icon: Wrench,
    color: "text-accent",
    bgColor: "bg-accent/10",
    skills: [
      { name: "GitHub", level: "Advanced", description: "Version control, collaboration, project management" },
      { name: "VS Code", level: "Expert", description: "Code editing, debugging, extensions" },
      { name: "Git Version Control", level: "Advanced", description: "Branching, merging, distributed workflows" },
    ]
  },
  {
    title: "Core Interests",
    icon: Brain,
    color: "text-purple-600",
    bgColor: "bg-purple-100",
    skills: [
      { name: "Data Structures", level: "Intermediate", description: "Algorithms, problem-solving, optimization" },
      { name: "DBMS", level: "Intermediate", description: "Database concepts, normalization, transactions" },
      { name: "Power Electronics", level: "Advanced", description: "Circuit design, energy conversion systems" },
      { name: "Renewable Energy", level: "Expert", description: "Sustainable systems, energy storage, innovation" },
    ]
  }
];

const SkillCard = ({ skill, delay = 0 }: { skill: { name: string; level: string; description: string }; delay?: number }) => {
  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert": return "bg-green-100 text-green-800 border-green-200";
      case "Advanced": return "bg-blue-100 text-blue-800 border-blue-200";
      case "Intermediate": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div 
      className="p-4 bg-background rounded-lg border border-border hover:shadow-md transition-all duration-300"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-medium text-foreground">{skill.name}</h4>
        <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getLevelColor(skill.level)}`}>
          {skill.level}
        </span>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
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
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillCard 
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