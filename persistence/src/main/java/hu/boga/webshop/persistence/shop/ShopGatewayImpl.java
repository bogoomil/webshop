package hu.boga.webshop.persistence.shop;

import hu.boga.webshop.core.shop.gateway.ShopGateway;
import hu.boga.webshop.core.shop.model.Shop;
import hu.boga.webshop.persistence.mapper.ShopMapper;
import hu.boga.webshop.persistence.repos.ShopRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Service
@Transactional
public class ShopGatewayImpl implements ShopGateway {

  private final ShopRepository repository;
  private final ShopMapper mapper;
  @Override
  public Shop getShop() {
    return repository.findAll().stream().findAny().map(shopEntity -> mapper.toShop(shopEntity)).orElse(null);
  }
}
