import { Routes } from '@angular/router';
import {AdminComponent} from './admin/admin.component';
import {MenuComponent} from './menu/menu.component';
import {HomeComponent} from './home/home.component';
import {ConditionsComponent} from './conditions/conditions.component';
import {ContactComponent} from './contact/contact.component';
import {PrivacyComponent} from './privacy/privacy.component';
import {ShoppingcartComponent} from './shoppingcart/shoppingcart.component';
import {MyaccountComponent} from './myaccount/myaccount.component';
import {AllergenComponent} from './allergen/allergen.component';

export const routes: Routes = [
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: 'admin', component: AdminComponent },
{ path: 'menu', component: MenuComponent },
{ path: 'home', component: HomeComponent },
{ path: 'conditions', component: ConditionsComponent },
{ path: 'contact', component: ContactComponent },
{ path: 'privacy', component: PrivacyComponent },
{ path: 'shoppingcart', component: ShoppingcartComponent },
{ path: 'myaccount', component: MyaccountComponent },
{ path: 'allergen', component: AllergenComponent },
];
