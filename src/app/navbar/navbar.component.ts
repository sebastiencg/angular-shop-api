import {Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardLenghtComponent} from "../card-lenght/card-lenght.component";
import {RouterLink} from "@angular/router";
import {CardService} from "../card.service";

@Component({
  selector: 'app-navbar',
  standalone: true,
    imports: [CommonModule, CardLenghtComponent, RouterLink,CardService],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
}
