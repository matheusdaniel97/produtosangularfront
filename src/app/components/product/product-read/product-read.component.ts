import { ProductDeleteComponent } from './../product-delete/product-delete.component';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[]
  displayedColumns = ['id', 'name', 'price', 'action']

  constructor(private productService: ProductService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.productService.read().subscribe(products =>{
      this.products = products;
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ProductDeleteComponent , {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
