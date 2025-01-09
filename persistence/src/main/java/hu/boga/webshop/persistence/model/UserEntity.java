/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package hu.boga.webshop.persistence.model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import java.util.ArrayList;
import java.util.Collection;
import lombok.Data;

/**
 * @author user
 */
@Entity
@Table(name = "user")
@Data
public class UserEntity {

  @OneToMany(mappedBy = "userEntity", cascade = CascadeType.ALL)
  private Collection<AddressEntity> addressEntities = new ArrayList<>();

  @Column(name = "username")
  private String username;

  @Column(name = "email")
  private String email;

  @Column(name = "firstName")
  private String firstName;

  @Column(name = "lastName")
  private String lastName;

  @Column(name = "password")
  private String password;

  @Column(name = "phone1")
  private String phone1;

  @Column(name = "phone1Extension")
  private String phone1Extension;

  @Column(name = "phone2")
  private String phone2;

  @Column(name = "phone2Extension")
  private String phone2Extension;

  @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
  @JoinTable(name = "users_roles", joinColumns = @JoinColumn(name = "user_id", referencedColumnName = "user_id"), inverseJoinColumns = @JoinColumn(name = "role_id", referencedColumnName = "role_id"))
  private Collection<RoleEntity> roles = new ArrayList<>(0);

  @Id
  @Column(name = "user_id")
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;


}
