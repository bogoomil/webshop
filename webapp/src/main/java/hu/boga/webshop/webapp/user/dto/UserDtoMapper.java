package hu.boga.webshop.webapp.user.dto;

import hu.boga.webshop.core.user.model.User;
import hu.boga.webshop.core.user.model.enums.AddressType;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper
public interface UserDtoMapper {

  @Mapping(target = "shippingAddress", expression = "java(getAddress(user, hu.boga.webshop.core.user.model.enums.AddressType.ADDRESS_TYPE_SHIPPING))")
  @Mapping(target = "billingAddress", expression = "java(getAddress(user, hu.boga.webshop.core.user.model.enums.AddressType.ADDRESS_TYPE_BILLING))")
  @Mapping(target = "password", ignore = true)
  UserForm toUserForm(User user);

  Address toAddress(hu.boga.webshop.core.user.model.Address address);

  default Address getAddress(User user, AddressType type){
    return user.getAddresses().stream().filter(address -> type.equals(address.getType())).findAny().map(a -> toAddress(a)).orElse(null);
  }
}
