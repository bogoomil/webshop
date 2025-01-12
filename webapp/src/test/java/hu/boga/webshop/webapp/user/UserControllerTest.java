package hu.boga.webshop.webapp.user;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.BDDMockito.given;
import static org.mockito.MockitoAnnotations.openMocks;

import hu.boga.webshop.core.user.interactor.UserInteractor;
import hu.boga.webshop.webapp.user.controller.UserController;
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

    userController = new UserController(userInteractor, null, null);
  }

}