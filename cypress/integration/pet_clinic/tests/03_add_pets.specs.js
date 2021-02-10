/// <reference types="cypress" />

import GetSelectors from '../../common/selectors.js';
import CommonUtils from '../../common/utilities.js';

describe('Automation Test Suite - Fixtures', function () {
  var sel = new GetSelectors()
  var util = new CommonUtils()
  var tempData = new Map()   

  //Use the cy.fixture() method to pull data from fixture file
  beforeEach(function () { 
    cy.fixture('testdata').then(function(testdata) {
    this.testdata=testdata
    })
  }) 

  it('Add a Pet', function () {
    
    cy.visit('http://localhost:8080/')    
    cy.log('Pets Menu')
    cy.gotoMenu(1)

    //Search by last name
    cy.get('input#lastName').type(this.testdata.lastname)
      .get('button.btn').should('have.text', 'Find Owner').click().wait(1000)

    //Verify that the search data is present in the table
    cy.get('#ownersTable td a').contains('Last').click().wait(1000)
    cy.get('a.btn').contains('Add New Pet').click()
    cy.get('#pet label').contains('Owner').next().should('contain.text', this.testdata.lastname)  
      
    //Enter pet data and save
    var inputStr = util.randomStr(5, "TEST2020")
    let petName = 'PET'+inputStr
    
    cy.get('#name').type(petName)
    .get('input#birthDate').click().get('td .ui-state-highlight').click()    
    
    .get('select').select('dog', { force: true })
    .get('button').contains('Add Pet').click()
    .get('table dd').should('include.text', petName)  
    
  })


})