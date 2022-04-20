/// <reference types="cypress" />

describe("Testing the Store page", () => {
  it("Navigate to the Stores page", () => {
    cy.visit("/lojas");
    cy.url().should("match", /lojas/);
    cy.get("[data-cy=page-title]").contains("Lojas");
  });
});
