import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import MenuService from './service/menu.service';
import { Item, Kategoria } from '../shared/interfaces/menu.interface';
import { MatButtonModule } from '@angular/material/button';
import { ItemComponent } from "./item.component";
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { inject } from '@angular/core';

@Component({
  selector: 'app-menu',
  imports: [CommonModule, MatButtonModule, ItemComponent, FlexLayoutModule, RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  standalone: true
})
export class MenuComponent implements OnInit {

  kats?: Kategoria[];
  items?: Item[];
  currentCategory?: string;

  private readonly route = inject(ActivatedRoute);

  constructor(private menuService: MenuService) {
    const kategoriak$ = this.menuService.loadAllCategories().subscribe(resp => {
      this.kats = resp;
    });
  }

  enc(s: string): string {
    return encodeURIComponent(s);
  }

  ngOnInit() {
    this.route.url.subscribe(m => {
      const categoryName = this.route.snapshot.paramMap.get('category');
      if (categoryName) {
        console.log('on init category: ' + categoryName);
        this.loadItems('' + categoryName);
      }
    })
  }

  loadItems(categoryName: string) {
    this.currentCategory = decodeURIComponent(categoryName);
    this.menuService.loadItems(categoryName).subscribe(resp => {
      this.items = resp;
    });
  }
}
