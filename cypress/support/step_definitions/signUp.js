import {
  Given,
  And,
  Then,
  When,
} from "@badeball/cypress-cucumber-preprocessor";
import { objects } from "../page_object/object";
const signUp = new objects();
const random = (min = 0, max = 1000) => {
  let num = Math.random() * (max - min) + min;
  return Math.floor(num);
};
console.log(random(1, 1000));
const randomNumber = random(1, 1000);
Given("user on the homepage", () => {
  cy.visit("https://www.chess.com/register?returnUrl=https://www.chess.com/");
});

When("user fills registration form", () => {
  // Fill "blessingNichola... on <input> #registration_username
  signUp
    .userName()
    .should("be.visible")
    .type("blessingNicholas" + randomNumber);

  // Fill "edizion.blessin... on <input> #registration_email
  signUp
    .email()
    .should("be.visible")
    .type("edizion.blessing" + randomNumber + "@gmail.com");

  // Fill "1Password@" on <input> #registration_password
  signUp.password().should("be.visible").type("1Password@");

  // Click on <svg> .authentication-skill-level-selection-selected svg
  signUp.skillLevel().should("be.visible").click();

  // Click on <button> "Sign Up"
  signUp.signUp().should("be.visible").click();
});
