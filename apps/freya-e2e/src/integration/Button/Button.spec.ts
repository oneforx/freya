describe('freya: Button component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=button--primary&args=children;'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Button!');
    });
});
