/// <reference types="cypress" />

import GetSelectors from '../../common/selectors.js';
import CommonUtils from '../../common/utilities.js';

describe('Automation Test Suite - Fixtures', function () {
  var sel = new GetSelectors()
  var util = new CommonUtils()

  it('Go to Veterinarians', function () {    
    cy.visit('http://localhost:8080/')
    sel.getAllMenuItems()
      .then(function($lis){
        cy.log('Clicking Veterinarians menu')
        $lis.eq(2).find('span').click()
      })       
  })

  it('Verify Veterinarian Links', function(){
    cy.get('table a').contains('View as XML').click()
    cy.url().should('contain', '/vets.xml')

    cy.go('back')
    cy.url().should('contain','/vets.html')

    cy.get('table a').contains('View as JSON').click()
    cy.url().should('contain','/vets.json')
    
  })

})