describe('freya: PostTemplate component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=posttemplate--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to PostTemplate!');
    });
});
