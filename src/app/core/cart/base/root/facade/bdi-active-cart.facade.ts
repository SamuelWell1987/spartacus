import { Injectable } from '@angular/core';
import {
  ActiveCartFacade,
  CART_BASE_CORE_FEATURE,
  Cart,
} from '@spartacus/cart/base/root';
import { facadeFactory } from '@spartacus/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
  useFactory: () =>
    facadeFactory({
      facade: BDIActiveCartFacade,
      feature: CART_BASE_CORE_FEATURE,
      methods: [
        'getActive',
        'takeActive',
        'getActiveCartId',
        'takeActiveCartId',
        'getEntries',
        'getLastEntry',
        'getLoading',
        'isStable',
        'addEntry',
        'removeEntry',
        'updateEntry',
        'getEntry',
        'addEmail',
        'getAssignedUser',
        'isGuestCart',
        'addEntries',
        'requireLoadedCart',
        'reloadActiveCart',
        'hasPickupItems',
        'hasDeliveryItems',
        'getPickupEntries',
        'getDeliveryEntries',
        'getDummyCart',
      ],
      async: true,
    }),
})
export abstract class BDIActiveCartFacade extends ActiveCartFacade {
  abstract getDummyCart(): Observable<Cart>;
}
