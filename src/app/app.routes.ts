import { Routes } from '@angular/router';
import {ProductComponent} from "./product/product.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {CardComponent} from "./card/card.component";
import {PaymentComponent} from "./payment/payment.component";
import {CategoryComponent} from "./category/category.component";
import {CategoriesComponent} from "./categories/categories.component";

export const routes: Routes = [

  {
    path:'home', component: ProductComponent,
  },
  {
    path:'', component: ProductComponent
  },
  {
    path:'product/:id', component:ProductDetailComponent
  },
  {
  path:'card', component: CardComponent,
  },
  {
    path:'payment', component: PaymentComponent,
  },
  {
    path:'categories', component: CategoriesComponent,
  },
  {
    path:'category/:category', component: CategoryComponent,
  },
];
