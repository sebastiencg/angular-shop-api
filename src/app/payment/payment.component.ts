import {Component, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardService} from "../card.service";
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {
  total: number=0
  cards: any
  username: string | undefined;
  cardNumber: any;
  lastNum:number=4
  constructor(private CardService:CardService, private router:Router) {

  }
  ngOnInit(): void {
    this.total=0
    this.cards = this.CardService.getCard();
    this.cards.forEach((card:any)=>{
      this.total+=card.product.price*card.quantity
    })

  }
  payment() {
    if (this.username && this.cardNumber) {
      let last4 = this.lastNumber(this.cardNumber, this.lastNum);
      alert("Paiement réalisé avec la carte de " + this.username + " avec les quatre derniers chiffres de la carte : " + last4);
      this.CardService.removeCard()
      this.router.navigate(['']);

    } else {
      alert("Erreur : Les informations de carte ne sont pas définies correctement.");
    }
  }
  backToCard(){
    this.router.navigate(['/card']);
  }

  lastNumber(number: number, last4: number): string {
    const modulo = Math.pow(10, last4);
    const result = number % modulo;
    const resultString = result.toString().padStart(last4, '0');
    return resultString;
  }

}
