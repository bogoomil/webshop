package hu.boga.webshop.core.user.interactor;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.BDDMockito.given;
import static org.mockito.MockitoAnnotations.openMocks;

import hu.boga.webshop.core.user.gateway.UserGateway;
import hu.boga.webshop.core.user.model.User;
import java.util.List;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;

class UserInteractorTest {

  UserInteractor userInteractor;

  @Mock
  UserGateway userGateway;

  @BeforeEach
  void setUp() {
    openMocks(this);
    userInteractor = new UserInteractor(userGateway);
  }

  @Test
  void getAllUsers() {
    given(userGateway.getAllUsers()).willReturn(List.of(new User()));

    assertThat(userInteractor.getAllUsers());

  }
}