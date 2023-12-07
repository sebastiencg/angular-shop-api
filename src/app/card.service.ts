import { Injectable } from '@angular/core';
import {BehaviorSubject, map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private cardKey = 'card';

  addToCard(product: any): void {
    const card = this.getCard();
    card.push(product);
    this.setCard(card);
  }
  removeToCard(cardId: number): void {
    const cards:any[] = this.getCard();
    const newCards: any[] = cards.filter(card => card.id !== cardId);
    localStorage.setItem(this.cardKey, JSON.stringify(newCards));
  }


  getCard(): any[] {
    const panierString = localStorage.getItem(this.cardKey);
    return panierString ? JSON.parse(panierString) : [];
  }

  setCard(panier: any[]): void {
    localStorage.setItem(this.cardKey, JSON.stringify(panier));
  }
  removeCard(): void {
    localStorage.removeItem(this.cardKey)
  }
}
