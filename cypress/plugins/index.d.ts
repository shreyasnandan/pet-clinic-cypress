declare namespace Cypress {
    interface Chainable<Subject> {
      /**
       * Clear filter
       * @example
       * cy.clearFilter(buttonLabel)
       */
      gotoOwnerMenu(): Chainable<any>

     
    }
  }