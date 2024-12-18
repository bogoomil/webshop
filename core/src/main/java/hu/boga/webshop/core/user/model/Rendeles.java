/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package hu.boga.webshop.core.user.model;

import hu.boga.webshop.core.user.model.enums.OrderStatus;
import hu.boga.webshop.core.user.model.enums.PaymentMethodType;
import java.time.LocalDate;
import java.util.Collection;
import lombok.Data;

/**
 * @author user
 */
@Data
public class Rendeles {

  private Boolean afasSzamla = Boolean.FALSE;

  private String billingAddressName;

  private String billingCity;

  private String billingCountry;

  private String billingDoor;

  private String billingFloor;

  private String billingNumber;

  private String billingPostalCode;

  private String billingStreet;

  private String city;

  private String country;

  private String customerId;

  private String door;

  private String email;

  private String firstName;

  private PaymentMethodType fizetesiMod;

  private String floor;

  private String fullName;

  private LocalDate idoPont;

  private String lastName;

  private String netPincerDate;

  private double netto;

  private String note;

  private String number;

  private Integer nyomtatva;

  private String orderId;

  private String password;

  private String phone;

  private String postalCode;

  private Boolean registerNew = Boolean.FALSE;

  private Boolean sameAsShippingAddress = Boolean.TRUE;

  private Shop shop;

  private Boolean shopOrder = Boolean.FALSE;

  private String source;

  private OrderStatus statusz;

  private String street;

  private Collection<Rendelestetel> tetelek;

  private double total;

  private double transitCost;

  private String addressName;

  private Long userId;

  private Long customTransitCost;

  private Integer sumCsomagolasiDij;

}
