import { NgModule } from '@angular/core';
import {
  cartBaseTranslationChunksConfig,
  cartBaseTranslations,
} from '@spartacus/cart/base/assets';
import {
  ADD_TO_CART_FEATURE,
  CartBaseRootModule,
  CART_BASE_FEATURE,
  MINI_CART_FEATURE,
  CART_BASE_CORE_FEATURE,
} from '@spartacus/cart/base/root';
import { CmsConfig, I18nConfig, provideConfig } from '@spartacus/core';

@NgModule({
  declarations: [],
  imports: [CartBaseRootModule],
  providers: [
    provideConfig(<CmsConfig>{
      featureModules: {
        [CART_BASE_FEATURE]: {
          module: () =>
            // import('@spartacus/cart/base').then((m) => m.CartBaseModule),
            import('./cart-base-wrapper.module').then(
              (m) => m.CartBaseWrapperModule
            ),
        },
      },
    }),

    provideConfig(<CmsConfig>{
      featureModules: {
        [MINI_CART_FEATURE]: {
          module: () =>
            import(
              './../../../storefront/cart/base/components/mini-cart/bdi-mini-cart.module'
            ).then((m) => m.BDIMiniCartModule),
        },
      },
    }),
    provideConfig(<CmsConfig>{
      featureModules: {
        [ADD_TO_CART_FEATURE]: {
          module: () =>
            import('@spartacus/cart/base/components/add-to-cart').then(
              (m) => m.AddToCartModule
            ),
        },
      },
    }),
    provideConfig(<I18nConfig>{
      i18n: {
        resources: cartBaseTranslations,
        chunks: cartBaseTranslationChunksConfig,
      },
    }),
  ],
})
export class CartBaseFeatureModule {}
