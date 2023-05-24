import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products! : Array<any>;
  constructor() {
    this.products = [
      {id:1,name:"Comuter", price:6000},
      {id:2,name:"TV", price:6500},
      {id:3,name:"Phone", price:3500},
    ];
  }

  getallProducts():Observable<Array<any>>{
    return of(this.products);
  }



}
