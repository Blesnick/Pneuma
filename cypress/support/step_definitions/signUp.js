import {
  Given,
  And,
  Then,
  When,
} from "@badeball/cypress-cucumber-preprocessor";
import { objects } from "../page_object/object";
const signUp = new objects();

Given("user on the homepage", () => {
  cy.visit("/");
});

When("user fills registration email textbox", () => {});
