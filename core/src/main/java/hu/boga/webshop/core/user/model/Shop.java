package hu.boga.webshop.core.user.model;

import java.time.LocalDate;
import java.util.List;
import lombok.Data;


@Data
public class Shop {

  private Boolean alwaysOpen = Boolean.FALSE;

  private Integer closeHourFri;

  private Integer closeHourMon;

  private Integer closeHourSat;

  private Integer closeHourSun;

  private Integer closeHourThu;

  private Integer closeHourTue;

  private Integer closeHourWed;

  private Integer closeMinFri;

  private Integer closeMinMon;

  private Integer closeMinSat;

  private Integer closeMinSun;

  private Integer closeMinThu;

  private Integer closeMinTue;

  private Integer closeMinWed;

  private Integer minOrder;

  private Boolean open = Boolean.TRUE;

  private Boolean tempClosed = Boolean.FALSE;

  private Integer openHourFri;

  private Integer openHourMon;

  private Integer openHourSat;

  private Integer openHourSun;

  private Integer openHourThu;

  private Integer openHourTue;

  private Integer openHourWed;

  private Integer openMinFri;

  private Integer openMinMon;

  private Integer openMinSat;

  private Integer openMinSun;

  private Integer openMinThu;

  private Integer openMinTue;

  private Integer openMinWed;

  private Boolean otpBankCardEnabled = Boolean.FALSE;

  private String otpPosId;

  private Boolean otpSzepCardEnabled = Boolean.FALSE;

  private String otpSzepPocketId;

  private String otpSzepPosId;

  private String receiptFooter;

  private String receiptHeader;

  private List<ServiceArea> serviceAreas;

  private LocalDate closedUntil;
}
