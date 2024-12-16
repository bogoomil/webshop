package hu.boga.webshop.persistence.enums;

import lombok.Getter;

@Getter
public enum PaymentMethodType {
    PM_BANKCARD_TERMINAL("Bankkártya"),
    PM_CASH("Készpénz"),
    PM_OTP_SZEPCARD_ONLINE("OTP szépkártya"),
    PM_KH_SZEPCARD_ONLINE("K&H szépkártya"),
    PM_MKB_SZEPCARD_ONLINE("MKB szépkártya");

    private String megnevezes;

    PaymentMethodType(String megnevezes) {
        this.megnevezes = megnevezes;
    }

}
