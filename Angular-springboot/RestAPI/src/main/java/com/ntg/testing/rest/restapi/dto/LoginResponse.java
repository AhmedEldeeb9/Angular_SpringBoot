package com.ntg.testing.rest.restapi.dto;

public class LoginResponse {
  public LoginResponse() {
  }

  public LoginResponse(String sessionID,String FullName , String error) {
    SessionID = sessionID;
    Error = error;
    this.fullName= FullName;
  }

  public String getFullName() {
    return fullName;
  }

  public void setFullName(String fullName) {
    this.fullName = fullName;
  }

  private String fullName;
  private String SessionID;

  public String getSessionID() {
    return SessionID;
  }

  public void setSessionID(String sessionID) {
    SessionID = sessionID;
  }

  public String getError() {
    return Error;
  }

  public void setError(String error) {
    Error = error;
  }

  private String Error;
}
