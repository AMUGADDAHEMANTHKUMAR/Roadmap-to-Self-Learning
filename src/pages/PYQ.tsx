import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Download, FileText, Calendar, Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { FloatingParticles } from "@/components/ui/floating-particles";
import { realPYQData } from "@/data/gateData";

// Use real GATE PYQ data from our data file
const papersData = realPYQData;

const years = Array.from(new Set(papersData.map(p => p.year))).sort((a, b) => b - a);
const branches = Array.from(new Set(papersData.map(p => p.branch)));
const domains = Array.from(new Set(papersData.map(p => p.domain)));

export default function PYQ() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState<string>("all");
  const [selectedBranch, setSelectedBranch] = useState<string>("all");
  const [selectedDomain, setSelectedDomain] = useState<string>("all");

  const filteredPapers = papersData.filter(paper => {
    const matchesSearch = paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.branch.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesYear = selectedYear === "all" || paper.year.toString() === selectedYear;
    const matchesBranch = selectedBranch === "all" || paper.branch === selectedBranch;
    const matchesDomain = selectedDomain === "all" || paper.domain === selectedDomain;
    
    return matchesSearch && matchesYear && matchesBranch && matchesDomain;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case "high": return "destructive";
      case "medium": return "outline";
      case "low": return "secondary";
      default: return "secondary";
    }
  };

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

        {/* Title */}
        <div className="text-center mb-8 animate-slide-up">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Previous Year Papers</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Access previous year question papers and answer keys for GATE, IT roles, and Aptitude preparation.
          </p>
        </div>

        {/* Filters */}
        <Card className="mb-8 animate-scale-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Filter Papers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search papers, branches..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              {/* Domain Filter */}
              <Select value={selectedDomain} onValueChange={setSelectedDomain}>
                <SelectTrigger className="w-full lg:w-48">
                  <SelectValue placeholder="Domain" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Domains</SelectItem>
                  {domains.map(domain => (
                    <SelectItem key={domain} value={domain}>{domain}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Branch Filter */}
              <Select value={selectedBranch} onValueChange={setSelectedBranch}>
                <SelectTrigger className="w-full lg:w-48">
                  <SelectValue placeholder="Branch" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Branches</SelectItem>
                  {branches.map(branch => (
                    <SelectItem key={branch} value={branch}>{branch}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Year Filter */}
              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger className="w-full lg:w-32">
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Years</SelectItem>
                  {years.map(year => (
                    <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Results Count */}
        <div className="mb-6 animate-fade-in">
          <p className="text-muted-foreground">
            Found {filteredPapers.length} paper{filteredPapers.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Papers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPapers.map((paper, index) => (
            <Card 
              key={paper.id} 
              className="animate-scale-in hover-lift yellow-glow"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg text-primary mb-2">{paper.title}</CardTitle>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <Badge variant="outline">{paper.domain}</Badge>
                      <Badge variant={getDifficultyColor(paper.difficulty)}>{paper.difficulty}</Badge>
                    </div>
                  </div>
                  <div className="text-right text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {paper.year}
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-foreground">{paper.branch}</p>
                  <p className="text-xs text-muted-foreground">Source: {paper.source}</p>
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    asChild
                    size="sm" 
                    className="flex-1 bg-gradient-primary"
                  >
                    <a href={paper.paperUrl} target="_blank" rel="noopener noreferrer">
                      <FileText className="h-4 w-4 mr-2" />
                      Open Paper
                    </a>
                  </Button>
                  
                  {paper.answerKeyUrl && (
                    <Button 
                      asChild
                      variant="outline" 
                      size="sm"
                      className="flex-1"
                    >
                      <a href={paper.answerKeyUrl} target="_blank" rel="noopener noreferrer">
                        <Download className="h-4 w-4 mr-2" />
                        Answer Key
                      </a>
                    </Button>
                  )}
                </div>
                
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="w-full"
                  onClick={() => navigate(`/exam?paper=${paper.id}`)}
                >
                  Practice with Timer
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredPapers.length === 0 && (
          <div className="text-center py-12 animate-fade-in">
            <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No papers found</h3>
            <p className="text-muted-foreground mb-4">Try adjusting your search filters</p>
            <Button 
              onClick={() => {
                setSearchQuery("");
                setSelectedYear("all");
                setSelectedBranch("all");
                setSelectedDomain("all");
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* Quick Actions */}
        <div className="mt-12 text-center animate-fade-in">
          <h2 className="text-2xl font-bold mb-6 text-foreground">More Resources</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              onClick={() => navigate("/syllabus/gate")}
              variant="outline"
              size="lg"
            >
              Browse Syllabus
            </Button>
            <Button 
              onClick={() => navigate("/qa")}
              variant="outline"
              size="lg"
            >
              Ask Questions
            </Button>
            <Button 
              onClick={() => navigate("/exam")}
              size="lg"
              className="bg-gradient-success"
            >
              Start Practice Session
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}