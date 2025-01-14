package hu.boga.webshop.core.menu.gateway;

import hu.boga.webshop.core.menu.model.Kategoria;
import hu.boga.webshop.core.menu.model.Tetel;
import java.util.List;

public interface MenuGateway {
  List<Kategoria> getAllCategories();
  List<Tetel> getItemsByCategoryName(String categoryName);
}
