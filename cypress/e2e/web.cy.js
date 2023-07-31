describe("Search Engine Test", () => {
  it("should search for 'The dev-friendly football API'", () => {
    cy.visit("https://duckduckgo.com");

    cy.get("#searchbox_input").type("The dev-friendly football API");

    cy.get('.searchbox_searchButton__F5Bwq').click();

    cy.get(':nth-child(1) > [data-testid="result"] > .OQ_6vPwNhCeusNiEDcGp').click();

    cy.get("#r1-0").should("contain", "https://www.api-football.com/");
    
  });
});
