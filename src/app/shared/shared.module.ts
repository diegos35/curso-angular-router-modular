import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReversePipe } from './pipes/reverse.pipe';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { ImgComponent } from '../shared/components/img/img.component';
import { RouterModule } from '@angular/router';
import { SwiperModule } from 'swiper/angular';
import { TecnicosComponent } from './components/tecnicos/tecnicos.component';
import { TechniciansFormComponent } from './components/tecnicos/technicians-form/technicians-form.component';


@NgModule({
  declarations: [
    ImgComponent,
    ProductComponent,
    ProductsComponent,
    ReversePipe,
    TimeAgoPipe,
    HighlightDirective,
    TecnicosComponent,
    TechniciansFormComponent,
  ],
  imports: [
    CommonModule,
    SwiperModule,
    RouterModule
  ],
  exports: [
    ImgComponent,
    ProductComponent,
    ProductsComponent,
    ReversePipe,
    TimeAgoPipe,
    HighlightDirective,
    TecnicosComponent,
    TechniciansFormComponent
  ]
})
export class SharedModule { }
