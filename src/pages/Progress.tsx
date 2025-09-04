import { ProgressTracker } from "@/components/ui/progress-tracker";

export default function Progress() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Your Learning Progress</h1>
          <p className="text-muted-foreground">
            Track your study sessions, maintain streaks, and unlock achievements as you progress through your learning journey.
          </p>
        </div>
        
        <ProgressTracker />
      </div>
    </div>
  );
}