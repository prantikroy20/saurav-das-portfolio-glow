import { Card, CardContent } from '@/components/ui/card';
import { Target, Award, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Driven by innovation and excellence in electrical engineering
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Career Objective */}
          <Card className="bg-gradient-card hover-glow transition-all duration-300 fade-in-up">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary/10 rounded-lg mr-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Career Objective</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Seeking a challenging role to apply my technical skills and knowledge, 
                contributing to organizational growth while enhancing my professional development 
                in the field of electrical engineering and IoT innovation.
              </p>
            </CardContent>
          </Card>

          {/* Achievements Highlight */}
          <Card className="bg-gradient-card hover-glow transition-all duration-300 fade-in-up">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-success/10 rounded-lg mr-4">
                  <Award className="w-6 h-6 text-success" />
                </div>
                <h3 className="text-xl font-semibold">Key Achievements</h3>
              </div>
              <ul className="text-muted-foreground space-y-2">
                <li>• Winner at JIS Celeb 2024</li>
                <li>• IEEE Conference Publication</li>
                <li>• State-level Table Tennis Player</li>
                <li>• 2nd Runner-up at Think Tank Competition</li>
              </ul>
            </CardContent>
          </Card>

          {/* Interests */}
          <Card className="bg-gradient-card hover-glow transition-all duration-300 fade-in-up">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-accent/10 rounded-lg mr-4">
                  <Heart className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Core Interests</h3>
              </div>
              <ul className="text-muted-foreground space-y-2">
                <li>• Data Structures & Algorithms</li>
                <li>• Power Electronics</li>
                <li>• Renewable Energy Systems</li>
                <li>• IoT & Smart Systems</li>
                <li>• Database Management</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Personal Story */}
        <div className="bg-gradient-card rounded-2xl p-8 shadow-lg fade-in-up">
          <h3 className="text-2xl font-display font-semibold mb-6 text-center">My Journey</h3>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="mb-4">
              I'm currently pursuing my B.Tech in Electrical Engineering at Guru Nanak Institute of Technology 
              under MAKAUT, with a strong academic foundation and a CGPA of 7.68. My journey in engineering 
              began with a fascination for how electrical systems power our modern world.
            </p>
            <p className="mb-4">
              Beyond academics, I'm deeply passionate about renewable energy and IoT technologies. This passion 
              has led me to work on innovative projects like footstep power generation systems and IoT-based 
              fire protection systems. My work has been recognized at various competitions, including winning 
              the JIS Celeb 2024.
            </p>
            <p>
              When I'm not immersed in engineering projects, you'll find me on the table tennis court, where 
              I compete at the state level. I also enjoy playing the tabla and maintaining aquariums, activities 
              that help me maintain balance and creativity in my life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;