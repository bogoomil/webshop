package hu.boga.webshop.core.user.gateway;

import hu.boga.webshop.core.user.model.User;
import java.util.List;

public interface UserGateway {
  List<User> getAllUsers();
}
