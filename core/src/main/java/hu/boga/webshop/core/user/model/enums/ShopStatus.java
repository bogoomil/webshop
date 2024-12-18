package hu.boga.webshop.core.user.model.enums;

import lombok.Getter;

@Getter
public enum ShopStatus  {
    OPEN("Nyitva"),
    CLOSED("Zárva"),
    TEMPORARILY_CLOSED("Ideiglenesen zárva");

    private final String megnevezes;

    ShopStatus(String megnevezes) {
        this.megnevezes = megnevezes;
    }


}
