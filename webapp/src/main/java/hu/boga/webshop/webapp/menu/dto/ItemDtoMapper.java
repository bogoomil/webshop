package hu.boga.webshop.webapp.menu.dto;

import hu.boga.webshop.core.menu.model.Tetel;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper
public interface ItemDtoMapper {

  ItemDto toItemDto(Tetel tetel);
}
