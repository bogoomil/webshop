package hu.boga.webshop.webapp.user.controller;

import hu.boga.webshop.core.user.interactor.UserInteractor;
import hu.boga.webshop.core.user.model.Address;
import hu.boga.webshop.core.user.model.User;
import hu.boga.webshop.core.user.model.enums.AddressType;
import hu.boga.webshop.webapp.user.dto.SignupForm;
import java.util.Collection;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
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

  @PostMapping("/public/signup")
  public ResponseEntity<Void> signup(@RequestBody SignupForm signupForm) {
    userInteractor.registerUser(getUserFromSignupForm(signupForm));
    return ResponseEntity.ok().build();
  }

  private User getUserFromSignupForm(SignupForm signupForm) {
    return User.builder()
        .email(signupForm.getEmail())
        .username(signupForm.getUsername())
        .firstName(signupForm.getFirstName())
        .lastName(signupForm.getLastName())
        .password(encoder.encode(signupForm.getPassword()))
        .addresses(getAddresses(signupForm))
        .build();
  }

  private Collection<Address> getAddresses(SignupForm signupForm) {
    return List.of(
        Address.builder()
            .city(signupForm.getBillingAddress().getCity())
            .country(signupForm.getBillingAddress().getCountry())
            .door(signupForm.getBillingAddress().getDoor())
            .floor(signupForm.getBillingAddress().getFloor())
            .number(signupForm.getBillingAddress().getNumber())
            .street(signupForm.getBillingAddress().getStreet())
            .street2(signupForm.getBillingAddress().getStreet2())
            .type(AddressType.ADDRESS_TYPE_BILLING)
            .zip(signupForm.getBillingAddress().getZip())
            .build(),
        Address.builder()
            .city(signupForm.getShippingAddress().getCity())
            .country(signupForm.getShippingAddress().getCountry())
            .door(signupForm.getShippingAddress().getDoor())
            .floor(signupForm.getShippingAddress().getFloor())
            .number(signupForm.getShippingAddress().getNumber())
            .street(signupForm.getShippingAddress().getStreet())
            .street2(signupForm.getShippingAddress().getStreet2())
            .type(AddressType.ADDRESS_TYPE_SHIPPING)
            .zip(signupForm.getShippingAddress().getZip())
            .build());
  }

  @GetMapping("/private/userlist")
  @PreAuthorize("hasAnyRole('ROLE_USER')")
  public List<String> userList() {
    return userInteractor.getAllUsers().stream().map(User::getEmail).toList();
  }
}
