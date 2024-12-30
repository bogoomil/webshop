package hu.boga.webshop.persistence.user;

import hu.boga.webshop.core.user.gateway.UserGateway;
import hu.boga.webshop.core.user.model.User;
import hu.boga.webshop.persistence.mapper.UserMapper;
import hu.boga.webshop.persistence.model.UserEntity;
import hu.boga.webshop.persistence.repos.RoleRepository;
import hu.boga.webshop.persistence.repos.UserRepository;
import java.util.List;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Service
@Transactional
public class UserGatewayImpl implements UserGateway {

  final UserRepository userRepository;
  final RoleRepository roleRepository;
  final UserMapper mapper;

  @Override
  public List<User> getAllUsers() {
    List<UserEntity> entities = userRepository.findAll();
    return entities.stream().map(mapper::toUser).toList();
  }

  @Override
  public Optional<User> findByEmail(String email) {
    return userRepository.findByEmail(email).map(mapper::toUser);
  }

  @Override
  public void registerUser(User user) {
    UserEntity userEntity = mapper.toUserEntity(user);
    userEntity.getAddressEntities().forEach(addressEntity -> addressEntity.setUserEntity(userEntity));
    userEntity.setRoles(List.of(roleRepository.findByName("ROLE_USER")));
    userRepository.save(userEntity);
  }
}
