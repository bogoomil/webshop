package hu.boga.webshop.webapp.config;

import hu.boga.webshop.core.user.gateway.UserGateway;
import hu.boga.webshop.core.user.interactor.UserInteractor;
import hu.boga.webshop.persistence.repos.RoleRepository;
import hu.boga.webshop.persistence.repos.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@RequiredArgsConstructor
@ComponentScan(basePackages = "hu.boga.webshop.persistence")
public class BeanConfig {

  final UserRepository userRepository;
  final RoleRepository roleRepository;

  @Bean
  UserInteractor getUserInteractor(@Autowired UserGateway userGateway){
    return new UserInteractor(userGateway);
  }

  @Bean
  public PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
  }
}
