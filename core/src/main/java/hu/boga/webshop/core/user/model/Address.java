/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package hu.boga.webshop.core.user.model;

import hu.boga.webshop.core.user.model.enums.AddressType;
import lombok.Builder;
import lombok.Data;

/**
 * @author user
 */
@Data
@Builder
public class Address {

  private String addressName;

  private String city;

  private String country;

  private String door;

  private String floor;

  private String number;

  private String street;

  private String street2;

  private AddressType type;

  private String zip;


}
