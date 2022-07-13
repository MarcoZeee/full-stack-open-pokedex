describe("Pokedex", function () {
  beforeEach(function () {
    cy.visit("http://localhost:5000/");
    cy.wait(2000);
  });
  it("front page can be opened", function () {
    cy.contains("ivysaur");
    cy.contains(
      "Pokémon and Pokémon character names are trademarks of Nintendo."
    );
  });
  it("certain pokemon can be opened", function () {
    cy.contains("ivysaur").click();
    cy.wait(2000);
    cy.contains("speed");
  });
});
