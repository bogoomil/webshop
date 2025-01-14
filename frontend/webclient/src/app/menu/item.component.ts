import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Item } from '../shared/menu.interface';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ButtonAddComponent } from "./cart-options/cart-options.component";

@Component({
  selector: 'app-item',
  imports: [CommonModule, MatButtonModule, MatCardModule, MatIconModule, ButtonAddComponent],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss',
  standalone: true
})
export class ItemComponent {
  @Input() item?: Item;

  addToBasket(name: string){
    alert('added to basket ' + name);
  }
}
