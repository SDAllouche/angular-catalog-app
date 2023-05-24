import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Product} from "../model/products.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products! : Array<Product>;
  constructor() {
    this.products = [
      {id:1,name:"Comuter", price:6000,promotion:true},
      {id:2,name:"TV", price:6500,promotion:true},
      {id:3,name:"Phone", price:3500,promotion:true},
    ];
  }

  getallProducts():Observable<Array<Product>>{
    return of(this.products);
  }

  deleteProduct(id : number):Observable<boolean>{
    this.products=this.products.filter(p=>p.id!=id);
    return of(true);
  }

}
