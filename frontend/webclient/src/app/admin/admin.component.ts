import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MenuEditComponent } from "./menu-edit/menu-edit.component";

@Component({
  selector: 'app-admin',
  imports: [MatTabsModule, MatButtonModule, MenuEditComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

}
