// src/main.ts

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';


// Import and register Swiper's custom elements
// import { register } from 'swiper/element/bundle';
import { App } from './app/app';
// register();

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));