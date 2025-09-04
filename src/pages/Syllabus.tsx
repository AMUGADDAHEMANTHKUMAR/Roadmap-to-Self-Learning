import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, BookOpen, Download, Clock, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { FloatingParticles } from "@/components/ui/floating-particles";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState, useMemo } from "react";
import { gateRealData } from "@/data/gateData";
import { aptitudeData } from "@/data/aptitudeData";
import { allLearningPaths } from "@/data/itRolesData";

// Transform data structure to match expected format
const syllabusData = {
  gate: {
    title: "GATE Preparation",
    description: "Complete GATE preparation syllabus for all engineering branches",
    branches: Object.entries(gateRealData.papers).map(([key, data]: [string, any]) => ({
      name: data.name,
      code: key,
      sections: [
        {
          title: "Syllabus Topics",
          topics: data.topics || []
        }
      ],
      "Core Concepts": data["Core Concepts"] || [],
      "Capacity Planning": data["Capacity Planning"] || "",
      "Free Resources": data["Free Resources"] || [],
      officialPdf: data.pdfUrl,
      description: data.description
    }))
  },
  "it-roles": {
    title: "IT Roles Learning Paths", 
    description: "Comprehensive learning paths for different IT career roles",
    branches: Object.entries(allLearningPaths).map(([key, data]: [string, any]) => ({
      name: data.name || key,
      code: key.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, ''),
      sections: data.beginner && data.intermediate && data.advanced ? [
        { title: "Beginner", topics: data.beginner || [] },
        { title: "Intermediate", topics: data.intermediate || [] },
        { title: "Advanced", topics: data.advanced || [] }
      ] : (data.Beginner && data.Intermediate && data.Advanced ? [
        { title: "Beginner", topics: data.Beginner || [] },
        { title: "Intermediate", topics: data.Intermediate || [] },
        { title: "Advanced", topics: data.Advanced || [] }
      ] : (data.sections ? Object.entries(data.sections).map(([title, section]: [string, any]) => ({
        title,
        topics: section.topics || []
      })) : [])),
      "Core Concepts": data.coreTopics || data["Core Concepts"] || [],
      "Capacity Planning": data.capacityPlanning || data["Capacity Planning"] || "",
      "Free Resources": data.freeResources || data["Free Resources"] || [],
      description: data.description || `Learning path for ${key}`,
      officialPdf: undefined
    }))
  },
  aptitude: {
    title: "Aptitude Preparation",
    description: "Complete aptitude preparation for GATE, IT placements, and competitive exams",
    branches: Object.entries(aptitudeData).map(([key, data]: [string, any]) => ({
      name: data.name,
      code: key,
      sections: data.sections ? Object.entries(data.sections).map(([title, section]: [string, any]) => ({
        title,
        topics: section.topics || []
      })) : [],
      "Core Concepts": data["Core Concepts"] || [],
      "Capacity Planning": data["Capacity Planning"] || "",
      "Free Resources": data["Free Resources"] || [],
      description: data.description,
      officialPdf: undefined
    }))
  }
};

