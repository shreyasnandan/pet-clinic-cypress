/// <reference types="cypress" />
import GetSelectors from '../../common/selectors.js';

context('Home Page Tests', () => {

  var sel = new GetSelectors();
  
  //Go to website and verify pae title
  it('Verify Home Page Title', () => {
    cy.visit('http://localhost:8080/')
    cy.title().should('eq', 'PetClinic :: a Spring Framework demonstration')
  })

  //Verify the presence of menu options
  it('Verify Menu Options', () => {

    sel.getAllMenuItems()
      .then(function($lis){
        expect($lis).to.have.length(4)
        expect($lis.eq(0).find('span')).to.contain('Home')
        expect($lis.eq(1).find('span')).to.contain('Find owners')
        expect($lis.eq(2).find('span')).to.contain('Veterinarians')
        expect($lis.eq(3).find('span')).to.contain('Error')
      })
                
  })
})