import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Product} from "../product";
import {ProductService} from "../product.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ProductService, RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{
  products =new Array<any>();
  constructor(private ProductService:ProductService) {

  }
  ngOnInit(): void {
    this.ProductService.findAll().subscribe((data: any[])=>{
      this.products=data
    })
  }
}
