import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import MenuService from './service/menu.service';
import { Item, Kategoria } from './model/menu.interface';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-menu-edit',
  imports: [CommonModule, MatButtonModule],
  templateUrl: './menu-edit.component.html',
  styleUrl: './menu-edit.component.scss',
  standalone: true
})
export class MenuEditComponent {

  kats?: Kategoria[];
  items?: Item[];


  constructor(private menuService: MenuService){
    const kategoriak$ = this.menuService.loadAllCategories().subscribe(resp => {
      this.kats = resp;
    });  
  }

  loadItems(kategoriaName: string){
    this.menuService.loadItems(kategoriaName).subscribe(resp => {
      this.items = resp;
    });
  }
  

}
