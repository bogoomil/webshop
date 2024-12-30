package hu.boga.webshop.persistence.repos;

import hu.boga.webshop.persistence.model.RoleEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<RoleEntity, Long> {

  RoleEntity findByName(String name);
}
