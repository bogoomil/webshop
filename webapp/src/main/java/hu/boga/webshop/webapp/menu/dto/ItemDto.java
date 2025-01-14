package hu.boga.webshop.webapp.menu.dto;

import lombok.Data;

@Data
public class ItemDto {
  private String name;
  private String description;
  private Integer price;
  private String image;
  private Integer packagingFee;
}
