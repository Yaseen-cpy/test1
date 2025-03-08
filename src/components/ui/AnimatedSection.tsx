
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  once?: boolean;
  threshold?: number;
}

const AnimatedSection = ({
  children,
  className,
  delay = 0,
  direction = 'up',
  distance = 30,
  once = true,
  threshold = 0.1,
}: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    
    if (!currentRef) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        
        if (entry.isIntersecting) {
          if (!once || (once && !hasAnimated)) {
            setTimeout(() => {
              setIsVisible(true);
              setHasAnimated(true);
            }, delay);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );
    
    observer.observe(currentRef);
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay, once, hasAnimated, threshold]);

  const getTransformValue = () => {
    if (!isVisible) {
      switch (direction) {
        case 'up':
          return `translateY(${distance}px)`;
        case 'down':
          return `translateY(-${distance}px)`;
        case 'left':
          return `translateX(${distance}px)`;
        case 'right':
          return `translateX(-${distance}px)`;
        default:
          return 'none';
      }
    }
    return 'none';
  };

  return (
    <div
      ref={sectionRef}
      className={cn(className)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'none' : getTransformValue(),
        transition: `opacity 0.8s ease-out, transform 0.8s ease-out`,
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
