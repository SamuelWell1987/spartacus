import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ActiveCartService,
  CartBaseCoreModule,
} from '@spartacus/cart/base/core';
import { ActiveCartFacade } from '@spartacus/cart/base/root';
import { BDIActiveCartService } from './facade/bdi-active-cart.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, CartBaseCoreModule],
  providers: [
    BDIActiveCartService,
    {
      provide: ActiveCartFacade,
      useExisting: BDIActiveCartService,
    },
    // {
    //   provide: ActiveCartService,
    //   useExisting: BDIActiveCartService,
    // },
  ],
})
export class CartBaseCoreWrapperModule {}
