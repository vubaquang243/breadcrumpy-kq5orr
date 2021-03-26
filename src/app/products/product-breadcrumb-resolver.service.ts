import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { of, EMPTY } from 'rxjs';
import { delay } from 'rxjs/operators';
import { BreadcrumbResolver } from '@dirkluijk/ngx-breadcrumpy';

@Injectable({ providedIn: 'root' })
export class ProductBreadcrumbResolver implements BreadcrumbResolver {

  resolve(route: ActivatedRouteSnapshot) {
    // return 'Product ' + route.paramMap.get('id');

    return of('Product ' + route.paramMap.get('id')).pipe(delay(300))
    // return EMPTY;
  }

}