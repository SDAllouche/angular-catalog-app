import {Component, OnInit} from '@angular/core';
import {ProductService} from "../services/product.service";
import {Product} from "../model/products.model";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  products! :Array<Product> ;
  errorMessage! : String;

  constructor(private productService : ProductService) {
  }
  ngOnInit(): void {
  }

  getAllProducts(){
    this.getAllProducts();
  }

  deleteProduct(p: Product) {
    let conf=confirm("Are you sure ?");
    if(conf==false) return;
    this.productService.deleteProduct(p.id).subscribe({
      next : (data)=>{
        //this.getAllProducts();
        let index=this.products.indexOf(p);
        this.products.splice(index,1);
      }
    });
  }
}
