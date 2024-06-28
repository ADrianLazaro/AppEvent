import { ApplicationConfig } from '@angular/core';
import { PreloadAllModules, provideRouter, withComponentInputBinding, withPreloading } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { UserScope, buildAngularAuthConfig } from '@logto/js';
import { provideAuth } from 'angular-auth-oidc-client';

export const appConfig: ApplicationConfig = {
   providers: [
    provideHttpClient(withFetch()),
    provideAuth({
      config: buildAngularAuthConfig({
        endpoint: 'https://rv9i08.logto.app/',
        appId: 'lbw1hev6vhdgak2c3s9go',
        redirectUri: 'http://localhost:4200/logto/callback',
        postLogoutRedirectUri: 'http://localhost:4200',
      }),
    }),
     provideRouter(routes, withComponentInputBinding(), withPreloading(PreloadAllModules)),
     provideClientHydration(),
     provideHttpClient()
   ]
};
