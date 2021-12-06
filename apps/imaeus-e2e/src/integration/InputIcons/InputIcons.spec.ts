describe('imaeus: InputIcons component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=inputicons--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to InputIcons!');
    });
});
