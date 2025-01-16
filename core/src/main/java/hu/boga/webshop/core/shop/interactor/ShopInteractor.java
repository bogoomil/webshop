package hu.boga.webshop.core.shop.interactor;

import hu.boga.webshop.core.shop.gateway.ShopGateway;
import hu.boga.webshop.core.shop.model.Shop;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class ShopInteractor {
  private final ShopGateway gateway;

  public Shop getShop(){
    return gateway.getShop();
  }
}
