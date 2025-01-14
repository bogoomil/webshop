import { FormControl, FormGroup } from "@angular/forms";

export interface Kategoria {
    name: string;
}

export interface Item {
    name: string;
    description: string;
    price: number;
    image: string;
}