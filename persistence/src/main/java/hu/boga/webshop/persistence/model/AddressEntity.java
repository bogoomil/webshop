/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package hu.boga.webshop.persistence.model;

import hu.boga.webshop.core.user.model.enums.AddressType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

/**
 * @author user
 */
@Entity
@Table(name = "address")
@Data
public class AddressEntity {

  @Id
  @Column(name = "addressId", nullable = false)
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long addressId;

  @Column(name = "addressName")
  private String addressName;

  @Column(name = "city")
  private String city;

  @Column(name = "country")
  private String country;

  @Column(name = "door")
  private String door;

  @Column(name = "floor")
  private String floor;

  @Column(name = "number")
  private String number;

  @Column(name = "street")
  private String street;

  @Column(name = "street2")
  private String street2;

  @Enumerated(value = EnumType.STRING)
  private AddressType type;

  @ManyToOne
  @JoinColumn(name = "user_id")
  private UserEntity userEntity;

  @Column(name = "zip")
  private String zip;
}
