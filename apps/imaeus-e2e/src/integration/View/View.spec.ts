describe('imaeus: View component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=view--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to View!');
    });
});
