import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [CategoryComponent], //un componente solo puede existir en un modulo
  imports: [
    CommonModule,
    CategoryRoutingModule,
    SharedModule
  ]
})
export class CategoryModule { }
