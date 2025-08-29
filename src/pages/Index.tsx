import { ArrowDown, Code, Database, Brain, Cloud, Mail, Github, Linkedin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { ScrollIndicator } from "@/components/ScrollIndicator";
import { SkillCard } from "@/components/SkillCard";
import { ProjectCard } from "@/components/ProjectCard";
import heroPortrait from "@/assets/hero-portrait.jpg";
import projectAiGenerator from "@/assets/project-ai-generator.jpg";
import projectCloudAnalytics from "@/assets/project-cloud-analytics.jpg";
import projectDocumentProcessor from "@/assets/project-document-processor.jpg";

const skills = [
  {
    title: "Frontend Development",
    description: "Creating beautiful, responsive user interfaces with modern frameworks and cutting-edge design systems.",
    icon: Code,
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"]
  },
  {
    title: "Backend Development", 
    description: "Building scalable APIs and server-side solutions with robust architecture and clean code practices.",
    icon: Database,
    technologies: ["Node.js", "Python", "Express", "PostgreSQL", "MongoDB"]
  },
  {
    title: "GenAI & ML",
    description: "Developing intelligent applications with generative AI, machine learning models, and data-driven solutions.",
    icon: Brain,
    technologies: ["OpenAI GPT", "LangChain", "TensorFlow", "PyTorch", "Hugging Face"]
  },
  {
    title: "Azure Cloud",
    description: "Deploying and managing cloud infrastructure with Azure services for scalable, secure applications.",
    icon: Cloud,
    technologies: ["Azure Functions", "Azure ML", "Cosmos DB", "App Service", "DevOps"]
  }
];

const projects = [
  {
    title: "AI-Powered Content Generator",
    description: "A full-stack GenAI application that creates personalized content using GPT models and Azure Cognitive Services. Features real-time collaboration and intelligent content optimization.",
    image: projectAiGenerator,
    technologies: ["React", "Node.js", "OpenAI GPT", "Azure ML", "MongoDB"],
    githubUrl: "#",
    liveUrl: "#",
    featured: true
  },
  {
    title: "Cloud Analytics Dashboard",
    description: "Real-time analytics platform built on Azure infrastructure with machine learning insights and predictive modeling.",
    image: projectCloudAnalytics, 
    technologies: ["Next.js", "Azure Functions", "CosmosDB", "Power BI"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "Smart Document Processor",
    description: "GenAI-powered document analysis tool using Azure Form Recognizer and custom ML models for intelligent data extraction.",
    image: projectDocumentProcessor,
    technologies: ["Python", "Azure AI", "FastAPI", "React", "Docker"],
    githubUrl: "#",
    liveUrl: "#"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <ScrollIndicator />
      
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-up">
            <div>
              <h1 className="text-hero mb-6">
                Full Stack Developer
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Crafting intelligent web applications with <span className="text-foreground font-semibold">3 years</span> of experience in 
                <span className="text-foreground font-semibold"> GenAI</span> and 
                <span className="text-foreground font-semibold"> Azure Cloud</span> technologies.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="btn-primary-glass">
                  View My Work
                  <ArrowDown className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="glass-card">
                  Get In Touch
                </Button>
              </div>
            </div>
          </div>
          
          <div className="relative animate-float">
            <div className="glass-card p-8">
              <img
                src={heroPortrait}
                alt="Developer Portrait"
                className="w-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-section mb-8 animate-slide-up">The Story Behind the Code</h2>
          <div className="glass-card p-12 animate-slide-up">
            <p className="text-lg leading-relaxed text-muted-foreground mb-8">
              My journey began with curiosity about how technology could solve real-world problems. 
              Over the past three years, I've specialized in building intelligent applications that bridge 
              the gap between cutting-edge AI and practical business solutions.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              From developing GenAI-powered platforms to architecting scalable cloud solutions on Azure, 
              I bring both technical expertise and creative problem-solving to every project. 
              My passion lies in creating seamless user experiences backed by robust, intelligent systems.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-section text-center mb-16 animate-slide-up">Technical Expertise</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={skill.title} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <SkillCard {...skill} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-section text-center mb-16 animate-slide-up">Featured Work</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={project.title} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-muted/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-section mb-8 animate-slide-up">Let's Build Something Amazing</h2>
          <div className="glass-card p-12 animate-slide-up">
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Ready to turn your ideas into intelligent, scalable solutions? 
              I'm always excited to collaborate on innovative projects.
            </p>
            <div className="flex justify-center gap-6">
              <Button size="lg" className="btn-primary-glass">
                <Mail className="h-5 w-5 mr-2" />
                hello@yourname.com
              </Button>
              <Button variant="outline" size="lg" className="glass-card">
                <Github className="h-5 w-5 mr-2" />
                GitHub
              </Button>
              <Button variant="outline" size="lg" className="glass-card">
                <Linkedin className="h-5 w-5 mr-2" />
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Your Name. Crafted with precision and passion.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;