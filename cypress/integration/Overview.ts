/// <reference types="cypress" />

describe("Testing the Overview page selectors and data", () => {
  it("Navigate to Overview page", () => {
    cy.visit("/");
    cy.get("[data-cy=page-title]").contains("Visão Geral");
  });

  it("Select a new store on the chart", () => {
    cy.intercept("GET", "/chartInfo*", (req) => {
      delete req.headers["if-none-match"];
    }).as("chartInfo");

    cy.get("[data-cy=select-stores]")
      .select("Vilma Calçados")
      .should("have.value", "2");

    cy.wait("@chartInfo").its("response.statusCode").should("eq", 200);

    cy.get("[data-cy=select-stores]")
      .select("Mary Lingerie")
      .should("have.value", "3");

    cy.wait("@chartInfo").its("response.statusCode").should("eq", 200);

    cy.get("[data-cy=select-stores]")
      .select("Loja Belíssima")
      .should("have.value", "4");

    cy.wait("@chartInfo").its("response.statusCode").should("eq", 200);

    cy.get("[data-cy=select-stores]")
      .select("João Eletrônicos")
      .should("have.value", "5");

    cy.wait("@chartInfo").its("response.statusCode").should("eq", 200);

    cy.get("[data-cy=select-stores]")
      .select("Gráfica Freitas")
      .should("have.value", "6");

    cy.wait("@chartInfo").its("response.statusCode").should("eq", 200);
  });

  it("Select a new period on the all sales section", () => {
    cy.intercept("GET", "/all-sales*", (req) => {
      delete req.headers["if-none-match"];
    }).as("allSales");

    cy.get("[data-cy=select-sales-period]")
      .select("Mensal")
      .should("have.value", "monthly");

    cy.wait("@allSales").its("response.statusCode").should("eq", 200);

    cy.get("[data-cy=select-sales-period]")
      .select("Anual")
      .should("have.value", "annual");

    cy.wait("@allSales").its("response.statusCode").should("eq", 200);
  });
});
