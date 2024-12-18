package hu.boga.webshop.persistence.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import java.time.LocalDate;
import java.util.List;
import lombok.Data;


@Entity
@Table(name = "shop")
@Data
public class ShopEntity {

  @Column(name = "alwaysOpen")
  private Boolean alwaysOpen = Boolean.FALSE;

  @Column
  private Integer closeHourFri;

  @Column
  private Integer closeHourMon;

  @Column
  private Integer closeHourSat;

  @Column
  private Integer closeHourSun;

  @Column
  private Integer closeHourThu;

  @Column
  private Integer closeHourTue;

  @Column
  private Integer closeHourWed;

  @Column
  private Integer closeMinFri;

  @Column
  private Integer closeMinMon;

  @Column
  private Integer closeMinSat;

  @Column
  private Integer closeMinSun;

  @Column
  private Integer closeMinThu;

  @Column
  private Integer closeMinTue;

  @Column
  private Integer closeMinWed;

  @Id
  @Column(name = "id", nullable = false)
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(name = "minOrder")
  private Integer minOrder;

  @Column(name = "open")
  private Boolean open = Boolean.TRUE;

  @Column(name = "temp_closed")
  private Boolean tempClosed = Boolean.FALSE;

  @Column
  private Integer openHourFri;

  @Column
  private Integer openHourMon;

  @Column
  private Integer openHourSat;

  @Column
  private Integer openHourSun;

  @Column
  private Integer openHourThu;

  @Column
  private Integer openHourTue;

  @Column
  private Integer openHourWed;

  @Column
  private Integer openMinFri;

  @Column
  private Integer openMinMon;

  @Column
  private Integer openMinSat;

  @Column
  private Integer openMinSun;

  @Column
  private Integer openMinThu;

  @Column
  private Integer openMinTue;

  @Column
  private Integer openMinWed;

  @Column
  private Boolean otpBankCardEnabled = Boolean.FALSE;

  @Column
  private String otpPosId;

  @Column
  private Boolean otpSzepCardEnabled = Boolean.FALSE;

  @Column
  private String otpSzepPocketId;

  @Column
  private String otpSzepPosId;

  @Column(length = 2048)
  private String receiptFooter;

  @Column(length = 2048)
  private String receiptHeader;

  @OneToMany(mappedBy = "shop", fetch = FetchType.EAGER)
  private List<ServiceAreaEntity> serviceAreas;

  @Column
  private LocalDate closedUntil;

}
