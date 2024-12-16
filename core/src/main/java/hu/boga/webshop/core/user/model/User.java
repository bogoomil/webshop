package hu.boga.webshop.core.user.model;

import lombok.Builder;

@Builder
public record User (String username, String password) {

}
