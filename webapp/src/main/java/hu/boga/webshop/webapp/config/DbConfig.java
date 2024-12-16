package hu.boga.webshop.webapp.config;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@Configuration
@EntityScan(basePackages = "hu.boga.webshop.persistence.model")
@EnableJpaRepositories(basePackages = "hu.boga.webshop.persistence.repos")
public class DbConfig {

}
