/// <reference types="cypress" />

import GetSelectors from '../../common/selectors.js';
import CommonUtils from '../../common/utilities.js';

describe('Automation Test Suite - Fixtures', function () {
  var sel = new GetSelectors()
  var util = new CommonUtils()

  it('Go to Error', function () {    
    cy.visit('http://localhost:8080/')    
    cy.log('Error Menu')
    cy.gotoMenu(3)
  })

  it('Verify error menu', function(){
    
    cy.get('h2').contains('Something happened...')    

    cy.get('.xd-container p').contains('Expected: controller used to showcase what happens when an exception is thrown')

    
  })

})