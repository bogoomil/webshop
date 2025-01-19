import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MetaReducer, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { baseurlInterceptor } from './interceptors/baseurl.interceptor';
import { errorInterceptor } from './interceptors/error.interceptor';
import { cartReducer } from './menu/store/product.reducer';
import { shopReducer } from './shared/store/shop.reducer';
import { userReducer } from './user/store/user.reducer';
import { orderReducer } from './shared/store/order/order.reducer';
import { sessionStorageMetaReducer } from './shared/reducers/metareducers';
import { tokenInterceptor } from './interceptors/token.interceptor';

const reducers = {
  cart: cartReducer,
  shop: shopReducer,
  user: userReducer,
  order: orderReducer
}

const metaReducers: MetaReducer[] = [sessionStorageMetaReducer];

//{metaReducers: [metaReducers]}
export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
  provideRouter(routes),
  provideAnimationsAsync(),
  provideStore(reducers, { metaReducers }),
  provideStoreDevtools({ maxAge: 25, logOnly: false }),
  provideHttpClient(
    withInterceptors([baseurlInterceptor, tokenInterceptor, errorInterceptor]),),],
};
