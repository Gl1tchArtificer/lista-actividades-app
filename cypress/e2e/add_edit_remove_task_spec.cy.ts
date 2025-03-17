describe('add task spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200');
    // Add task
    cy.get('.input').type('New task');
    cy.get('.btn-add').click();

    //Edit task
    cy.get('.btn-edit').click();
    cy.get('.input').clear().type('Edited task');

    cy.get('.btn-save').click();

    cy.get('.btn-delete').click();

  })
})
