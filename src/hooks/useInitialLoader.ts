import { useState, useEffect } from 'react';

/**
 * Hook for managing initial site loading
 * Shows loader for 10 seconds on first visit only
 */
export const useInitialLoader = () => {
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Check if site was already loaded in this session
    const hasLoaded = sessionStorage.getItem('siteInitiallyLoaded');
    
    if (hasLoaded === 'true') {
      setIsInitialLoading(false);
      setLoadingProgress(100);
      return;
    }

    const loadingDuration = 10000; // 10 seconds
    const startTime = Date.now();
    
    // Smooth progress animation
    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min((elapsed / loadingDuration) * 100, 100);
      
      setLoadingProgress(progress);
      
      if (progress >= 100) {
        clearInterval(progressInterval);
        
        // Small delay for smooth completion animation
        setTimeout(() => {
          setIsInitialLoading(false);
          sessionStorage.setItem('siteInitiallyLoaded', 'true');
        }, 500);
      }
    }, 50); // Update every 50ms for smooth animation

    return () => clearInterval(progressInterval);
  }, []);

  return { isInitialLoading, loadingProgress };
};