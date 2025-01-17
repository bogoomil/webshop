package hu.boga.webshop.persistence.shop.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "servicearea")
@Data
public class ServiceAreaEntity {

  @Column
  private String city;

  @Column
  private String country;

  @Id
  @Column(name = "id", nullable = false)
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @ManyToOne
  @JoinColumn(name = "shop_id")
  private ShopEntity shop;

  @Column
  private int transitCost;

  @Column
  private String zip;

}
