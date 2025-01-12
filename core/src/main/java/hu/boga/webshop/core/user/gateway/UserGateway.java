package hu.boga.webshop.core.user.gateway;

import hu.boga.webshop.core.user.model.User;
import java.util.List;
import java.util.Optional;

public interface UserGateway {
  List<User> getAllUsers();

  Optional<User> findByEmail(String email);

  User saveUser(User user);
}
