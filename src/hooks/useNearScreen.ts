import { useState, useRef, useEffect } from 'react';

export const useNearScreen = () => {
  const [show, setShow] = useState(false);
  const reference = useRef(null);

  useEffect(() => {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : require('intersection-observer'),
    ).then(() => {
      const observer = new window.IntersectionObserver((entries) => {
        const { isIntersecting } = entries[0];
        if (isIntersecting) {
          setShow(true);
        }
        if (!isIntersecting) {
          setShow(false);
        }
      });
      observer.observe(reference.current);
    });
  }, [reference]);
  return [show, reference];
};
