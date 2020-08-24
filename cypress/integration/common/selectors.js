class GetSelectors {

  getAllMenuItems() {
    return cy.get('ul.nav li a');
  }

}
export default GetSelectors;
