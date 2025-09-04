import { useState, useEffect } from "react";
import { Play, Pause, Square, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface TimerWidgetProps {
  initialMinutes?: number;
  autoStart?: boolean;
  onTimeEnd?: () => void;
  onSessionChange?: (status: "idle" | "running" | "paused" | "ended", timeElapsed: number) => void;
  className?: string;
}

export function TimerWidget({ 
  initialMinutes = 180, 
  autoStart = false, 
  onTimeEnd, 
  onSessionChange,
  className 
}: TimerWidgetProps) {
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60);
  const [status, setStatus] = useState<"idle" | "running" | "paused" | "ended">("idle");
  const [startTime, setStartTime] = useState<Date | null>(null);

  const totalTime = initialMinutes * 60;
  const timeElapsed = totalTime - timeLeft;
  const progressPercentage = (timeElapsed / totalTime) * 100;

  useEffect(() => {
    if (autoStart && status === "idle") {
      handleStart();
    }
  }, [autoStart]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (status === "running" && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          const newTime = prev - 1;
          if (newTime <= 0) {
            setStatus("ended");
            onTimeEnd?.();
            return 0;
          }
          return newTime;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [status, timeLeft, onTimeEnd]);

  useEffect(() => {
    onSessionChange?.(status, timeElapsed);
  }, [status, timeElapsed, onSessionChange]);

  const handleStart = () => {
    setStatus("running");
    if (!startTime) {
      setStartTime(new Date());
    }
  };

  const handlePause = () => {
    setStatus("paused");
  };

  const handleReset = () => {
    setStatus("idle");
    setTimeLeft(totalTime);
    setStartTime(null);
  };

  const handleEnd = () => {
    setStatus("ended");
  };

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getStatusColor = () => {
    switch (status) {
      case "running": return "text-success";
      case "paused": return "text-warning";
      case "ended": return "text-destructive";
      default: return "text-muted-foreground";
    }
  };

  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (progressPercentage / 100) * circumference;

  return (
    <Card className={cn("animate-scale-in", className)}>
      <CardHeader className="pb-4">
        <CardTitle className="text-center">Exam Timer</CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Progress Ring */}
        <div className="relative flex items-center justify-center">
          <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
            {/* Background circle */}
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="hsl(var(--muted))"
              strokeWidth="8"
              fill="none"
            />
            {/* Progress circle */}
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke={status === "running" ? "hsl(var(--success))" : 
                     status === "paused" ? "hsl(var(--warning))" : 
                     status === "ended" ? "hsl(var(--destructive))" : "hsl(var(--primary))"}
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              className="transition-all duration-300 ease-out"
            />
          </svg>
          
          {/* Time display */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className={cn("text-2xl font-mono font-bold", getStatusColor())}>
              {formatTime(timeLeft)}
            </div>
            <div className="text-xs text-muted-foreground capitalize">
              {status}
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-2">
          {status === "idle" && (
            <Button onClick={handleStart} className="bg-gradient-success">
              <Play className="h-4 w-4 mr-2" />
              Start
            </Button>
          )}
          
          {status === "running" && (
            <Button onClick={handlePause} variant="outline" className="border-warning text-warning">
              <Pause className="h-4 w-4 mr-2" />
              Pause
            </Button>
          )}
          
          {status === "paused" && (
            <Button onClick={handleStart} className="bg-gradient-success">
              <Play className="h-4 w-4 mr-2" />
              Resume
            </Button>
          )}
          
          {(status === "running" || status === "paused") && (
            <Button onClick={handleEnd} variant="destructive">
              <Square className="h-4 w-4 mr-2" />
              End
            </Button>
          )}
          
          <Button onClick={handleReset} variant="outline">
            <RotateCcw className="h-4 w-4 mr-2" />
            Reset
          </Button>
        </div>

        {/* Stats */}
        {startTime && (
          <div className="text-center text-sm text-muted-foreground">
            Started at {startTime.toLocaleTimeString()}
          </div>
        )}
      </CardContent>
    </Card>
  );
}