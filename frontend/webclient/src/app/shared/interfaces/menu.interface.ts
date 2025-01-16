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

export interface CartItem {
    name: string;
    price: number;
    packagingFee: number;
}

export interface Cart {
    products: CartItem[];
    error: string | null;
}

export interface GroupedCartResult {
    items: Array<CartItem & { count: number }>;
}