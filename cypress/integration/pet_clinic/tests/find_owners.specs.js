/// <reference types="cypress" />

import GetSelectors from '../../common/selectors.js';
import CommonUtils from '../../common/utilities.js';

context('Home Page Tests', () => {

  var sel = new GetSelectors()
  var util = new CommonUtils()
  var tempData = new Map()
  var lName
    
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
      let lName ="Last" + inputStr
     cy.get('#firstName').type("First" + inputStr)
       .get('#lastName').type(lName)
       .get('#address').type("Address " + inputStr)
       .get('#city').type("City" + inputStr)
       .get('#telephone').type(util.randomStr(10, "1234567890"))
      
      .get('button[type="submit"]').should('have.text', 'Add Owner').click()

      //Store data in a map for later use
      lName = tempData.set('lastName',lName)
  })

  //Find Owners
  it('Find Owners', () => {
    sel.getAllMenuItems()
      .then(function($lis){
        cy.log('Clicking Owners menu')
        $lis.eq(1).find('span').click()
      })

    //Search by last name  
    cy.get('input#lastName').type('Last')
      .get('button.btn').should('have.text', 'Find Owner').click().wait(1000)

    //Verify that the search data is present in the table
    cy.get('#ownersTable td a').contains(tempData.get('lastName')).click().wait(1000)
  })

  it('Edit an Owner', () => {
    let lName = tempData.get('lastName') + util.randomStr(5, "TEST2020")

    cy.get('a.btn').contains('Edit Owner').click()
      .get('#lastName').type(lName)
      .get('button[type="submit"]').should('have.text', 'Update Owner').click()
      
    //Verify that the owner is updated 
    cy.get('tr td b').contains(lName)
  })  

})