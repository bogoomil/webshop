/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package hu.boga.webshop.webapp.user.dto;

import hu.boga.webshop.core.user.model.enums.AddressType;
import lombok.Data;

/**
 * @author user
 */
@Data
public class SignupForm {

  private String email;

  private String firstName;

  private String lastName;

  private String password;

  private String phone1;

  private String phone1Extension;

  private String phone2;

  private String phone2Extension;

  private String addressNameBilling;

  private String cityBilling;

  private String countryBilling;

  private String doorBilling;

  private String floorBilling;

  private String numberBilling;

  private String streetBilling;

  private String street2Billing;

  private String zipBilling;

  private String cityShipping;

  private String countryShipping;

  private String doorShipping;

  private String floorShipping;

  private String numberShipping;

  private String streetShipping;

  private String street2Shipping;

  private AddressType typeShipping;

  private String zipShipping;

}
