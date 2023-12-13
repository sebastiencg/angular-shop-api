import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {CategoriesService} from "../categories.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule,CategoriesService,RouterLink],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'

})
export class CategoriesComponent implements OnInit{
  categories: any[] = [];

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.categoriesService.findAll().subscribe(data => {
      this.categories = data;
    });

  }

}
