export interface Order {
    afasSzamla?: boolean;
    billingAddressName?: string;
    billingCity?: string;
    billingCountry?: string;
    billingDoor?: string;
    billingFloor?: string;
    billingNumber?: string;
    billingPostalCode?: string;
    billingStreet?: string;
    city?: string;
    country?: string;
    door?: string;
    email?: string;
    firstName?: string;
    fizetesiMod?: string;
    floor?: string;
    fullName?: string;
    lastName?: string;
    netto?: number;
    note?: string;
    number?: string;
    nyomtatva?: boolean;
    phone?: string;
    postalCode?: string;
    sameAsShippingAddress?: boolean;
    shopOrder?: boolean;
    street?: string;
    tetelek?: OrderItem[];
    total?: number;
    transitCost?: number;
    addressName?: string;
    customTransitCost?: number;
    sumCsomagolasiDij?: number;
}

export interface OrderItem {
    ar?: number;
    mennyiseg?: number;
    nev?: string;
    csomagolasiDij?: number;
}