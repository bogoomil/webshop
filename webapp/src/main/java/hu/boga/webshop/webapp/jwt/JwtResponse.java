package hu.boga.webshop.webapp.jwt;

import java.io.Serializable;
import lombok.Data;
import org.springframework.security.core.userdetails.UserDetails;

@Data
public class JwtResponse implements Serializable {
    private final String jwtToken;
    private final UserDetails userDetails;

    public JwtResponse(String jwtToken, UserDetails userDetails) {
        this.jwtToken = jwtToken;
        this.userDetails = userDetails;
    }

}