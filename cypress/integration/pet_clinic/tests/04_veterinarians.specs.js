/// <reference types="cypress" />

import GetSelectors from '../../common/selectors.js';
import CommonUtils from '../../common/utilities.js';

describe('Automation Test Suite - Fixtures', function () {
  var sel = new GetSelectors()
  var util = new CommonUtils()

  it('Go to Veterinarians', function () {    
    cy.visit('http://localhost:8080/')
    /* sel.getAllMenuItems()
      .then(function($lis){ */
        cy.log('Veterinarians Menu')
        cy.gotoMenu(2)
      /*   $lis.eq(2).find('span').click()
      })  */      
  })

  it('Verify Veterinarian Links', function(){
    
    cy.url().should('contain','/vets.html')

    cy.get('table a').contains('View as XML')
    cy.get('table a').should('have.attr','href', '/vets.xml')
    

    cy.get('table a').contains('View as JSON')
    //cy.get('table a').should('have.attr','href', '/vets.json')

    
  })

})