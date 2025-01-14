package hu.boga.webshop.core.menu.interactor;

import hu.boga.webshop.core.menu.gateway.MenuGateway;
import hu.boga.webshop.core.menu.model.Kategoria;
import hu.boga.webshop.core.menu.model.Tetel;
import java.util.List;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class MenuInteractor {

  private final MenuGateway menuGateway;

  public List<Kategoria> getAllCategories(){
    return menuGateway.getAllCategories();
  }

  public List<Tetel> getITemsByCategoryName(String categoryName){
    return menuGateway.getItemsByCategoryName(categoryName);
  }

}
