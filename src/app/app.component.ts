import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterOutlet} from '@angular/router';
import {ProductComponent} from "./product/product.component";
import {CardService} from "./card.service";
import {CardLenghtComponent} from "./card-lenght/card-lenght.component";
import {NavbarComponent} from "./navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ProductComponent, RouterLink, CardLenghtComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


  title:string = 'angular-shop-api';
}

