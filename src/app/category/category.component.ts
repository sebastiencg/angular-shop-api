import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute} from "@angular/router";
import {CategoriesService} from "../categories.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule,CategoriesService,RouterLink],
  templateUrl: '../product/product.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent  implements OnInit{
  products:any

  route : ActivatedRoute = inject(ActivatedRoute)
  constructor(private CategoriesService:CategoriesService, ) {}

  ngOnInit(): void {
    let category = (this.route.snapshot.params['category'])
    this.CategoriesService.findCategory(category).subscribe((data: object)=>{
      this.products=data
      console.log(this.products)

    })
  }
}
