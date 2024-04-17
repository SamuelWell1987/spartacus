import { Injectable } from '@angular/core';
import { MiniCartComponentService } from '@spartacus/cart/base/components/mini-cart';
import { ActiveCartFacade } from '@spartacus/cart/base/root';
import {
  AuthService,
  EventService,
  SiteContextParamsService,
  StatePersistenceService,
} from '@spartacus/core';

import { Observable, map, of, startWith, switchMap } from 'rxjs';
import { BDIActiveCartFacade } from '../../root';

@Injectable()
export class BDIMiniCartComponentService extends MiniCartComponentService {
  constructor(
    protected bdiActiveCartFacade: BDIActiveCartFacade,
    authService: AuthService,
    statePersistenceService: StatePersistenceService,
    siteContextParamsService: SiteContextParamsService,
    eventService: EventService
  ) {
    super(
      bdiActiveCartFacade,
      authService,
      statePersistenceService,
      siteContextParamsService,
      eventService
    );
  }

  override getQuantity(): Observable<number> {
    return this.activeCartRequired().pipe(
      switchMap((activeCartRequired) => {
        if (activeCartRequired) {
          return this.bdiActiveCartFacade.getDummyCart().pipe(
            startWith({ totalUnitCount: 0 }),
            map((cart) => cart.totalUnitCount || 0)
          );
        } else {
          return of(0);
        }
      })
    );
  }
}
