package hu.boga.webshop.persistence.mapper;

import hu.boga.webshop.core.menu.model.Kategoria;
import hu.boga.webshop.core.menu.model.Tetel;
import hu.boga.webshop.persistence.menu.model.KategoriaEntity;
import hu.boga.webshop.persistence.menu.model.TetelEntity;
import java.util.List;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper
public interface KategoriaMapper {
  @Mapping(target = "tetelek", ignore = true)
  Kategoria toKategoria(KategoriaEntity kategoriaEntity);

  default List<Tetel> toTetelList(List<TetelEntity> tetelEntities){
    return tetelEntities.stream().map(tetelEntity -> toTetel(tetelEntity)).toList();
  }

  Tetel toTetel(TetelEntity tetelEntity);
}
