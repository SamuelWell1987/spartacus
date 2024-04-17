import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartBaseModule } from '@spartacus/cart/base';
import { BDIActiveCartService } from './core/facade/bdi-active-cart.service';
import { ActiveCartService } from '@spartacus/cart/base/core';
import { BDIActiveCartFacade } from './root';


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
