import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardService} from "../card.service";
import {ProductService} from "../product.service";
import {RouterLink} from "@angular/router";
import {CardLenghtComponent} from "../card-lenght/card-lenght.component";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, ProductService, RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{
  total: number=0
  cards: any
  constructor(private CardService:CardService) {

}

  ngOnInit(): void {
    this.total=0
    this.cards = this.CardService.getCard();
    this.cards.forEach((card:any)=>{
      this.total+=card.product.price*card.quantity
    })

   }
  removeCard(id :number){
    this.CardService.removeToCard(id)
    this.ngOnInit()

  }
  removeAllCard(){
    this.CardService.removeCard()
    this.ngOnInit()
  }


}

//export class CardComponent implements OnInit{
