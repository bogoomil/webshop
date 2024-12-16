package hu.boga.webshop.persistence.user;

import hu.boga.webshop.core.user.gateway.UserGateway;
import hu.boga.webshop.core.user.model.User;
import hu.boga.webshop.persistence.model.UserEntity;
import hu.boga.webshop.persistence.repos.UserRepository;
import java.util.List;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class UserGatewayImpl implements UserGateway {

  final UserRepository userRepository;

  @Override
  public List<User> getAllUsers() {
    List<UserEntity> entities = userRepository.findAll();
    return List.of(User.builder()
            .username("zergeszar")
            .password("pinazsir")
        .build());
  }
}
