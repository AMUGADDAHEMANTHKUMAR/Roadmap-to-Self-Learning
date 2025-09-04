import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BookOpen, Brain, Calculator, Laptop, Timer, MessageSquare } from "lucide-react";
import { SearchBar } from "@/components/ui/search-bar";
import { DomainCard } from "@/components/ui/domain-card";
import { TimerWidget } from "@/components/ui/timer-widget";
import { Button } from "@/components/ui/button";
import { FloatingParticles } from "@/components/ui/floating-particles";
import { TypingText } from "@/components/ui/typing-text";

const domains = [
  {
    id: "gate",
    title: "GATE",
    description: "Graduate Aptitude Test in Engineering - Complete syllabus, previous year papers, and study materials for all 21 branches.",
    icon: <BookOpen className="h-6 w-6" />,
    stats: { topics: 450, papers: 320, resources: 500 },
    path: "/syllabus/gate"
  },
  {
    id: "it-roles",
    title: "IT Roles",
    description: "Comprehensive learning paths for SAP (all modules), Pega, Python, Full Stack, Cloud, DevOps, and 30+ IT roles.",
    icon: <Laptop className="h-6 w-6" />,
    stats: { topics: 280, papers: 150, resources: 400 },
    path: "/syllabus/it-roles"
  },
  {
    id: "aptitude", 
    title: "Aptitude",
    description: "Complete aptitude preparation for GATE, IT placements, banking, and competitive exams with 200+ topics.",
    icon: <Calculator className="h-6 w-6" />,
    stats: { topics: 200, papers: 250, resources: 350 },
    path: "/syllabus/aptitude"
  }
];

const topics = [
  { 
    category: "GATE", 
    items: [
      "Computer Science", "Electronics & Communication", "Mechanical Engineering", "Electrical Engineering", 
      "Civil Engineering", "Chemical Engineering", "Biotechnology", "Instrumentation Engineering", 
      "Production & Industrial", "Textile Engineering", "Geology & Geophysics", "Metallurgical Engineering",
      "Physics", "Chemistry", "Mathematics", "Statistics", "Architecture & Planning", "Naval Architecture",
      "Mining Engineering", "Aerospace Engineering", "Agricultural Engineering"
    ] 
  },
  { 
    category: "IT Roles", 
    items: [
      "SAP PP", "SAP MM", "SAP FI", "SAP SD", "SAP CO", "SAP HCM", "SAP CRM", "SAP ABAP", "SAP BASIS",
      "SAP Security", "SAP HANA", "SAP Fiori", "SAP S/4HANA", "SAP BW/BI", "SAP Ariba", "SAP SuccessFactors",
      "Pega CSA", "Pega CSSA", "Pega LSA", "Python Developer", "Full Stack Developer", "Web Developer",
      "Software Engineer", "DevOps Engineer", "Cloud Engineer", "Data Scientist", "AI/ML Engineer",
      "Cybersecurity Analyst", "Database Administrator", "Network Administrator", "QA Engineer", "Business Analyst"
    ] 
  },
  { 
    category: "Aptitude", 
    items: [
      "GATE Aptitude", "IT Placement Aptitude", "Banking & SSC Aptitude", "CAT & MBA Aptitude",
      "Quantitative Aptitude", "Logical Reasoning", "Verbal Ability", "Data Interpretation",
      "Number Systems", "Percentages", "Profit & Loss", "Time Speed Distance", "Permutations Combinations",
      "Probability", "Coding Decoding", "Blood Relations", "Seating Arrangement", "Series Completion",
      "Reading Comprehension", "Grammar", "Vocabulary", "Para Jumbles", "Critical Reasoning"
    ] 
  }
];

