import GetSelectors from '../../common/selectors.js';

context('Home Page Tests', () => {

  var sel = new GetSelectors();
  
  //Find Owners Menu
  it('Goto Owner Menu', () => {
    cy.visit('http://localhost:8080/')
    sel.getAllMenuItems()
      .then(function($lis){
        cy.log('Clicking Owners menu')
        $lis.eq(1).find('span').click()
      })
  })

  //Add Owners
  it('Owners Menu', () => {
    cy.get('a.btn').should('have.text', 'Add Owner').click()
      .get('form#add-owner-form').should('be.visible')
  })

})