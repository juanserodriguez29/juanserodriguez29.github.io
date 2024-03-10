describe('My First Test', () => {
    it('Visits the home page', () => {
      cy.visit('https://juanserodriguez29.vercel.app');
      cy.contains('Foodies')
    });
  });