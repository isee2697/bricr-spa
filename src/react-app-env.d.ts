/// <reference types="react-scripts" />
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    REACT_APP_DEFAULT_LOCALE: string;
    REACT_APP_API_URL: string;
    REACT_APP_SECURITY_URL: string;
    REACT_APP_CI: string;
    REACT_APP_FILE_URL: string;
    REACT_APP_INTERCOM_ID: string;
  }
}
