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
{ path: 'admin-component', component: AdminComponent },
{ path: 'menu-component', component: MenuComponent },
{ path: 'home-component', component: HomeComponent },
{ path: 'conditions-component', component: ConditionsComponent },
{ path: 'contact-component', component: ContactComponent },
{ path: 'privacy-component', component: PrivacyComponent },
{ path: 'shoppingcart-component', component: ShoppingcartComponent },
{ path: 'myaccount-component', component: MyaccountComponent },
{ path: 'allergen-component', component: AllergenComponent },
];
