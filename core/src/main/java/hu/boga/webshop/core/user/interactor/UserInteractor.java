package hu.boga.webshop.core.user.interactor;

import hu.boga.webshop.core.user.model.User;
import hu.boga.webshop.core.user.gateway.UserGateway;
import java.util.List;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class UserInteractor {
  final UserGateway userGateway;

  public List<User> getAllUsers(){
    return this.userGateway.getAllUsers();
  }

}
