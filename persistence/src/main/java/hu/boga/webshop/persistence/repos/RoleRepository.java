package hu.boga.webshop.persistence.repos;

import hu.boga.webshop.persistence.model.RoleEntity;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface RoleRepository extends JpaRepository<RoleEntity, Long> {

  RoleEntity findByName(String name);

  @Query("SELECT r FROM RoleEntity r WHERE r.name IN :names")
  List<RoleEntity> getRolesByNames(List<String> names);
}
