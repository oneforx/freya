describe('imaeus: InputLabelIcons component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=inputlabelicons--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to InputLabelIcons!');
    });
});
