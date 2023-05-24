import {Component, OnInit} from '@angular/core';
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  products! :Array<any> ;
  errorMessage! : String;

  constructor(private productService : ProductService) {
  }
  ngOnInit(): void {
    this.productService.getallProducts().subscribe({
      next : (data)=>{
        this.products=data;
      },
      error : (err)=>{
        this.errorMessage=err;
      }
    });
  }

  deleteProduct(p: any) {
    let index = this.products.indexOf(p);
    this.products.splice(index,1);
  }
}
