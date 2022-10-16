import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pipe } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  categoryId: string | null = null;
  limit = 10;
  offset = 0;
  products: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
    ) { }

  ngOnInit(): void {
    this.route.params
    .pipe(
      switchMap(params =>{
        this.categoryId =  params['id'];
        if(this.categoryId){ 
          return  this.productsService.getByCategory(this.categoryId, this.limit, this.offset)
        }
        return [];
      })
    ).subscribe(data =>{
      this.products = data;
    });

    /*     this.route.params.subscribe(params => {
      this.categoryId = params['id'];
      if(this.categoryId){ // se coloca este if para que no este nulla y no arroje error
        this.productsService.getByCategory(this.categoryId, this.limit, this.offset)
        .subscribe(data => {
          this.products = data;
        })
      }
    }) */
  }

}
