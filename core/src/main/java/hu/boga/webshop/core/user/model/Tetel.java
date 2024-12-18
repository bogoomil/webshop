package hu.boga.webshop.core.user.model;

import lombok.Data;

/**
 * @author user
 */
@Data
public class Tetel {

  private int ar;

  private Image image;

  private Kategoria kategoria;

  private String leiras;

  private String megnevezes;

  private Integer csomagolasiDij;
}
