package hu.boga.webshop.webapp.jwt;

import hu.boga.webshop.core.user.interactor.UserInteractor;
import hu.boga.webshop.core.user.model.Role;
import hu.boga.webshop.core.user.model.User;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class JwtUserDetailsService implements UserDetailsService {

    final private UserInteractor userInteractor;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Optional<User> userOpt = userInteractor.findByEmail(email);
        if(userOpt.isEmpty()){
            throw new UsernameNotFoundException("User not found with username: " + email);
        }
        return processUserDetails(userOpt.get());
    }

    private static org.springframework.security.core.userdetails.User processUserDetails(User user) {
        Collection<GrantedAuthority> auths = new ArrayList<>();
        for (Role r : user.getRoles()) {
            SimpleGrantedAuthority auth = new SimpleGrantedAuthority(r.name());
            auths.add(auth);
        }
        return new org.springframework.security.core.userdetails.User(user.getEmail(), user.getPassword(), auths);
    }
}