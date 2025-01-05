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
        .firstName(signupForm.getFirstName())
        .lastName(signupForm.getLastName())
        .password(encoder.encode(signupForm.getPassword()))
        .addresses(getAddresses(signupForm))
        .build();
  }

  private Collection<Address> getAddresses(SignupForm signupForm) {
    return List.of(
        Address.builder()
            .city(signupForm.getCityBilling())
            .country(signupForm.getCountryBilling())
            .door(signupForm.getDoorBilling())
            .floor(signupForm.getFloorBilling())
            .number(signupForm.getNumberBilling())
            .street(signupForm.getStreetBilling())
            .street2(signupForm.getStreet2Billing())
            .type(AddressType.ADDRESS_TYPE_BILLING)
            .zip(signupForm.getZipBilling())
            .build(),
        Address.builder()
            .city(signupForm.getCityShipping())
            .country(signupForm.getCountryShipping())
            .door(signupForm.getDoorShipping())
            .floor(signupForm.getFloorShipping())
            .number(signupForm.getNumberShipping())
            .street(signupForm.getStreetShipping())
            .street2(signupForm.getStreet2Shipping())
            .type(AddressType.ADDRESS_TYPE_SHIPPING)
            .zip(signupForm.getZipShipping())
            .build());
  }

  @GetMapping("/private/userlist")
  @PreAuthorize("hasAnyRole('ROLE_USER')")
  public List<String> userList() {
    return userInteractor.getAllUsers().stream().map(User::getEmail).toList();
  }
}
