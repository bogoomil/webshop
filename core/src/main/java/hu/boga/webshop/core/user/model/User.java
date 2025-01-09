/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package hu.boga.webshop.core.user.model;

import java.util.ArrayList;
import java.util.Collection;
import lombok.Builder;
import lombok.Data;

/**
 * @author user
 */
@Data
@Builder
public class User {

  private Collection<Address> addresses = new ArrayList<>();

  private String username;

  private String email;

  private String firstName;

  private String lastName;

  private String password;

  private String phone1;

  private String phone1Extension;

  private String phone2;

  private String phone2Extension;

  private Collection<Role> roles = new ArrayList<>(0);
}
