package hu.boga.webshop.persistence.enums;

import lombok.Getter;

@Getter
public enum ShopStatus  {
    OPEN("Nyitva"),
    CLOSED("Zárva"),
    TEMPORARILY_CLOSED("Ideiglenesen zárva");

    private String megnevezes;

    private ShopStatus(String megnevezes) {
        this.megnevezes = megnevezes;
    }


}
