import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, BookOpen, Calendar, Users } from 'lucide-react';

const publications = [
  {
    title: "Integrated MPTA Control Framework for Hybrid Electric Vehicles",
    journal: "IEEE Conference",
    date: "November 2024",
    link: "https://ieeexplore.ieee.org/document/10869014",
    description: "This research presents a comprehensive control strategy designed to improve efficiency and torque management in hybrid electric vehicles through an integrated Multi-Point Torque Assignment (MPTA) control framework.",
    keywords: ["Hybrid Electric Vehicles", "Control Systems", "Torque Management", "Energy Efficiency", "Automotive Engineering"],
    type: "Conference Paper",
    status: "Published",
    citations: "Recently Published",
    abstract: "The paper explores advanced control methodologies for optimizing power distribution and torque management in hybrid vehicle systems, contributing to enhanced fuel efficiency and performance optimization."
  }
];

const Publications = () => {
  return (
    <section id="publications" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Publications & Research
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Contributing to academic research in electrical engineering and hybrid vehicle technologies
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {publications.map((publication, index) => (
            <Card 
              key={publication.title}
              className="bg-gradient-card hover-glow transition-all duration-300 fade-in-up mb-8"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start space-y-4 lg:space-y-0">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <BookOpen className="w-5 h-5 text-primary" />
                      </div>
                      <Badge variant="default" className="bg-success text-success-foreground">
                        {publication.status}
                      </Badge>
                      <Badge variant="outline">
                        {publication.type}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-semibold text-foreground mb-2 leading-tight">
                      {publication.title}
                    </CardTitle>
                    <div className="flex flex-col space-y-2 text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4" />
                        <span className="font-medium text-primary">{publication.journal}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{publication.date}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-start lg:items-end space-y-2">
                    <Button 
                      asChild 
                      className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                    >
                      <a 
                        href={publication.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Paper
                      </a>
                    </Button>
                    <p className="text-sm text-muted-foreground">
                      {publication.citations}
                    </p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Abstract */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Abstract</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {publication.description}
                  </p>
                </div>

                {/* Key Contribution */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Contribution</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {publication.abstract}
                  </p>
                </div>

                {/* Keywords */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Keywords</h4>
                  <div className="flex flex-wrap gap-2">
                    {publication.keywords.map((keyword, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Publication Details */}
                <div className="bg-muted/50 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">Publication Details</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium">Conference:</span>
                      <span className="ml-2 text-muted-foreground">{publication.journal}</span>
                    </div>
                    <div>
                      <span className="font-medium">Publication Date:</span>
                      <span className="ml-2 text-muted-foreground">{publication.date}</span>
                    </div>
                    <div>
                      <span className="font-medium">Type:</span>
                      <span className="ml-2 text-muted-foreground">{publication.type}</span>
                    </div>
                    <div>
                      <span className="font-medium">Status:</span>
                      <span className="ml-2 text-success font-medium">{publication.status}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Research Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 fade-in-up">
          <Card className="bg-gradient-card text-center p-6 hover-glow transition-all duration-300">
            <div className="mb-4">
              <BookOpen className="w-12 h-12 text-primary mx-auto" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">1</h3>
            <p className="text-muted-foreground">IEEE Publication</p>
          </Card>
          
          <Card className="bg-gradient-card text-center p-6 hover-glow transition-all duration-300">
            <div className="mb-4">
              <Users className="w-12 h-12 text-success mx-auto" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">2024</h3>
            <p className="text-muted-foreground">Recent Publication</p>
          </Card>
          
          <Card className="bg-gradient-card text-center p-6 hover-glow transition-all duration-300">
            <div className="mb-4">
              <ExternalLink className="w-12 h-12 text-accent mx-auto" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">IEEE</h3>
            <p className="text-muted-foreground">Conference Paper</p>
          </Card>
        </div>

        {/* Research Interests */}
        <div className="mt-16 text-center fade-in-up">
          <h3 className="text-2xl font-display font-semibold text-foreground mb-8">
            Research Interests
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {[
              "Hybrid Electric Vehicles", "Control Systems Engineering", "Power Electronics",
              "Energy Management", "Torque Optimization", "Automotive Engineering",
              "Renewable Energy Integration", "Smart Grid Technology", "IoT in Automotive"
            ].map((interest, index) => (
              <span 
                key={interest}
                className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium hover:bg-primary/20 transition-all duration-300 cursor-default"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;