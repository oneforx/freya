describe('freya: InputLabelFragment component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=inputlabelfragment--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to InputLabelFragment!');
    });
});
