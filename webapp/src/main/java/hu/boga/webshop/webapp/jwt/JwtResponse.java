package hu.boga.webshop.webapp.jwt;

import java.io.Serializable;
import lombok.Data;
import org.springframework.security.core.userdetails.UserDetails;

@Data
public class JwtResponse implements Serializable {
    private final String jwttoken;
    private final UserDetails userDetails;

    public JwtResponse(String jwttoken, UserDetails userDetails) {
        this.jwttoken = jwttoken;
        this.userDetails = userDetails;
    }

}