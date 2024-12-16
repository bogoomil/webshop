/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package hu.boga.webshop.persistence.model;

import hu.boga.webshop.persistence.enums.OrderStatus;
import hu.boga.webshop.persistence.enums.PaymentMethodType;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;
import java.time.LocalDate;
import java.util.Collection;
import lombok.Data;

/**
 *
 * @author user
 */
@Entity
@Table(name = "rendeles")
@Data
public class Rendeles {
    @Column
    private Boolean afasSzamla = Boolean.FALSE;

    @Column
    private String billingAddressName;

    @Column
    private String billingCity;

    @Column
    private String billingCountry;

    @Column
    private String billingDoor;

    @Column
    private String billingFloor;

    @Column
    private String billingNumber;

    @Column
    private String billingPostalCode;

    @Column
    private String billingStreet;

    @Column
    private String city;

    @Column
    private String country;

    @Column
    private String customerId;

    @Column
    private String door;

    @Column
    private String email;

    @Column
    private String firstName;

    @Enumerated(EnumType.STRING)
    private PaymentMethodType fizetesiMod;

    @Column
    private String floor;

    @Column
    private String fullName;

    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "idoPont", nullable = false)
    private LocalDate idoPont ;

    @Column
    private String lastName;

    @Column
    private String netPincerDate;
    @Column
    private double netto;

    @Column(name = "note", length = 2048)
    private String note;

    @Column
    private String number;

    @Column(name = "nyomtatva")
    private Integer nyomtatva;

    @Column
    private String orderId;

    @Transient
    private String password;

    @Column
    private String phone;

    @Column
    private String postalCode;

    @Transient
    private Boolean registerNew = Boolean.FALSE;

    @Column
    private Boolean sameAsShippingAddress = Boolean.TRUE;

    @ManyToOne
    @JoinColumn(name = "shopId")
    private Shop shop;

    @Transient
    private Boolean shopOrder = Boolean.FALSE;

    @Column
    private String source;

    @Enumerated(EnumType.STRING)
    private OrderStatus statusz;

    @Column
    private String street;

    @OneToMany(mappedBy = "rendeles", cascade = CascadeType.ALL)
    private Collection<Rendelestetel> tetelek;

    @Column
    private double total;

    @Column(name = "transitCost")
    private double transitCost;

    @Column
    private String addressName;

    @Column
    private Long userId;

    @Transient
    private Long customTransitCost;

    @Column
    private Integer sumCsomagolasiDij;

}
