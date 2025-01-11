package hu.boga.webshop.core.user.interactor;

import hu.boga.webshop.core.user.exceptions.CoreException;
import hu.boga.webshop.core.user.gateway.UserGateway;
import hu.boga.webshop.core.user.model.User;
import java.util.List;
import java.util.Optional;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class UserInteractor {
  final UserGateway userGateway;

  public List<User> getAllUsers(){
    return this.userGateway.getAllUsers();
  }

  public Optional<User> findByEmail(String email){
    return this.userGateway.findByEmail(email);
  }

  public void registerUser(User user) {
    validateBeforeRegistration(user);
    this.userGateway.registerUser(user);
  }

  private void validateBeforeRegistration(User user) {
    if(userGateway.findByEmail(user.getEmail()).isPresent()){
      throw new CoreException("email address already registered");
    };
  }
}
