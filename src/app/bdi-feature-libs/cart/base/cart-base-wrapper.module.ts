import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartBaseModule } from '@spartacus/cart/base';
import { BDIActiveCartService } from './core/facade/bdi-active-cart.service';
import { ActiveCartService } from '@spartacus/cart/base/core';

@NgModule({
  declarations: [],
  imports: [CommonModule, CartBaseModule],
  providers: [
    BDIActiveCartService,
    // {
    //   provide: ActiveCartFacade,
    //   useExisting: BDIActiveCartService,
    // }
    {
      provide: ActiveCartService,
      useExisting: BDIActiveCartService,
    },
  ],
})
export class CartBaseWrapperModule {}
