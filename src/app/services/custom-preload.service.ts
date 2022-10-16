import { Injectable } from '@angular/core';

import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomPreloadService implements PreloadingStrategy{

  constructor() { }

  preload(route: Route, load: () => Observable<any>){
    if(route.data && route.data['preload']){ //flag preload se recargan
      return load();
    }
    return of(null) //observable en vacio
  }
}
