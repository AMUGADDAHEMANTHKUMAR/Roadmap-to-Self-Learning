import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ArrowLeft, Play, Settings, BookOpen, Target, Clock, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TimerWidget } from "@/components/ui/timer-widget";
import { Badge } from "@/components/ui/badge";
import { FloatingParticles } from "@/components/ui/floating-particles";

const examTypes = [
  { value: "gate-cs", label: "GATE CS", duration: 180 },
  { value: "gate-ec", label: "GATE EC", duration: 180 },
  { value: "aptitude", label: "Aptitude Test", duration: 120 },
  { value: "pega", label: "Pega Practice", duration: 90 },
  { value: "custom", label: "Custom Session", duration: 60 }
];

export default function ExamSession() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [sessionStarted, setSessionStarted] = useState(false);
  const [examType, setExamType] = useState(searchParams.get("branch") || "gate-cs");
  const [customDuration, setCustomDuration] = useState(60);
  const [sessionData, setSessionData] = useState({
    status: "idle" as "idle" | "running" | "paused" | "ended",
    startTime: null as Date | null,
    timeElapsed: 0
  });

  const selectedExam = examTypes.find(e => e.value === examType) || examTypes[0];
  const duration = examType === "custom" ? customDuration : selectedExam.duration;

  useEffect(() => {
    // Check for existing session in localStorage
    const savedSession = localStorage.getItem("examSession");
    if (savedSession) {
      const parsed = JSON.parse(savedSession);
      setSessionData(parsed);
      if (parsed.status === "running" || parsed.status === "paused") {
        setSessionStarted(true);
      }
    }
  }, []);

  const handleStartSession = () => {
    setSessionStarted(true);
    const newSession = {
      ...sessionData,
      startTime: new Date(),
      examType,
      duration
    };
    setSessionData(newSession);
    localStorage.setItem("examSession", JSON.stringify(newSession));
  };

  const handleSessionChange = (status: "idle" | "running" | "paused" | "ended", timeElapsed: number) => {
    const updatedSession = { ...sessionData, status, timeElapsed };
    setSessionData(updatedSession);
    localStorage.setItem("examSession", JSON.stringify(updatedSession));
    
    if (status === "ended") {
      // TODO: Save session to backend/history
      console.log("Session ended:", updatedSession);
    }
  };

  const handleResetSession = () => {
    setSessionStarted(false);
    setSessionData({
      status: "idle",
      startTime: null,
      timeElapsed: 0
    });
    localStorage.removeItem("examSession");
  };

  if (sessionStarted) {
    return (
      <div className="min-h-screen bg-background relative">
        <FloatingParticles />
        <div className="container mx-auto px-4 py-8 max-w-4xl relative z-10">
          {/* Header */}
          <div className="flex items-center justify-between mb-8 animate-fade-in">
            <div className="flex items-center gap-4">
              <Button variant="ghost" onClick={() => navigate("/")} className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Exit Session
              </Button>
            </div>
            
            <div className="flex items-center gap-2">
              <Badge variant="outline">{selectedExam.label}</Badge>
              <Badge variant={sessionData.status === "running" ? "default" : "secondary"}>
                {sessionData.status.charAt(0).toUpperCase() + sessionData.status.slice(1)}
              </Badge>
            </div>
          </div>

          {/* Session Layout */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Timer */}
            <div className="lg:col-span-1">
              <TimerWidget
                initialMinutes={duration}
                autoStart={true}
                onSessionChange={handleSessionChange}
                onTimeEnd={() => {
                  console.log("Exam time ended!");
                  // TODO: Auto-submit or show completion modal
                }}
              />
              
              <div className="mt-6 space-y-4 animate-fade-in">
                <Button 
                  onClick={handleResetSession}
                  variant="outline"
                  className="w-full"
                >
                  End Session
                </Button>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm">Session Info</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <div className="flex justify-between">
                      <span>Type:</span>
                      <span>{selectedExam.label}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Duration:</span>
                      <span>{duration} minutes</span>
                    </div>
                    {sessionData.startTime && (
                      <div className="flex justify-between">
                        <span>Started:</span>
                        <span>{new Date(sessionData.startTime).toLocaleTimeString()}</span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="lg:col-span-2">
              <Card className="h-full animate-scale-in">
                <CardHeader>
                  <CardTitle>Practice Session</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center py-12">
                    <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-4">Session in Progress</h3>
                    <p className="text-muted-foreground mb-6">
                      This is your practice session for {selectedExam.label}. In a real implementation, 
                      this area would contain:
                    </p>
                    
                    <div className="text-left max-w-md mx-auto space-y-2 text-sm text-muted-foreground">
                      <div>• Question navigation panel</div>
                      <div>• Current question display</div>
                      <div>• Answer options (for MCQs)</div>
                      <div>• Answer input area (for descriptive)</div>
                      <div>• Mark for review functionality</div>
                      <div>• Question palette</div>
                      <div>• Submit confirmation dialog</div>
                    </div>
                    
                    <div className="mt-8 flex gap-4 justify-center">
                      <Button variant="outline">Previous Question</Button>
                      <Button>Next Question</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background relative">
      <FloatingParticles />
      <div className="container mx-auto px-4 py-8 max-w-2xl relative z-10">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8 animate-fade-in">
          <Button variant="ghost" onClick={() => navigate("/")} className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </div>

        {/* Title */}
        <div className="text-center mb-8 animate-slide-up">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Practice Session</h1>
          <p className="text-lg text-muted-foreground">
            Set up your practice session with timer and tracking.
          </p>
        </div>

        {/* Session Setup */}
        <Card className="animate-scale-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Session Configuration
            </CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Exam Type Selection */}
            <div className="space-y-2">
              <Label htmlFor="exam-type">Exam Type</Label>
              <Select value={examType} onValueChange={setExamType}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {examTypes.map(exam => (
                    <SelectItem key={exam.value} value={exam.value}>
                      {exam.label} ({exam.duration} min)
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Custom Duration */}
            {examType === "custom" && (
              <div className="space-y-2 animate-fade-in">
                <Label htmlFor="duration">Duration (minutes)</Label>
                <Input
                  id="duration"
                  type="number"
                  min="1"
                  max="300"
                  value={customDuration}
                  onChange={(e) => setCustomDuration(parseInt(e.target.value) || 60)}
                />
              </div>
            )}

            {/* Session Info */}
            <div className="p-4 bg-accent/50 rounded-lg space-y-2">
              <h3 className="font-semibold text-foreground">Session Details</h3>
              <div className="text-sm text-muted-foreground space-y-1">
                <div>• Duration: {duration} minutes</div>
                <div>• Auto-save: Session progress will be saved locally</div>
                <div>• Timer: Countdown with pause/resume functionality</div>
                <div>• Tracking: Session history and analytics</div>
              </div>
            </div>

            {/* Start Button */}
            <Button 
              onClick={handleStartSession}
              size="lg"
              className="w-full bg-gradient-primary"
            >
              <Play className="h-5 w-5 mr-2" />
              Start Practice Session
            </Button>
          </CardContent>
        </Card>

        {/* Quick Links */}
        <div className="mt-8 text-center animate-fade-in">
          <h2 className="text-xl font-bold mb-4 text-foreground">Need Study Material?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              onClick={() => navigate("/syllabus/gate")}
              variant="outline"
            >
              Browse Syllabus
            </Button>
            <Button 
              onClick={() => navigate("/pyq")}
              variant="outline"
            >
              Previous Papers
            </Button>
            <Button 
              onClick={() => navigate("/qa")}
              variant="outline"
            >
              Ask Questions
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}