export default function Home() {
  const navigate = useNavigate();
  const [showTimer, setShowTimer] = useState(false);

  const handleSearch = (query: string, source?: string) => {
    console.log("Searching:", { query, source });
    // Navigate to Q&A page with search query
    navigate(`/qa?q=${encodeURIComponent(query)}&source=${source || 'all'}`);
  };

  const handleDomainClick = (domain: typeof domains[0]) => {
    navigate(domain.path);
  };

  return (
    <div className="min-h-screen bg-background relative">
      <FloatingParticles />
      {/* Hero Banner Section */}
      <section className="py-12 px-4 bg-gradient-hero text-white relative z-10">
        <div className="container mx-auto text-center animate-fade-in yellow-glow">
          <h1 className="text-6xl font-bold mb-6 animate-slide-up">
            <TypingText text="Your Roadmap to Self-Learning" speed={80} />
          </h1>
          <p className="text-2xl mb-6 text-yellow-400 max-w-3xl mx-auto animate-slide-up font-semibold" style={{animationDelay: '0.2s'}}>
            Domain-wise Syllabi + Free Resources, All in One Place
          </p>
          <p className="text-lg mb-8 text-white/90 max-w-4xl mx-auto animate-slide-up leading-relaxed" style={{animationDelay: '0.4s'}}>
            This application is dedicated to providing curated syllabi and selected free resources for different domains like GATE, IT Jobs, SAP, and more. It is purely for self-learning — focused on helping you stay structured, explore key topics, and advance in your chosen field.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 animate-slide-up" style={{animationDelay: '0.6s'}}>
            <Button 
              onClick={() => navigate("/pyq")}
              variant="secondary"
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-400 text-black border-yellow-400 shadow-md hover:shadow-glow font-semibold"
            >
              <BookOpen className="h-5 w-5 mr-2" />
              Browse Papers
            </Button>
            <Button 
              onClick={() => setShowTimer(!showTimer)}
              variant="secondary"
              size="lg" 
              className="bg-yellow-500 hover:bg-yellow-400 text-black border-yellow-400 shadow-md hover:shadow-glow font-semibold"
            >
              <Timer className="h-5 w-5 mr-2" />
              Practice Timer
            </Button>
            <Button 
              onClick={() => navigate("/qa")}
              variant="secondary"
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-400 text-black border-yellow-400 shadow-md hover:shadow-glow font-semibold"
            >
              <MessageSquare className="h-5 w-5 mr-2" />
              Ask Questions
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Timer */}
      {showTimer && (
        <section className="py-8 px-4 bg-accent/20">
          <div className="container mx-auto">
            <div className="max-w-md mx-auto">
              <TimerWidget 
                initialMinutes={180}
                onSessionChange={(status, elapsed) => {
                  console.log("Timer:", { status, elapsed });
                }}
              />
            </div>
          </div>
        </section>
      )}

      {/* Domains Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Explore Learning Domains</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose your area of study and access curated resources, practice materials, and expert guidance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {domains.map((domain, index) => (
              <div 
                key={domain.id} 
                className="animate-scale-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <DomainCard
                  title={domain.title}
                  description={domain.description}
                  icon={domain.icon}
                  stats={domain.stats}
                  onClick={() => handleDomainClick(domain)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Search Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5 border-t border-primary/20">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 text-foreground">AI-Powered Smart Search</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              Get instant answers from multiple sources including Wikipedia, DuckDuckGo, and our curated knowledge base. 
              Your learning companion with real-time information.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <SearchBar 
              onSearch={handleSearch} 
              className="mb-8 shadow-2xl" 
              topics={topics}
              placeholder="Ask anything about GATE, IT careers, SAP, programming, or study topics..."
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Why Choose Our Platform?</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center animate-slide-up">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">AI-Powered Q&A</h3>
              <p className="text-muted-foreground text-sm">Get instant answers with citations from reliable sources</p>
            </div>
            
            <div className="text-center animate-slide-up" style={{animationDelay: '0.1s'}}>
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Timer className="h-8 w-8 text-success" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Smart Timer</h3>
              <p className="text-muted-foreground text-sm">Track your study sessions with progress monitoring</p>
            </div>
            
            <div className="text-center animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="w-16 h-16 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-warning" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Free Resources</h3>
              <p className="text-muted-foreground text-sm">Access previous papers and study materials at no cost</p>
            </div>
            
            <div className="text-center animate-slide-up" style={{animationDelay: '0.3s'}}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Laptop className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Career-Focused</h3>
              <p className="text-muted-foreground text-sm">Tailored content for specific IT roles and skills</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}