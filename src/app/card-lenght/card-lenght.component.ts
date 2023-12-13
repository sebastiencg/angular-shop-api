import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardService} from "../card.service";

@Component({
  selector: 'app-card-lenght',
  standalone: true,
  imports: [CommonModule],
  template: '{{getCartCount()}}',
  styleUrl: './card-lenght.component.css'
})
export class CardLenghtComponent {
  constructor(private CardService:CardService) {

  }
  getCartCount(){
    return this.CardService.getCard().length
  }
}
