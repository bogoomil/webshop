package hu.boga.webshop.persistence.mapper;

import hu.boga.webshop.core.user.model.Address;
import hu.boga.webshop.core.user.model.Role;
import hu.boga.webshop.core.user.model.User;
import hu.boga.webshop.persistence.user.model.AddressEntity;
import hu.boga.webshop.persistence.model.RoleEntity;
import hu.boga.webshop.persistence.user.model.UserEntity;
import java.util.Collection;
import java.util.List;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper
public interface UserMapper {
  @Mapping(target = "addresses", expression = "java(toAddressList(userEntity.getAddressEntities()))")
  @Mapping(target = "roles", expression = "java(toRoleList(userEntity.getRoles()))")
  User toUser(UserEntity userEntity);

  Address toAddress(AddressEntity addressEntity);

  default List<Address> toAddressList(Collection<AddressEntity> addressEntities){
    return addressEntities.stream().map(this::toAddress).toList();
  }

  default List<Role> toRoleList(List<RoleEntity> roleEntities){
    return roleEntities.stream().map(roleEntity -> Role.valueOf(roleEntity.getName())).toList();
  }

  @Mapping(target = "addressEntities", expression = "java(toAddressEntityList(user.getAddresses()))")
  @Mapping(target = "id", ignore = true)
  @Mapping(target = "roles", ignore = true)
  UserEntity toUserEntity(User user);

  @Mapping(target = "addressId", ignore = true)
  @Mapping(target = "userEntity", ignore = true)
  AddressEntity toAddressEntity(Address address);

  default List<AddressEntity> toAddressEntityList(Collection<Address> addresses){
    return addresses.stream().map(this::toAddressEntity).toList();
  }

//  @Mapping(target = "userEntities", ignore = true)
//  @Mapping(target = "id", ignore = true)
//  RoleEntity toRoleEntity(Role role);
//
//  default List<RoleEntity> toRoleEntityList(Collection<Role> roles){
//    return roles.stream().map(this::toRoleEntity).toList();
//  }
}
