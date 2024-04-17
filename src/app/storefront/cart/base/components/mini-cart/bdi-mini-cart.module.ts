import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MiniCartComponentService,
  MiniCartModule,
} from '@spartacus/cart/base/components/mini-cart';
import { BDIMiniCartComponentService } from './bdi-mini-cart-component.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, MiniCartModule],
  providers: [
    BDIMiniCartComponentService,
    {
      provide: MiniCartComponentService,
      useExisting: BDIMiniCartComponentService,
    },
  ],
})
export class BDIMiniCartModule {}
