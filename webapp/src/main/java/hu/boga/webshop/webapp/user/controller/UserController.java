package hu.boga.webshop.webapp.user.controller;

import hu.boga.webshop.core.user.exceptions.CoreException;
import hu.boga.webshop.core.user.interactor.UserInteractor;
import hu.boga.webshop.core.user.model.Address;
import hu.boga.webshop.core.user.model.User;
import hu.boga.webshop.core.user.model.enums.AddressType;
import hu.boga.webshop.webapp.user.dto.UserDtoMapper;
import hu.boga.webshop.webapp.user.dto.UserForm;
import java.util.Collection;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class UserController {

  final UserInteractor userInteractor;
  final PasswordEncoder encoder;
  final UserDtoMapper userDtoMapper;

  @PostMapping("/public/signup")
  public ResponseEntity<Void> signupUser(@Validated @RequestBody UserForm userForm) {
    User user = getUserFromSignupForm(userForm);
    user.setPassword(encoder.encode(userForm.getPassword()));
    userInteractor.registerUser(user);
    return ResponseEntity.ok().build();
  }

  @PostMapping("/private/update")
  public ResponseEntity<UserForm> updateUser(@Validated @RequestBody UserForm userForm) {
    User user = userInteractor.updateUser(getUserFromSignupForm(userForm));
    return ResponseEntity.ok().body(userDtoMapper.toUserForm(user));
  }

  private User getUserFromSignupForm(UserForm userForm) {
    return User.builder()
        .email(userForm.getEmail())
        .firstName(userForm.getFirstName())
        .lastName(userForm.getLastName())
        .addresses(getAddresses(userForm))
        .phone1(userForm.getPhone1())
        .phone1Extension(userForm.getPhone1Extension())
        .build();
  }

  private Collection<Address> getAddresses(UserForm userForm) {
    return List.of(
        Address.builder()
            .addressName(userForm.getBillingAddress().getAddressName())
            .city(userForm.getBillingAddress().getCity())
            .country(userForm.getBillingAddress().getCountry())
            .door(userForm.getBillingAddress().getDoor())
            .floor(userForm.getBillingAddress().getFloor())
            .number(userForm.getBillingAddress().getNumber())
            .street(userForm.getBillingAddress().getStreet())
            .street2(userForm.getBillingAddress().getStreet2())
            .type(AddressType.ADDRESS_TYPE_BILLING)
            .zip(userForm.getBillingAddress().getZip())
            .build(),
        Address.builder()
            .addressName(userForm.getShippingAddress().getAddressName())
            .city(userForm.getShippingAddress().getCity())
            .country(userForm.getShippingAddress().getCountry())
            .door(userForm.getShippingAddress().getDoor())
            .floor(userForm.getShippingAddress().getFloor())
            .number(userForm.getShippingAddress().getNumber())
            .street(userForm.getShippingAddress().getStreet())
            .street2(userForm.getShippingAddress().getStreet2())
            .type(AddressType.ADDRESS_TYPE_SHIPPING)
            .zip(userForm.getShippingAddress().getZip())
            .build());
  }

  @GetMapping("/private/user/{email}")
  @PreAuthorize("hasAnyRole('ROLE_USER', 'ROLE_ADMIN')")
  public UserForm getUserByEmail(@PathVariable String email) {
    return userInteractor.findByEmail(email).map(user -> convertUserToUserForm(user)).orElseThrow(() -> new CoreException("user not found"));
  }

  private UserForm convertUserToUserForm(User user) {
    return userDtoMapper.toUserForm(user);
  }
}
