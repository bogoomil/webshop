package hu.boga.webshop.webapp.user.dto;

import hu.boga.webshop.core.user.model.enums.AddressType;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import org.springframework.lang.NonNull;

@Data
public class Address {

  private String addressName;

  private String city;

  private String country;

  private String door;

  private String floor;

  @NotBlank(message = "number must not be empty")
  private String number;

  @NotBlank(message = "street must not be empty")
  private String street;

  private String street2;

  @NotBlank(message = "zip must not be empty")
  private String zip;

}
