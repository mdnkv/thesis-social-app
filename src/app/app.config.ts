import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { provideStore } from '@ngrx/store';

import {
  AutoRefreshTokenService, provideKeycloak, UserActivityService, withAutoRefreshToken,
  INCLUDE_BEARER_TOKEN_INTERCEPTOR_CONFIG, IncludeBearerTokenCondition, includeBearerTokenInterceptor,
  createInterceptorCondition
} from 'keycloak-angular';

import { routes } from './app.routes';
import {environment} from '../environments/environment';

const devUrlCondition = createInterceptorCondition<IncludeBearerTokenCondition>({
  urlPattern: /^(http:\/\/localhost:8000)(\/.*)?$/i,
  bearerPrefix: 'Bearer'
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideKeycloak({
        config: {
            clientId: environment.keycloak.clientId,
            realm: environment.keycloak.realm,
            url: environment.keycloak.server
        },
        initOptions: {
            onLoad: 'login-required'
        },
        features: [
            withAutoRefreshToken({
                onInactivityTimeout: 'login',
                sessionTimeout: 60000
            })
        ],
        providers: [AutoRefreshTokenService, UserActivityService]
    }),
    {
        provide: INCLUDE_BEARER_TOKEN_INTERCEPTOR_CONFIG,
        useValue: [devUrlCondition]
    },
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withComponentInputBinding()),
    provideStore(),
    provideHttpClient(withInterceptors([includeBearerTokenInterceptor]))
  ]
};
