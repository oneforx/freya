describe('imaeus: SignInComponent component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=signincomponent--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to SignInComponent!');
    });
});
