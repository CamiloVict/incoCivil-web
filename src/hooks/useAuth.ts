import { useState, useEffect } from 'react';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const observer = new MutationObserver((_, mutationInstance) => {
      const loggedInElement = document.querySelector('.user-logged-in');
      setIsAuthenticated(!!loggedInElement);
      if (loggedInElement) {
        mutationInstance.disconnect();
      }
    });

    observer.observe(document, {
      childList: true,
      subtree: true,
    });
  }, []);

  return isAuthenticated;
};
