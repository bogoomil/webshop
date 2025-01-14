package hu.boga.webshop.core.menu.model;

import lombok.Data;

/**
 * @author user
 */
@Data
public class Tetel {

  private int price;

  private String image;

  private Kategoria kategoria;

  private String description;

  private String name;

  private Integer packagingFee;
}
