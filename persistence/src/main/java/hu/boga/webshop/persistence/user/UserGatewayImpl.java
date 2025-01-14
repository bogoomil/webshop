package hu.boga.webshop.persistence.user;

import hu.boga.webshop.core.user.gateway.UserGateway;
import hu.boga.webshop.core.user.model.User;
import hu.boga.webshop.core.user.model.enums.AddressType;
import hu.boga.webshop.persistence.mapper.UserMapper;
import hu.boga.webshop.persistence.user.model.AddressEntity;
import hu.boga.webshop.persistence.model.RoleEntity;
import hu.boga.webshop.persistence.user.model.UserEntity;
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
  public User saveUser(User user) {
    UserEntity userEntity = mapper.toUserEntity(user);
    userEntity.getAddressEntities().forEach(addressEntity -> addressEntity.setUserEntity(userEntity));
    userRepository.findByEmail(user.getEmail()).ifPresentOrElse(existingUserEntity -> {
      mergeExistingUserData(existingUserEntity, userEntity);
    }, () -> {
      mapRoles(user, userEntity);
    });
    return mapper.toUser(userRepository.save(userEntity));
  }

  private void mergeExistingUserData(UserEntity existingUserEntity, UserEntity userEntity) {
    userEntity.setId(existingUserEntity.getId());
    userEntity.getAddressEntityByType(AddressType.ADDRESS_TYPE_BILLING).ifPresent(addressEntity -> addressEntity.setAddressId(
        existingUserEntity.getAddressEntityByType(AddressType.ADDRESS_TYPE_BILLING).map(
        AddressEntity::getAddressId).orElse(null)));
    userEntity.getAddressEntityByType(AddressType.ADDRESS_TYPE_SHIPPING).ifPresent(addressEntity -> addressEntity.setAddressId(
        existingUserEntity.getAddressEntityByType(AddressType.ADDRESS_TYPE_SHIPPING).map(
        AddressEntity::getAddressId).orElse(null)));
    userEntity.setPassword(existingUserEntity.getPassword());
    List<String> roleNames = existingUserEntity.getRoles().stream().map(roleEntity -> roleEntity.getName()).toList();
    List<RoleEntity> roles = roleRepository.getRolesByNames(roleNames);
    userEntity.setRoles(roles);
  }


  private void mapRoles(User user, UserEntity userEntity) {
    List<String> roleNames = user.getRoles().stream().map(role -> role.name()).toList();
    userEntity.setRoles(roleRepository.getRolesByNames(roleNames));
  }
}
