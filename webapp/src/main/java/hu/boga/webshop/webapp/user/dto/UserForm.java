/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package hu.boga.webshop.webapp.user.dto;

import hu.boga.webshop.core.user.model.Role;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Data;

/**
 * @author user
 */
@Data
@Builder
public class UserForm {

  @NotNull(message = "email address must not be null")
  private String email;

  private String firstName;

  private String lastName;

  private String password;

  private String phone1;

  private String phone1Extension;

  private String phone2;

  private String phone2Extension;

  @NotNull(message = "shipping address must not be null")
  @Valid
  private Address shippingAddress;

  private Address billingAddress;

  private Role[] roles;

}
