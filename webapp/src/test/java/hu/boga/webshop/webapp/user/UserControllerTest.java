package hu.boga.webshop.webapp.user;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.BDDMockito.given;
import static org.mockito.MockitoAnnotations.openMocks;

import hu.boga.webshop.core.user.interactor.UserInteractor;
import hu.boga.webshop.persistence.repos.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;

class UserControllerTest {

  UserController userController;

  @Mock
  UserInteractor userInteractor;

  @BeforeEach
  void setUp() {
    openMocks(this);

    userController = new UserController(userInteractor);
  }

  @Test
  void userList() {
    given(userInteractor.getAllUsers()).willThrow(new RuntimeException("fitty"));

    assertThrows(RuntimeException.class, () -> userController.userList());
  }
}