declare namespace Cypress {
    interface Chainable<Subject> {
      /**
       * Clear filter
       * @example
       * cy.clearFilter(buttonLabel)
       */
      gotoMenu(index: number): Chainable<any>

     
    }
  }