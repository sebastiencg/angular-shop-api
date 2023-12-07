import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterOutlet} from '@angular/router';
import {ProductComponent} from "./product/product.component";
import {CardService} from "./card.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ProductComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private CardService:CardService) {

  }

  title:string = 'angular-shop-api';
  cardItem:number=this.CardService.getCard().length

}

