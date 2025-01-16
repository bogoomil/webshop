package hu.boga.webshop.persistence.repos;

import hu.boga.webshop.persistence.shop.model.ShopEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShopRepository extends JpaRepository<ShopEntity, Long> {

}