export default function Syllabus() {
  const { domain } = useParams();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("all");
  
  const data = syllabusData[domain as keyof typeof syllabusData];
  
  // Filter branches based on search query and selected branch
  const filteredBranches = useMemo(() => {
    if (!data) return [];
    
    let filtered = data.branches;
    
    // Filter by selected branch
    if (selectedBranch !== "all") {
      filtered = filtered.filter(branch => branch.code === selectedBranch);
    }
    
    // Filter by search query
    if (searchQuery.trim()) {
      filtered = filtered.filter(branch => 
        branch.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        branch.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (branch.description && branch.description.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }
    
    return filtered;
  }, [data, searchQuery, selectedBranch]);
  
  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Domain not found</h1>
          <Button onClick={() => navigate("/")}>Go Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background relative">
      <FloatingParticles />
      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8 animate-fade-in">
          <Button variant="ghost" onClick={() => navigate("/")} className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </div>

        {/* Title Section */}
        <div className="text-center mb-12 animate-slide-up">
          <h1 className="text-4xl font-bold mb-4 text-foreground">{data.title}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {data.description}
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-center">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={selectedBranch} onValueChange={setSelectedBranch}>
            <SelectTrigger className="w-full md:w-[200px]">
              <SelectValue placeholder="Select course" />
            </SelectTrigger>
            <SelectContent className="bg-background border-border shadow-lg z-50 max-h-80 overflow-y-auto">
              <SelectItem value="all">All Courses</SelectItem>
              {data.branches.map((branch) => (
                <SelectItem key={branch.code} value={branch.code}>
                  {branch.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Branches/Categories */}
        <div className="space-y-8">
          {filteredBranches.length === 0 ? (
            <Card className="text-center py-12">
              <CardContent>
                <h3 className="text-lg font-semibold mb-2">No courses found</h3>
                <p className="text-muted-foreground">Try adjusting your search or filter criteria.</p>
              </CardContent>
            </Card>
          ) : (
            filteredBranches.map((branch, branchIndex) => (
            <Card key={branch.code} className="animate-scale-in hover-lift yellow-glow" style={{animationDelay: `${branchIndex * 0.1}s`}}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl text-primary flex items-center gap-3">
                      <BookOpen className="h-6 w-6" />
                      {branch.name}
                      <Badge variant="secondary">{branch.code}</Badge>
                    </CardTitle>
                    {branch.description && (
                      <p className="text-muted-foreground mt-2">{branch.description}</p>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    {branch.officialPdf && (
                      <Button 
                        asChild
                        className="bg-gradient-primary hover:scale-105 transform transition-all duration-200"
                      >
                        <a href={branch.officialPdf} target="_blank" rel="noopener noreferrer">
                          <Download className="h-4 w-4 mr-2" />
                          Official PDF
                        </a>
                      </Button>
                    )}
                    
                    {/* Hide Start Practice button for gate, it-roles, and aptitude domains */}
                    {domain !== 'gate' && domain !== 'it-roles' && domain !== 'aptitude' && (
                      <Button 
                        variant="outline"
                        onClick={() => navigate(`/exam?branch=${branch.code}`)}
                        className="gap-2"
                      >
                        <Clock className="h-4 w-4" />
                        Start Practice
                      </Button>
                    )}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Core Concepts & Capacity Planning */}
                {branch["Core Concepts"] && branch["Core Concepts"].length > 0 && (
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-secondary mb-2">Core Concepts</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {branch["Core Concepts"].map((concept, idx) => (
                          <li key={idx}>• {concept}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary mb-2">Capacity Planning</h4>
                      <p className="text-sm text-muted-foreground">{branch["Capacity Planning"]}</p>
                    </div>
                  </div>
                )}

                {/* Sections */}
                <div className="grid gap-6">
                  {branch.sections && branch.sections.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="space-y-3">
                      <h3 className="text-lg font-semibold text-foreground">{section.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        {section.topics && section.topics.map((topic, topicIndex) => (
                          <Badge 
                            key={topicIndex} 
                            variant="outline" 
                            className="cursor-pointer hover:bg-primary/10 transition-colors"
                            onClick={() => console.log("Navigate to topic:", topic)}
                          >
                            {topic}
                          </Badge>
                        ))}
                      </div>
                      {sectionIndex < branch.sections.length - 1 && <Separator />}
                    </div>
                  ))}
                </div>

                {/* Free Resources */}
                {branch["Free Resources"] && branch["Free Resources"].length > 0 && (
                  <div className="pt-4 border-t">
                    <h3 className="text-lg font-semibold mb-3 text-foreground">Free Resources</h3>
                    <div className="grid gap-2">
                      {branch["Free Resources"].map((resource, index) => {
                        // Handle both string and object formats
                        if (typeof resource === 'string') {
                          return (
                            <div 
                              key={index} 
                              className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer p-2 rounded hover:bg-accent/20"
                              onClick={() => {
                                // Extract URL if present and open it
                                const urlMatch = resource.match(/https?:\/\/[^\s]+/);
                                if (urlMatch) {
                                  window.open(urlMatch[0], '_blank');
                                }
                              }}
                            >
                              • {resource}
                            </div>
                          );
                        } else if (resource && typeof resource === 'object' && resource.title) {
                          return (
                            <div 
                              key={index} 
                              className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer p-3 rounded border hover:bg-accent/20"
                              onClick={() => {
                                if (resource.url) {
                                  window.open(resource.url, '_blank');
                                }
                              }}
                            >
                              <div className="font-medium text-foreground">{resource.title}</div>
                              {resource.description && (
                                <div className="text-xs text-muted-foreground mt-1">{resource.description}</div>
                              )}
                              {resource.url && (
                                <div className="text-xs text-primary mt-1">{resource.url}</div>
                              )}
                            </div>
                          );
                        }
                        return null;
                      })}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
            ))
          )}
        </div>

        {/* Quick Actions - Hide Practice Session for gate, it-roles, and aptitude */}
        <div className="mt-12 text-center animate-fade-in">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Quick Actions</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              onClick={() => navigate("/pyq")}
              size="lg"
              className="bg-gradient-success"
            >
              <BookOpen className="h-5 w-5 mr-2" />
              Browse Previous Papers
            </Button>
            <Button 
              onClick={() => navigate("/qa")}
              variant="outline"
              size="lg"
            >
              Ask Questions
            </Button>
            {/* Hide Practice Session button for gate, it-roles, and aptitude domains */}
            {domain !== 'gate' && domain !== 'it-roles' && domain !== 'aptitude' && (
              <Button 
                onClick={() => navigate("/exam")}
                variant="outline"
                size="lg"
              >
                <Clock className="h-5 w-5 mr-2" />
                Practice Session
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}