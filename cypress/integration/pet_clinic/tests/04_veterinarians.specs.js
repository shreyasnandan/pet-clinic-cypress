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
    
    cy.url().should('contain','/vets')
    cy.xpath('//div[@class="row"][2]//a').contains('View as XML')
    cy.xpath('//div[@class="row"][2]//a').should('have.attr','href', '/vets.xml')
    

    cy.xpath('//div[@class="row"][2]//a').contains('View as JSON')
    //cy.xpath('//div[@class="row"][2]//a').should('have.attr','href', '/vets.json')

    
  })

})