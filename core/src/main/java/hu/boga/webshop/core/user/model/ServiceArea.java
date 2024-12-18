package hu.boga.webshop.core.user.model;

import lombok.Data;

@Data
public class ServiceArea {

  private String city;

  private String country;

  private Long id;

  private Shop shop;

  private int transitCost;

  private String zip;
}
