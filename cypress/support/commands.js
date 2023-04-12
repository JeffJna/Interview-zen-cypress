Cypress.Commands.add("searchForTerm", (term) => {
  cy.get("#search-open").click();
  cy.get(".desktop-search > .search-form > label > .search-field").type(term);
  cy.get(
    "#masthead > div.site-header-content > div.desktop-search > form > input"
  ).click({
    force: true,
  });
});
