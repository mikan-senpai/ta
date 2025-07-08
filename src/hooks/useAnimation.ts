import { useEffect, useCallback, useRef } from 'react';

interface AnimationOptions {
  duration?: number;
  easing?: string;
  delay?: number;
}

export const useAnimation = (options: AnimationOptions = {}) => {
  const frameRef = useRef<number>();
  const startTimeRef = useRef<number>();

  const animate = useCallback((
    element: HTMLElement,
    startValue: number,
    endValue: number,
    property: string,
    unit: string = 'px'
  ) => {
    const {
      duration = 2500,
      easing = 'cubic-bezier(0.4, 0, 0.2, 1)',
      delay = 0
    } = options;

    const easingFunction = (t: number): number => {
      // Cubic bezier implementation
      const [x1, y1, x2, y2] = [0.4, 0, 0.2, 1];
      return t * (3 * t * (2 * t * (x2 - x1) + (y2 - y1)) + 1);
    };

    const animation = (currentTime: number) => {
      if (!startTimeRef.current) startTimeRef.current = currentTime;
      
      const elapsed = currentTime - startTimeRef.current - delay;
      
      if (elapsed < 0) {
        frameRef.current = requestAnimationFrame(animation);
        return;
      }

      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easingFunction(progress);
      const currentValue = startValue + (endValue - startValue) * easedProgress;

      element.style[property as any] = `${currentValue}${unit}`;

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animation);
      }
    };

    frameRef.current = requestAnimationFrame(animation);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [options]);

  useEffect(() => {
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return { animate };
};