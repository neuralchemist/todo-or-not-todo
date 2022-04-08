/// <reference types="cypress" />

describe("Todos", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("modal appears when add button is clicked", () => {
    cy.get("button").contains("Add").click();
    cy.contains("Add a new todo").should("be.visible");
  });

  it("should display todo card when todo is added", () => {
    cy.get("button").contains("Add").click();
    cy.get("input[placeholder='Todo']").type("Drink beer not water");
    cy.get("button").contains("Save").click();
    cy.contains("Drink beer not water").should("be.visible");
  });

  it("toggle icon when clicked", () => {
    cy.get("button").contains("Add").click();
    cy.get("input[placeholder='Todo']").type("Drink beer not water");
    cy.get("button").contains("Save").click();
    cy.get("svg[data-testid='CloseIcon']").click();
    cy.get("svg[data-testid='CheckIcon']").should("be.visible");
  });
});
