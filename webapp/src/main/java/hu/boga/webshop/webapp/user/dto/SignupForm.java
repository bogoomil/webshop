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

  private String username;

  private String firstName;

  private String lastName;

  private String password;

  private String phone1;

  private String phone1Extension;

  private String phone2;

  private String phone2Extension;

  private Address shippingAddress;

  private Address billingAddress;

}
