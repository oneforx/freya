describe('freya: LayoutWithNavbar component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=layoutwithnavbar--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to LayoutWithNavbar!');
    });
});
