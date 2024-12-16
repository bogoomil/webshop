package hu.boga.webshop.webapp.user;

import hu.boga.webshop.core.user.interactor.UserInteractor;
import hu.boga.webshop.core.user.model.User;
import hu.boga.webshop.persistence.repos.UserRepository;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class UserController {

  final UserInteractor userInteractor;

  @GetMapping("/userlist")
  public List<String> userList(){
    return userInteractor.getAllUsers().stream().map(User::username).toList();
  }

}
