import {
  Given,
  And,
  Then,
  When,
} from "@badeball/cypress-cucumber-preprocessor";
import { objects } from "../page_object/object";
const login = new objects();
Given("user on the Login Page", () => {
  // Load "https://www.chess.com/"
  cy.visit(
    "https://www.chess.com/login_and_go?returnUrl=https://www.chess.com/"
  );
});

When("user enters all required fields", () => {
  // Fill "blessingNichola... on <input> #username
  login.username().type("blessingNicholas");

  // Click on <input> #password
  login.loginPassword().type("1Password@");

  // Click on <input> #_remember_me
  login.rememberMe().click();

  // Click on <button> "Log In"
  login.loginBTN().click();
});
