import { useEffect, useState } from "react";
import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PullToRefresh({ onRefresh }: { onRefresh: () => void }) {
  const [isPulling, setIsPulling] = useState(false);
  const [pullDistance, setPullDistance] = useState(0);

  useEffect(() => {
    let startY = 0;
    let currentY = 0;
    let isScrolledToTop = true;

    const handleTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
      isScrolledToTop = window.scrollY === 0;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isScrolledToTop) return;
      
      currentY = e.touches[0].clientY;
      const distance = currentY - startY;
      
      if (distance > 0) {
        e.preventDefault();
        setPullDistance(Math.min(distance, 100));
        setIsPulling(distance > 50);
      }
    };

    const handleTouchEnd = () => {
      if (isPulling && pullDistance > 50) {
        onRefresh();
      }
      setIsPulling(false);
      setPullDistance(0);
    };

    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isPulling, pullDistance, onRefresh]);

  if (pullDistance === 0) return null;

  return (
    <div 
      className="fixed top-0 left-0 right-0 flex items-center justify-center bg-primary/10 z-40 transition-all duration-300"
      style={{ 
        height: pullDistance,
        transform: `translateY(-${100 - pullDistance}%)`,
      }}
    >
      <div className={`transition-transform duration-300 ${isPulling ? 'rotate-180' : ''}`}>
        <RefreshCw className="h-6 w-6 text-primary" />
      </div>
    </div>
  );
}

export function TouchFriendlyButton({ children, ...props }: React.ComponentProps<typeof Button>) {
  return (
    <Button
      {...props}
      className={`min-h-[44px] min-w-[44px] touch-manipulation ${props.className || ''}`}
      style={{ WebkitTapHighlightColor: 'transparent' }}
    >
      {children}
    </Button>
  );
}

export function SwipeableCard({ 
  children, 
  onSwipeLeft, 
  onSwipeRight,
  className = ""
}: {
  children: React.ReactNode;
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  className?: string;
}) {
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [isSwipingX, setIsSwipingX] = useState(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
    setCurrentX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isSwipingX) {
      setIsSwipingX(true);
    }
    setCurrentX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!isSwipingX) return;
    
    const distance = currentX - startX;
    const threshold = 100; // Minimum swipe distance

    if (Math.abs(distance) > threshold) {
      if (distance > 0 && onSwipeRight) {
        onSwipeRight();
      } else if (distance < 0 && onSwipeLeft) {
        onSwipeLeft();
      }
    }

    setIsSwipingX(false);
    setStartX(0);
    setCurrentX(0);
  };

  const swipeOffset = isSwipingX ? currentX - startX : 0;

  return (
    <div
      className={`transition-transform duration-200 ${className}`}
      style={{
        transform: isSwipingX ? `translateX(${Math.max(-50, Math.min(50, swipeOffset))}px)` : 'none'
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {children}
    </div>
  );
}

// Hook for detecting mobile device
export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
}

// Hook for handling device orientation
export function useOrientation() {
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>('portrait');

  useEffect(() => {
    const handleOrientationChange = () => {
      setOrientation(window.innerHeight > window.innerWidth ? 'portrait' : 'landscape');
    };

    handleOrientationChange();
    window.addEventListener('resize', handleOrientationChange);
    window.addEventListener('orientationchange', handleOrientationChange);

    return () => {
      window.removeEventListener('resize', handleOrientationChange);
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, []);

  return orientation;
}