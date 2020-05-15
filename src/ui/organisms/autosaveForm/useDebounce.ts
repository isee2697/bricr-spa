import { useRef, useCallback } from 'react';

export function useDebounce<T>(callback: (values: T) => void, delay: number): [(values: T) => void] {
  const timer = useRef<NodeJS.Timeout | null>(null);

  const handleChange = useCallback(
    (values: T) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }

      timer.current = setTimeout(() => {
        callback(values);

        timer.current = null;
      }, delay);
    },
    [callback, delay],
  );

  return [handleChange];
}
