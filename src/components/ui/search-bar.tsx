import { useState } from "react";
import { Search, Filter, History } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string, domain?: string) => void;
  showDomainFilter?: boolean;
  className?: string;
  topics?: { category: string; items: string[]; }[];
}

const domains = [
  { value: "all", label: "All Sources" },
  { value: "wikipedia", label: "Wikipedia" },
  { value: "duckduckgo", label: "DuckDuckGo" },
  { value: "knowledge-base", label: "Knowledge Base" },
];

export function SearchBar({ 
  placeholder = "Search topics, papers, or questions...", 
  onSearch, 
  showDomainFilter = true,
  className,
  topics 
}: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [domain, setDomain] = useState("all");
  const [searchHistory, setSearchHistory] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('search_history');
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  const handleSearch = () => {
    if (query.trim()) {
      // Add to search history
      const newHistory = [query, ...searchHistory.filter(h => h !== query)].slice(0, 10);
      setSearchHistory(newHistory);
      if (typeof window !== 'undefined') {
        localStorage.setItem('search_history', JSON.stringify(newHistory));
      }
      onSearch?.(query, domain !== "all" ? domain : undefined);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className={cn(
      "flex flex-col sm:flex-row gap-4 w-full max-w-4xl mx-auto animate-fade-in",
      className
    )}>
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          className="pl-10 h-12 bg-card border-border shadow-md focus:shadow-glow transition-all duration-300"
        />
      </div>
      
      {showDomainFilter && (
        <Select value={domain} onValueChange={setDomain}>
          <SelectTrigger className="w-full sm:w-48 h-12 bg-card border-border shadow-md">
            <Filter className="h-4 w-4 mr-2" />
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {domains.map((d) => (
              <SelectItem key={d.value} value={d.value}>
                {d.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
      
      <Button 
        onClick={handleSearch}
        className="h-12 px-8 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold hover:scale-105 transform transition-all duration-200 shadow-md hover:shadow-glow"
      >
        Search
      </Button>
      
      {searchHistory.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
          <div className="p-2 border-b border-border">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <History className="h-4 w-4" />
                Search History
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setSearchHistory([]);
                  if (typeof window !== 'undefined') {
                    localStorage.removeItem('search_history');
                  }
                }}
                className="text-xs text-muted-foreground hover:text-destructive h-6 px-2"
              >
                Clear All
              </Button>
            </div>
          </div>
          {searchHistory.map((item, index) => (
            <div key={index} className="flex items-center group">
              <button
                onClick={() => {
                  setQuery(item);
                  handleSearch();
                }}
                className="flex-1 text-left px-3 py-2 hover:bg-accent/50 transition-colors text-sm"
              >
                {item}
              </button>
              <Button
                variant="ghost"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  const newHistory = searchHistory.filter((_, i) => i !== index);
                  setSearchHistory(newHistory);
                  if (typeof window !== 'undefined') {
                    localStorage.setItem('search_history', JSON.stringify(newHistory));
                  }
                }}
                className="opacity-0 group-hover:opacity-100 text-xs p-1 h-6 w-6 text-muted-foreground hover:text-destructive mr-2"
              >
                ×
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}