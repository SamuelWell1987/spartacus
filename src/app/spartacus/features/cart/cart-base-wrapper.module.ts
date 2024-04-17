import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartBaseModule } from '@spartacus/cart/base';
import { BDIActiveCartService } from '../../../core/cart/base/core/facade/bdi-active-cart.service';
import { ActiveCartFacade } from '@spartacus/cart/base/root';
import { ActiveCartService } from '@spartacus/cart/base/core';
import { BDIActiveCartFacade } from '../../../core/cart/base/root/facade/bdi-active-cart.facade';

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
    {
      provide: BDIActiveCartFacade,
      useExisting: BDIActiveCartService,
    },
  ],
})
export class CartBaseWrapperModule {}
