/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package hu.boga.webshop.persistence.model;

import hu.boga.webshop.persistence.user.model.UserEntity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import java.util.Collection;
import lombok.Data;

/**
 * @author user
 */
@Entity
@Table(name = "role")
@Data
public class RoleEntity {

  @Column(name = "name")
  private String name;
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "role_id")
  private Long id;

  @ManyToMany(mappedBy = "roles")
  private Collection<UserEntity> userEntities;

}
