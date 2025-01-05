import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStore } from '@ngrx/store';
import { counterReducer } from './store/counter.reducer';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { baseurlInterceptor } from './interceptors/baseurl.interceptor';
import { errorInterceptor } from './interceptors/error.interceptor';
import { tokenInterceptor } from './interceptors/token.interceptor';
import { authstoreReducer } from './store/authstore.reducer';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
  provideRouter(routes),
  provideAnimationsAsync(),
  provideStore({
    count: counterReducer,
    loggedIn: authstoreReducer,
  }),
  provideHttpClient(withInterceptors([baseurlInterceptor, tokenInterceptor, errorInterceptor]),),],
};
