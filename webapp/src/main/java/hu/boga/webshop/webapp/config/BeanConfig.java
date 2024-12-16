package hu.boga.webshop.webapp.config;

import hu.boga.webshop.core.user.gateway.UserGateway;
import hu.boga.webshop.core.user.interactor.UserInteractor;
import hu.boga.webshop.persistence.repos.UserRepository;
import hu.boga.webshop.persistence.user.UserGatewayImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@RequiredArgsConstructor
public class BeanConfig {

  final UserRepository userRepository;

  UserGateway getUserGateway(){
    return new UserGatewayImpl(userRepository);
  }

  @Bean
  UserInteractor getUserInteractor(){
    return new UserInteractor(getUserGateway());
  }
}
