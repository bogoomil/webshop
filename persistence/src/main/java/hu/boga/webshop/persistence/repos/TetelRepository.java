package hu.boga.webshop.persistence.repos;

import hu.boga.webshop.persistence.menu.model.TetelEntity;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TetelRepository extends JpaRepository<TetelEntity, Long> {
  List<TetelEntity> findByKategoriaName(String name);
}
