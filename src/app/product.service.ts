import {Injectable, NgModule} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Product} from "./product";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
@NgModule({
  imports: [HttpClientModule],
})
export class ProductService   {
  constructor(private http: HttpClient) {
  }

  url: string = 'https://fakestoreapi.com/products'
  products: Observable<any[]> | undefined

  findAll() {
    try {
    return  this.products= this.http.get<Product[]>(this.url)
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
      throw error;

    }
  }
  findOne(id:number) {
    try {
      return this.products= this.http.get<Product[]>(this.url+'/'+id)
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
      throw error;

    }
  }
  findForCard(Cards: any[]) {

    let allProduct: Product[] = [];

    Cards.forEach((element) => {
      const id = element.productId;

      this.http.get<Product>(this.url + '/' + id).subscribe(
        (data) => {
          data.cardId = element.id
          allProduct.push(data);
        },
        (error) => {
          console.error('Erreur lors de la récupération des données pour le produit avec ID', id, ':', error);
        }
      );
    });
    return allProduct
  }
}
