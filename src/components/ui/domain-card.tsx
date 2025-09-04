import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface DomainCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  stats?: {
    topics?: number;
    papers?: number;
    resources?: number;
  };
  onClick?: () => void;
  className?: string;
}

export function DomainCard({ title, description, icon, stats, onClick, className }: DomainCardProps) {
  return (
    <Card className={cn(
      "group cursor-pointer hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 bg-gradient-card border border-border/50",
      className
    )} onClick={onClick}>
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
              {icon}
            </div>
            <div>
              <CardTitle className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors">
                {title}
              </CardTitle>
            </div>
          </div>
          <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
        
        {stats && (
          <div className="flex gap-4 pt-2">
            {stats.topics && (
              <div className="text-center">
                <div className="text-lg font-semibold text-primary">{stats.topics}</div>
                <div className="text-xs text-muted-foreground">Topics</div>
              </div>
            )}
            {stats.papers && (
              <div className="text-center">
                <div className="text-lg font-semibold text-success">{stats.papers}</div>
                <div className="text-xs text-muted-foreground">Papers</div>
              </div>
            )}
            {stats.resources && (
              <div className="text-center">
                <div className="text-lg font-semibold text-warning">{stats.resources}</div>
                <div className="text-xs text-muted-foreground">Resources</div>
              </div>
            )}
          </div>
        )}
        
        <Button 
          variant="ghost" 
          className="w-full justify-center group-hover:bg-primary/5 transition-colors"
        >
          Explore {title}
        </Button>
      </CardContent>
    </Card>
  );
}