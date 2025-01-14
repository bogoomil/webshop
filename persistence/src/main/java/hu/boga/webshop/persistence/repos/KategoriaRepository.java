package hu.boga.webshop.persistence.repos;

import hu.boga.webshop.persistence.menu.model.KategoriaEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface KategoriaRepository extends JpaRepository<KategoriaEntity, Long> {

}
