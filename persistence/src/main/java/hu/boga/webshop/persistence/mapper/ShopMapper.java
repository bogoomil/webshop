package hu.boga.webshop.persistence.mapper;

import hu.boga.webshop.core.shop.model.Shop;
import hu.boga.webshop.persistence.shop.model.ShopEntity;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper
public interface ShopMapper {

  @Mapping(target = "serviceAreas", source = "serviceAreas")
  Shop toShop(ShopEntity shopEntity);

}
