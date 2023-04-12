/// <reference types="cypress"> />

beforeEach(() => {
  cy.visit("/");
});

const dados = {
  pesquisaPalavra: "Agi",
  pesquisaPalavraInexistente: "145847589658574dase",
  pesquisaVariasPalavras: "Agi banco dinheiro empréstimo",
  pesquisaFrase: "Empréstimo consignado: dinheiro na mão com taxas reduzidas",
  pesquisaInsensível: "A REGRA do COnsigNado mUdOu!",
  pesquisaData: "12/04/2022",
};

describe("Funcionalidade de Pesquisa", () => {
  it("Pesquisa bem-sucedida", () => {
    cy.searchForTerm(dados.pesquisaPalavra);
    cy.get(".archive-title").should(
      "contain",
      `Resultados da busca por: ${dados.pesquisaPalavra}`
    );
  });

  it("Pesquisa sem resultados", () => {
    cy.searchForTerm(dados.pesquisaPalavraInexistente);
    cy.get(".entry-title").should("contain", "Nenhum resultado");
    cy.get(".entry-content > p").should(
      "contain",
      "Não encontramos nada para estes termos de busca. Tente novamente com palavras-chave diferentes."
    );
  });

  it("Pesquisa de várias palavras-chaves", () => {
    cy.searchForTerm(dados.pesquisaVariasPalavras);
    cy.get(".archive-title").should(
      "contain",
      `Resultados da busca por: ${dados.pesquisaVariasPalavras}`
    );
  });

  it("Pesquisa de frase", () => {
    cy.searchForTerm(dados.pesquisaFrase);
    cy.get(".archive-title").should(
      "contain",
      `Resultados da busca por: ${dados.pesquisaFrase}`
    );
  });

  it("Pesquisa insensível a maiúsculas e minúsculas", () => {
    cy.searchForTerm(dados.pesquisaInsensível);
    cy.get(".archive-title").should(
      "contain",
      `Resultados da busca por: ${dados.pesquisaInsensível}`
    );
  });

  it("Pesquisa por data", () => {
    cy.searchForTerm(dados.pesquisaData);
    cy.get(".archive-title").should(
      "contain",
      `Resultados da busca por: ${dados.pesquisaData}`
    );
  });
});
