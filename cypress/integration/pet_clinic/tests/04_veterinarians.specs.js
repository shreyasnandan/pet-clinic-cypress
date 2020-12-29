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

})