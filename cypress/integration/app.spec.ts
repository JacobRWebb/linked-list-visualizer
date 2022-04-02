// Basic test to run a initial check
describe("Testing", () => {
  cy.visit("/");
  it("should be true", () => {
    expect(true).to.equal(true);
  });
});
