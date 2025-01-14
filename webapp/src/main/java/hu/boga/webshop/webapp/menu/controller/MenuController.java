package hu.boga.webshop.webapp.menu.controller;

import hu.boga.webshop.core.menu.interactor.MenuInteractor;
import hu.boga.webshop.webapp.menu.dto.ItemDto;
import hu.boga.webshop.webapp.menu.dto.ItemDtoMapper;
import hu.boga.webshop.webapp.menu.dto.KategoriaDto;
import hu.boga.webshop.webapp.menu.dto.KategoriaDtoMapper;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class MenuController {

  private final MenuInteractor menuInteractor;
  private final KategoriaDtoMapper kategoriaDtoMapper;
  private final ItemDtoMapper itemDtoMapper;

  @GetMapping("/public/categories/all")
  public ResponseEntity<List<KategoriaDto>> getAllCategories(){
    List<KategoriaDto> l = menuInteractor.getAllCategories().stream().map(kategoria -> kategoriaDtoMapper.toKategoriaDto(kategoria)).toList();
    return ResponseEntity.ok(l);
  }

  @GetMapping("/public/items/{categoryName}")
  public ResponseEntity<List<ItemDto>> getItemsByCategoryName(@PathVariable String categoryName){
    List<ItemDto> l = menuInteractor.getITemsByCategoryName(categoryName).stream().map(tetel -> itemDtoMapper.toItemDto(tetel)).toList();
    return ResponseEntity.ok(l);
  }
}
