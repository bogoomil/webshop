package hu.boga.webshop.webapp.config;

import hu.boga.webshop.webapp.jwt.JwtAuthenticationEntryPoint;
import hu.boga.webshop.webapp.jwt.JwtRequestFilter;
import java.util.Arrays;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity
@RequiredArgsConstructor
public class SecurityConfig {

  private final JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;
  private final JwtRequestFilter jwtRequestFilter;

  @Bean
  public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http
        .csrf(AbstractHttpConfigurer::disable)
//        .cors((httpSecurityCorsConfigurer -> httpSecurityCorsConfigurer.configurationSource(corsConfigurationSource())))
        .authorizeHttpRequests((authz) -> authz
            .requestMatchers("/js/**", "/fonts/**", "/img/**", "/css/**", "/", "/favicon.jpeg", "/api/public/**", "/error")
            .permitAll()
            .requestMatchers(HttpMethod.OPTIONS).permitAll()
            .anyRequest().authenticated()
        ).exceptionHandling((exceptionHandlingConfigurer) -> exceptionHandlingConfigurer
            .authenticationEntryPoint(jwtAuthenticationEntryPoint)
        ).sessionManagement((sessionManagementConfigurer) -> sessionManagementConfigurer
            .sessionCreationPolicy(SessionCreationPolicy.STATELESS))
        .httpBasic(Customizer.withDefaults())
        .addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);
    return http.build();
  }

  @Bean
  public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
    return authenticationConfiguration.getAuthenticationManager();
  }

  @Bean
  public WebMvcConfigurer corsConfigurer() {
    return new WebMvcConfigurer() {
      @Override
      public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
            .allowedHeaders("*")
            .allowedMethods("POST", "GET", "PUT", "OPTIONS", "DELETE")
            .allowedOrigins("http://172.17.0.3:4200")
            .allowCredentials(true);
      }
    };
  }
}
