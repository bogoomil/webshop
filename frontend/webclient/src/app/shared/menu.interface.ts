export interface Kategoria {
    name: string;
}

export interface Item {
    name: string;
    description: string;
    price: number;
    image: string;
    packagingFee: number;
}

export interface Cart {
    products: Item[];
    error: string | null;
    
}


export interface AppStateInterface {
    products: Cart;
}