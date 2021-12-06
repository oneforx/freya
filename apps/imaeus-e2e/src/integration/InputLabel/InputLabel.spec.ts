describe('imaeus: InputLabel component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=inputlabel--primary&args=inputProps;labelProps;'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to InputLabel!');
    });
});
