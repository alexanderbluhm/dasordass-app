/// <reference types="cypress" />

describe("dasordass", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("should display a form to enter and submit a sentence", () => {
    cy.get("form").should("have.length", 1);

    cy.get("form input").should("have.length", 1);
    cy.get("form button").should("have.length", 1);

    cy.get("form button").should("have.attr", "type", "submit");
  });

  it("should render a message in case of a network error", () => {
    const sentence = "Das ist ein Test";
    cy.intercept("POST", "/api/predictions", { forceNetworkError: true }).as("postCheck");
    cy.get("form input").type(`${sentence}{enter}`);
    cy.contains("p", "Failed to fetch").should("be.visible").should("have.class", "text-red-600");
  });

  it("should have a required input", () => {
    cy.get("form input").should("have.attr", "required");
  });

  it("should submit a sentence", () => {
    const sentence = "Das ist ein Test";

    cy.get('[aria-labelledby="corrections"] ol li').should("have.length", 0);
    cy.get("form input").type(`${sentence}{enter}`);

    cy.get("form button").should("be.disabled");
    cy.get("form button svg").should("exist");

    cy.get('[aria-labelledby="corrections"] ol li').should("have.length", 1);
  });

  it("should detect a spelling error", () => {
    const sentence = "Das der Hund groß ist, hätte ich nicht gedacht.";

    cy.get("form input").type(`${sentence}{enter}`);
    cy.get('[aria-labelledby="corrections"] ol li').first().find("span span").should("have.class", "bg-red-600");
  });

  it("should display a correct sentence", () => {
    const sentence = "Das Haus sollte nicht brennen.";

    cy.get("form input").type(`${sentence}{enter}`);
    cy.get('[aria-labelledby="corrections"] ol li').first().find("span span").should("have.class", "bg-green-600");
  });

  it("should detect multiple occurrences", () => {
    const sentence = "Ich kann mir nicht vorstellen, dass das wirklich passiert ist.";

    cy.get("form input").type(`${sentence}{enter}`);
    cy.get('[aria-labelledby="corrections"] ol li').first().find("span span").should("have.length", 2);
  });
});
