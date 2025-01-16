package hu.boga.webshop.webapp.shop.controller;

import hu.boga.webshop.core.shop.interactor.ShopInteractor;
import hu.boga.webshop.webapp.shop.dto.ShopDto;
import hu.boga.webshop.webapp.shop.dto.ShopDtoMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/public")
@RequiredArgsConstructor
public class ShopController {

  private final ShopDtoMapper mapper;
  private final ShopInteractor shopInteractor;


  @GetMapping("/shop")
  ResponseEntity<ShopDto> getShop(){
    return ResponseEntity.ok(mapper.toShopDto(shopInteractor.getShop()));
  }
}
