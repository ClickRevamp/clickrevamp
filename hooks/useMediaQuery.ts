'use client'

import { useState, useEffect } from 'react';

/**
 * Custom hook to check if the current viewport matches a media query
 * @param query CSS media query string (e.g., '(max-width: 768px)')
 * @returns boolean indicating if the media query matches
 */
export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);
  
  useEffect(() => {
    // Check if window is available (client-side only)
    if (typeof window === 'undefined') {
      return;
    }
    
    const media = window.matchMedia(query);
    
    // Update the state initially
    setMatches(media.matches);
    
    // Define listener to handle changes
    const handleResize = () => {
      setMatches(media.matches);
    };
    
    // Add event listener for subsequent changes
    if (media.addEventListener) {
      media.addEventListener('change', handleResize);
      return () => media.removeEventListener('change', handleResize);
    } else {
      // Fallback for older browsers
      media.addListener(handleResize);
      return () => media.removeListener(handleResize);
    }
  }, [query]);
  
  return matches;
}; 