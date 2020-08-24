/// <reference types="cypress" />

import GetSelectors from '../../common/selectors.js';
import CommonUtils from '../../common/utilities.js';


context('Home Page Tests', () => {

  var sel = new GetSelectors();
  var util = new CommonUtils()
  
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
  it('Add Owners', () => {

    var inputStr = util.randomStr(5, "TEST2020")

    cy.get('a.btn').should('have.text', 'Add Owner').click()
      //verify that form is visible
      .get('form#add-owner-form').should('be.visible')

      //Input data
      .get('#firstName').type("First" + inputStr)
      .get('#lastName').type("Last" + inputStr)
      .get('#address').type("Address " + inputStr)
      .get('#city').type("City" + inputStr)
      .get('#telephone').type("1234567890")
      //Save data
      .get('button[type="submit"]').should('have.text', 'Add Owner').click()
  })

})