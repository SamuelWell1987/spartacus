import { Injectable } from '@angular/core';
import { ActiveCartService } from '@spartacus/cart/base/core';
import { Cart, MultiCartFacade } from '@spartacus/cart/base/root';
import { UserIdService, WindowRef } from '@spartacus/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class BDIActiveCartService extends ActiveCartService {
  constructor(
    multiCartFacade: MultiCartFacade,
    userIdService: UserIdService,
    winRef: WindowRef
  ) {
    super(multiCartFacade, userIdService, winRef);
  }

  override getActive(): Observable<Cart> {
    return of({
      code: '12345',
      guid: '12345',
      userId: '12345',
      totalUnitCount: 100,
    });
  }

  getDummyCart(): Observable<Cart> {
    return of({
      code: 'dummyCode',
      guid: 'dummyCartId',
      userId: 'dummyUser',
      totalUnitCount: 50,
    });
  }
}
