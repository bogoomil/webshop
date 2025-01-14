package hu.boga.webshop.persistence.menu;

import hu.boga.webshop.core.menu.gateway.MenuGateway;
import hu.boga.webshop.core.menu.model.Kategoria;
import hu.boga.webshop.core.menu.model.Tetel;
import hu.boga.webshop.persistence.mapper.KategoriaMapper;
import hu.boga.webshop.persistence.repos.KategoriaRepository;
import hu.boga.webshop.persistence.repos.TetelRepository;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Service
@Transactional
public class MenuGatewayImpl implements MenuGateway {

  final KategoriaRepository kategoriaRepository;
  final TetelRepository tetelRepository;

  final KategoriaMapper mapper;

  @Override
  public List<Kategoria> getAllCategories() {
    return this.kategoriaRepository.findAll().stream().map(kategoriaEntity -> mapper.toKategoria(kategoriaEntity)).toList();
  }

  @Override
  public List<Tetel> getItemsByCategoryName(String categoryName) {
    return tetelRepository.findByKategoriaName(categoryName).stream().map(tetelEntity -> mapper.toTetel(tetelEntity)).toList();
  }
}
