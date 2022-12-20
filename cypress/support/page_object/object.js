export class objects {
  fn() {
    return cy.get('[name="firstName"]');
  }
  ln() {
    return cy.get('[name="lastName"]');
  }
  email() {
    return cy.get("[type='email']");
  }
}
