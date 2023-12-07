import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../product.service";
import {FormsModule} from "@angular/forms";
import {CardService} from "../card.service";

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, ProductService, FormsModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  inputQuantity: number = 1;

  route : ActivatedRoute = inject(ActivatedRoute)
  constructor(private ProductService:ProductService, private CardService:CardService) {}
  product:any
  productAddCard:any
  ngOnInit(): void {
    let id = Number(this.route.snapshot.params['id'])

    this.ProductService.findOne(id).subscribe((data: object)=>{
      this.product=data
    })
  }
  addToCart(): void {
    if (this.inputQuantity>10 || isNaN(this.inputQuantity)){
      return alert("le nombre max est de 10 article")
    }

    let cards:any[] =this.CardService.getCard()
    const lastId = cards.length > 0 ? cards[cards.length - 1].id : 0;
    const newId = lastId + 1;
    this.productAddCard= { id:newId, product: this.product, quantity: this.inputQuantity };
    this.CardService.addToCard(this.productAddCard);
    alert("produit ajouté au panier")
  }
}
