package hu.boga.webshop.webapp.menu.dto;

import hu.boga.webshop.core.menu.model.Kategoria;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper
public interface KategoriaDtoMapper {

  KategoriaDto toKategoriaDto(Kategoria kategoria);
}
