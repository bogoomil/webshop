package hu.boga.webshop.webapp.shop.dto;

import hu.boga.webshop.core.shop.model.Shop;
import org.mapstruct.Mapper;

@Mapper
public interface ShopDtoMapper {
  ShopDto toShopDto(Shop shop);
}
