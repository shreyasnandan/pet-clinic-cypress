/// <reference types="cypress" />

import GetSelectors from '../../common/selectors.js';
import CommonUtils from '../../common/utilities.js';

describe('Automation Test Suite - Fixtures', function () {
  var sel = new GetSelectors()
  let tData
   
  //Use the cy.fixture() method to pull data from fixture file
  beforeEach(function () { 
    cy.fixture('testdata').then(testdata => {
    tData=testdata
    })
  }) 

  it('Add a Pet', function () {
    
    cy.visit('http://localhost:8080/')
    sel.getAllMenuItems()
      .then(function($lis){
        cy.log('Clicking Owners menu')
        $lis.eq(1).find('span').click()
      })

    //Search by last name      
    cy.get('input#lastName').type(tData.lastName)
      .get('button.btn').should('have.text', 'Find Owner').click().wait(1000)

    //Verify that the search data is present in the table
    cy.get('#ownersTable td a').contains('Last').click().wait(1000)
      
  })


})