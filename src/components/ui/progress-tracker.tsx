import { useState, useEffect } from "react";
import { Trophy, Calendar, Clock, Target, Star, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface StudySession {
  date: string;
  duration: number; // in minutes
  topics: string[];
  domain: string;
}

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  unlocked: boolean;
  unlockedAt?: string;
}

export function ProgressTracker() {
  const [studySessions, setStudySessions] = useState<StudySession[]>([]);
  const [studyStreak, setStudyStreak] = useState(0);
  const [totalStudyTime, setTotalStudyTime] = useState(0);
  const [achievements, setAchievements] = useState<Achievement[]>([]);

  useEffect(() => {
    // Load data from localStorage
    const sessions = JSON.parse(localStorage.getItem('study-sessions') || '[]');
    const streak = parseInt(localStorage.getItem('study-streak') || '0');
    const totalTime = parseInt(localStorage.getItem('total-study-time') || '0');
    
    setStudySessions(sessions);
    setStudyStreak(streak);
    setTotalStudyTime(totalTime);
    
    // Initialize achievements
    initializeAchievements();
  }, []);

  const initializeAchievements = () => {
    const achievementsList: Achievement[] = [
      {
        id: 'first-session',
        title: 'Getting Started',
        description: 'Complete your first study session',
        icon: <Star className="h-4 w-4" />,
        unlocked: studySessions.length > 0
      },
      {
        id: 'week-streak',
        title: 'Week Warrior',
        description: 'Maintain a 7-day study streak',
        icon: <Trophy className="h-4 w-4" />,
        unlocked: studyStreak >= 7
      },
      {
        id: 'time-master',
        title: 'Time Master',
        description: 'Study for 10 hours total',
        icon: <Clock className="h-4 w-4" />,
        unlocked: totalStudyTime >= 600
      },
      {
        id: 'consistent-learner',
        title: 'Consistent Learner',
        description: 'Study for 30 days',
        icon: <Target className="h-4 w-4" />,
        unlocked: studyStreak >= 30
      }
    ];
    
    setAchievements(achievementsList);
  };

  const addStudySession = (domain: string, topics: string[], duration: number) => {
    const newSession: StudySession = {
      date: new Date().toISOString().split('T')[0],
      duration,
      topics,
      domain
    };
    
    const updatedSessions = [...studySessions, newSession];
    setStudySessions(updatedSessions);
    setTotalStudyTime(prev => prev + duration);
    
    // Update streak
    const today = new Date().toISOString().split('T')[0];
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    const hasStudiedToday = updatedSessions.some(s => s.date === today);
    const hasStudiedYesterday = updatedSessions.some(s => s.date === yesterday);
    
    if (hasStudiedToday && hasStudiedYesterday) {
      setStudyStreak(prev => prev + 1);
    } else if (hasStudiedToday) {
      setStudyStreak(1);
    }
    
    // Save to localStorage
    localStorage.setItem('study-sessions', JSON.stringify(updatedSessions));
    localStorage.setItem('total-study-time', (totalStudyTime + duration).toString());
    localStorage.setItem('study-streak', studyStreak.toString());
  };

  const getCalendarHeatmap = () => {
    const today = new Date();
    const days = [];
    const weeks = [];
    
    // Generate last 365 days
    for (let i = 364; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const dateStr = date.toISOString().split('T')[0];
      
      const sessionsOnDate = studySessions.filter(s => s.date === dateStr);
      const totalMinutes = sessionsOnDate.reduce((sum, s) => sum + s.duration, 0);
      
      let intensity = 0;
      if (totalMinutes > 0) intensity = 1;
      if (totalMinutes > 30) intensity = 2;
      if (totalMinutes > 90) intensity = 3;
      if (totalMinutes > 150) intensity = 4;
      
      const dayOfWeek = date.getDay();
      const weekIndex = Math.floor(i / 7);
      
      days.push({
        date: dateStr,
        intensity,
        sessions: sessionsOnDate.length,
        totalMinutes,
        dayOfWeek,
        weekIndex: 52 - weekIndex
      });
    }
    
    // Group days into weeks for GitHub-style layout
    for (let week = 0; week < 53; week++) {
      const weekDays = days.filter(d => d.weekIndex === week);
      if (weekDays.length > 0) {
        weeks.push(weekDays);
      }
    }
    
    return { days, weeks };
  };

  const getDomainProgress = () => {
    const domains = [
      { key: 'gate', name: 'GATE Engineering', target: 1200 },
      { key: 'it-roles', name: 'IT Roles & Technology', target: 900 },
      { key: 'aptitude', name: 'Aptitude & Reasoning', target: 600 },
      { key: 'sap', name: 'SAP Modules', target: 800 }
    ];
    
    return domains.map(domain => {
      const domainSessions = studySessions.filter(s => 
        s.domain === domain.key || 
        (domain.key === 'sap' && s.domain.startsWith('sap-'))
      );
      const totalTime = domainSessions.reduce((sum, s) => sum + s.duration, 0);
      const uniqueTopics = new Set(domainSessions.flatMap(s => s.topics)).size;
      
      return {
        domain: domain.name,
        time: totalTime,
        topics: uniqueTopics,
        sessions: domainSessions.length,
        progress: Math.min((totalTime / domain.target) * 100, 100)
      };
    });
  };

  const { days: heatmapDays, weeks: heatmapWeeks } = getCalendarHeatmap();
  const domainProgress = getDomainProgress();
  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
  };

  // Add a study session (for testing/demo purposes)
  const handleAddDemoSession = () => {
    const domains = ['gate', 'it-roles', 'aptitude', 'sap-fi', 'sap-abap'];
    const topics = ['Data Structures', 'Algorithms', 'System Design', 'OOPS Concepts'];
    const randomDomain = domains[Math.floor(Math.random() * domains.length)];
    const randomTopics = [topics[Math.floor(Math.random() * topics.length)]];
    const randomDuration = Math.floor(Math.random() * 120) + 30; // 30-150 minutes
    
    addStudySession(randomDomain, randomTopics, randomDuration);
  };

  const dayLabels = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return (
    <div className="space-y-6">
      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Study Streak</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{studyStreak}</div>
            <p className="text-xs text-muted-foreground">days in a row</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Study Time</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">{formatTime(totalStudyTime)}</div>
            <p className="text-xs text-muted-foreground">across all sessions</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sessions</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">{studySessions.length}</div>
            <p className="text-xs text-muted-foreground">total sessions</p>
          </CardContent>
        </Card>
      </div>

      {/* GitHub-style Calendar Heatmap */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-lg">Study Activity</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              {studySessions.length} study sessions in the last year
            </p>
          </div>
          <Button 
            onClick={handleAddDemoSession}
            variant="outline" 
            size="sm"
            className="text-xs"
          >
            Add Demo Session
          </Button>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-2">
            {/* Month labels */}
            <div className="flex justify-between text-xs text-muted-foreground mb-2">
              {monthLabels.map((month, i) => (
                <span key={i} className="text-center" style={{ width: '40px' }}>
                  {month}
                </span>
              ))}
            </div>
            
            {/* Day labels and heatmap grid */}
            <div className="flex gap-1">
              {/* Day of week labels */}
              <div className="flex flex-col gap-1 mr-2">
                {dayLabels.map((day, i) => (
                  <div key={i} className="h-3 w-4 text-xs text-muted-foreground flex items-center">
                    {i % 2 === 1 ? day : ''}
                  </div>
                ))}
              </div>
              
              {/* Heatmap grid */}
              <div className="flex gap-1 overflow-x-auto">
                {heatmapWeeks.map((week, weekIndex) => (
                  <div key={weekIndex} className="flex flex-col gap-1">
                    {[0, 1, 2, 3, 4, 5, 6].map(dayOfWeek => {
                      const day = week.find(d => d.dayOfWeek === dayOfWeek);
                      return (
                        <div
                          key={dayOfWeek}
                          className={`w-3 h-3 rounded-sm transition-colors cursor-pointer ${
                            !day || day.intensity === 0 ? 'bg-muted hover:bg-muted-foreground/20' :
                            day.intensity === 1 ? 'bg-primary/30 hover:bg-primary/40' :
                            day.intensity === 2 ? 'bg-primary/50 hover:bg-primary/60' :
                            day.intensity === 3 ? 'bg-primary/70 hover:bg-primary/80' :
                            'bg-primary hover:bg-primary/90'
                          }`}
                          title={day ? `${day.date}: ${day.sessions} sessions, ${formatTime(day.totalMinutes)}` : 'No activity'}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Legend */}
            <div className="flex items-center justify-between mt-4 text-xs text-muted-foreground">
              <span>Less</span>
              <div className="flex items-center gap-1">
                <span className="mr-2">Study Activity</span>
                <div className="w-3 h-3 bg-muted rounded-sm" />
                <div className="w-3 h-3 bg-primary/30 rounded-sm" />
                <div className="w-3 h-3 bg-primary/50 rounded-sm" />
                <div className="w-3 h-3 bg-primary/70 rounded-sm" />
                <div className="w-3 h-3 bg-primary rounded-sm" />
              </div>
              <span>More</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Domain Progress */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Domain Progress</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {domainProgress.map((domain) => (
            <div key={domain.domain} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{domain.domain}</span>
                <span className="text-xs text-muted-foreground">
                  {domain.topics} topics • {formatTime(domain.time)}
                </span>
              </div>
              <Progress value={domain.progress} className="h-2" />
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Achievements</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className={`flex items-center gap-3 p-3 rounded-lg border ${
                  achievement.unlocked
                    ? 'bg-success/10 border-success/20'
                    : 'bg-muted/50 border-muted'
                }`}
              >
                <div className={`p-2 rounded-full ${
                  achievement.unlocked ? 'bg-success/20' : 'bg-muted'
                }`}>
                  {achievement.icon}
                </div>
                <div className="flex-1">
                  <div className="font-medium text-sm">{achievement.title}</div>
                  <div className="text-xs text-muted-foreground">{achievement.description}</div>
                </div>
                {achievement.unlocked && (
                  <Badge variant="secondary" className="bg-success/20 text-success">
                    ✓
                  </Badge>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}