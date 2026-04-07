export const animateScroll = (targetY: number, duration: number = 1500, offset: number = 0) => {
  const startPosition = window.pageYOffset;
  const distance = targetY - startPosition - offset;
  let start: number | null = null;

  // Cinematic easeOutQuint function
  const easeOutQuint = (t: number) => 1 - Math.pow(1 - t, 5);

  const step = (timestamp: number) => {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    const percentage = Math.min(progress / duration, 1);
    
    window.scrollTo(0, startPosition + distance * easeOutQuint(percentage));
    
    if (progress < duration) {
      window.requestAnimationFrame(step);
    }
  };

  window.requestAnimationFrame(step);
};
