import { Given } from "@badeball/cypress-cucumber-preprocessor";

export class objects {
  userName() {
    return cy.get("#registration_username");
  }
  email() {
    return cy.get("#registration_email");
  }
  password() {
    return cy.get("#registration_password");
  }
  skillLevel() {
    return cy.get(".authentication-skill-level-selection-selected svg");
  }
  signUp() {
    return cy.get("#registration_submit");
  }
  username() {
    return cy.get("#username");
  }
  loginPassword() {
    return cy.get("#password");
  }
  rememberMe() {
    return cy.get("#_remember_me");
  }
  loginBTN() {
    return cy.get("#login");
  }
  signUpBtn() {
    return cy.get("#menu-cta");
  }
}
