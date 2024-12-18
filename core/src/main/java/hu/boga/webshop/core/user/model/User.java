/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package hu.boga.webshop.core.user.model;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collection;
import lombok.Data;

/**
 * @author user
 */
@Data
public class User {

  private Collection<Address> addresses = new ArrayList<>();

  private String email;

  private String firstName;

  private String lastName;

  private String loginName;

  private String password;

  private String phone1;

  private String phone1Extension;

  private String phone2;

  private String phone2Extension;

  private String preferredLocale;

  private String jelszoHelyreallitoKod;

  private LocalDateTime jelszoHelyreallitasDatum;

  private Collection<Role> roles = new ArrayList<>(0);
}
