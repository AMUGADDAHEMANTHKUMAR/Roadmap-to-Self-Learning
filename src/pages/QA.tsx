import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ArrowLeft, Send, Bot, User, ExternalLink, Loader2, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TypingText } from "@/components/ui/typing-text";
import { FloatingParticles } from "@/components/ui/floating-particles";
import { performSearch, SearchResult } from "@/services/searchAPI";

interface ChatMessage {
  id: string;
  type: 'user' | 'bot';
  content: string;
  results?: SearchResult[];
  timestamp: Date;
}

export default function QA() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [currentQuery, setCurrentQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchSource, setSearchSource] = useState("all");

  // Handle URL search parameters
  useEffect(() => {
    const query = searchParams.get('q');
    const source = searchParams.get('source');
    if (query) {
      setCurrentQuery(query);
      setSearchSource(source || 'all');
      handleSubmit(query, source || 'all');
    }
  }, [searchParams]);

  const handleSubmit = async (query?: string, source?: string) => {
    const searchQuery = query || currentQuery;
    const selectedSource = source || searchSource;
    if (!searchQuery.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: searchQuery,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setCurrentQuery("");
    setIsLoading(true);

    try {
      const results = await performSearch(searchQuery, selectedSource);
      
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: results.length > 0 
          ? `I found ${results.length} result(s) related to "${searchQuery}" from ${selectedSource === 'all' ? 'multiple sources' : selectedSource}:`
          : `I couldn't find specific information about "${searchQuery}". Try rephrasing your question or search for related topics.`,
        results,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: "I'm sorry, I encountered an error while searching for information. Please try again.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background relative">
      <FloatingParticles />
      <div className="container mx-auto px-4 py-8 max-w-4xl relative z-10">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8 animate-fade-in">
          <Button variant="ghost" onClick={() => navigate("/")} className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </div>

        {/* Title */}
        <div className="text-center mb-8 animate-slide-up">
          <h1 className="text-4xl font-bold mb-4 text-foreground yellow-glow">
            <TypingText text="AI-Powered Smart Search" speed={100} />
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Search across Wikipedia, DuckDuckGo, and our knowledge base for instant answers.
          </p>
        </div>

        {/* Chat Interface */}
        <div className="space-y-4 mb-8 max-h-96 overflow-y-auto">
          {messages.map((message) => (
            <div key={message.id} className={`flex gap-3 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex gap-3 max-w-3xl ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  message.type === 'user' ? 'bg-primary' : 'bg-yellow-500'
                }`}>
                  {message.type === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4 text-black" />}
                </div>
                
                <Card className={`${message.type === 'user' ? 'bg-primary text-primary-foreground' : 'bg-card'}`}>
                  <CardContent className="p-4">
                    <TypingText text={message.content} speed={message.type === 'bot' ? 30 : 0} />
                    
                    {message.results && message.results.length > 0 && (
                      <div className="mt-4 space-y-2">
                        {message.results.map((result, index) => (
                          <div key={index} className="border-l-2 border-yellow-500 pl-3">
                            <div className="flex items-start justify-between">
                              <div>
                                <h4 className="font-medium">{result.title}</h4>
                                <p className="text-sm text-muted-foreground mb-1">Source: {result.source}</p>
                                <p className="text-sm">{result.snippet}</p>
                              </div>
                              {result.url && (
                                <Button asChild variant="ghost" size="sm">
                                  <a href={result.url} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="h-4 w-4" />
                                  </a>
                                </Button>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* Search Input */}
        <Card className="sticky bottom-4">
          <CardContent className="p-4">
            <div className="flex gap-2 mb-3">
              <Select value={searchSource} onValueChange={setSearchSource}>
                <SelectTrigger className="w-48 bg-card border-border">
                  <Search className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Sources</SelectItem>
                  <SelectItem value="wikipedia">Wikipedia</SelectItem>
                  <SelectItem value="duckduckgo">DuckDuckGo</SelectItem>
                  <SelectItem value="knowledge-base">Knowledge Base</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex gap-2">
              <Input
                value={currentQuery}
                onChange={(e) => setCurrentQuery(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSubmit()}
                placeholder="Ask any question about GATE, IT careers, or study topics..."
                className="flex-1 bg-card border-border focus:border-primary"
              />
              <Button 
                onClick={() => handleSubmit()}
                disabled={isLoading || !currentQuery.trim()}
                className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold"
              >
                {isLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}