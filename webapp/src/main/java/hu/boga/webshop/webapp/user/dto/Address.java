package hu.boga.webshop.webapp.user.dto;

import hu.boga.webshop.core.user.model.enums.AddressType;
import lombok.Data;

@Data
public class Address {
  private String addressName;

  private String city;

  private String country;

  private String door;

  private String floor;

  private String number;

  private String street;

  private String street2;

  private String zip;

}
