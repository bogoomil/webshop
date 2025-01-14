package hu.boga.webshop.webapp.config;

import hu.boga.webshop.core.menu.gateway.MenuGateway;
import hu.boga.webshop.core.menu.interactor.MenuInteractor;
import hu.boga.webshop.core.user.gateway.UserGateway;
import hu.boga.webshop.core.user.interactor.UserInteractor;
import hu.boga.webshop.persistence.repos.KategoriaRepository;
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
  final KategoriaRepository kategoriaRepository;

  @Bean
  UserInteractor getUserInteractor(@Autowired UserGateway userGateway){
    return new UserInteractor(userGateway);
  }

  @Bean
  MenuInteractor getMenuInteractor(@Autowired MenuGateway menuGateway){
    return new MenuInteractor(menuGateway);
  }

  @Bean
  public PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
  }

}
