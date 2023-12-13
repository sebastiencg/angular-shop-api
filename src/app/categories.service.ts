import {Injectable, NgModule} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { Observable } from "rxjs";
import {Product} from "./product";

@Injectable({
  providedIn: 'root'
})
@NgModule({
  imports: [HttpClientModule],
})
export class CategoriesService {
  private url: string = 'https://fakestoreapi.com/products/';

  constructor(private http: HttpClient) {}

  findAll(): Observable<any[]> {
    try {
      return this.http.get<any[]>(this.url+"categories/");
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
      throw error;
    }
  }
  findCategory(category:string) {
    try {
      return  this.http.get<Product[]>(this.url+'category'+'/'+category)
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
      throw error;

    }
  }
}
