/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package hu.boga.webshop.persistence.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
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
@Table(name = "rendelestetel")
@Data
public class RendelestetelEntity {

  @Column(name = "ar")
  private double ar;

  @Id
  @Column(name = "id", nullable = false)
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column
  private String itemCode;

  @Column(name = "mennyiseg", nullable = false)
  private double mennyiseg;

  @Column(name = "nev")
  private String nev;

  @JoinColumn(name = "rendelesId", referencedColumnName = "id")
  @ManyToOne
  private RendelesEntity rendeles;

  @Column(name = "csomagolas")
  private Integer csomagolasiDij;

}
