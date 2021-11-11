package com.ntg.testing.rest.restapi.controller;

import com.ntg.testing.rest.restapi.dto.LoginRequest;
import com.ntg.testing.rest.restapi.dto.LoginResponse;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class service {

  @PostMapping("/rest/login")
  public LoginResponse logUser(@RequestBody LoginRequest req) {
    if (req.getUserName() != null && req.getUserName().equals("admin")
      && req.getPassword() != null && req.getPassword().equals("ntg")
    ) {
      return new LoginResponse("12345", "Ahmed Eldeeb", null);
    } else {

      return new LoginResponse(null, null, "Invalid User Name or Password !");
    }
  }

}
