// config.ts
const config = {
    development: {
      apiBaseUrl: 'http://localhost:10130',
    },
    production: {
      apiBaseUrl: 'https://your-production-url.com',
    },
  };
  
  export const getApiBaseUrl = () => {
    if (window.location.hostname === 'localhost') {
      return config.development.apiBaseUrl;
    } else {
      return config.production.apiBaseUrl;
    }
  };
  