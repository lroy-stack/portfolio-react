// Google Analytics integration
export const initAnalytics = () => {
  if (process.env.REACT_APP_GA_ID) {
    // Initialize GA
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.REACT_APP_GA_ID}`;
    document.head.appendChild(script);
  }
};

export const trackEvent = (category, action, label) => {
  if (window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
    });
  }
};

export const trackPageView = (path) => {
  if (window.gtag) {
    window.gtag('config', process.env.REACT_APP_GA_ID, {
      page_path: path,
    });
  }
};
