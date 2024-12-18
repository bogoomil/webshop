/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package hu.boga.webshop.core.user.model;

import lombok.Data;

/**
 * @author user
 */
@Data
public class Rendelestetel {

  private double ar;

  private String itemCode;

  private double mennyiseg;

  private String nev;

  private Rendeles rendeles;

  private Integer csomagolasiDij;
}
