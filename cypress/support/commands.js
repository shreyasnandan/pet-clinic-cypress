// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
import GetSelectors from '../integration/common/selectors'
'../../common/selectors.js';

var sel = new GetSelectors()

Cypress.Commands.add('gotoMenu', (index) => {    
    cy.visit('http://localhost:8080/')
    sel.getAllMenuItems()
        .then(function($lis){
        cy.log('Clicking Menu: '+ index)
        $lis.eq(index).find('span').click()
        })
})

// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
