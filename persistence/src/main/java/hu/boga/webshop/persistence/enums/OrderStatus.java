package hu.boga.webshop.persistence.enums;

import lombok.Getter;

@Getter
public enum OrderStatus {
    FIZETES_FOLYAMATBAN("Folyamatban"),
    FIZETES_SIKERTELEN("Sikertelen"),
    FIZETVE("Fizetve"),
    OS_CLOSED("Lezárva"),
    OS_NEW("Új"),
    OS_SENT("Elküldve");

    private String megnevezés;

    OrderStatus(String megnevezes) {
        this.megnevezés = megnevezes;
    }

}
