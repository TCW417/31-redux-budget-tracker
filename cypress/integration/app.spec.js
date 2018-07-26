// Cypress tests of the budget category/expense item app

describe('Lab 32 Front End Testing', () => {
  it('Should allow CRUD of a budget category', () => {
    cy.visit('/');
    // create a category
    cy.get('div[data-cy=create-category-form] input[type=text]').type('Category 1');
    cy.get('div[data-cy=create-category-form] input[type=number]').clear().type('100');
    cy.get('div[data-cy=create-category-form] button').click();
    cy.get('[data-cy=category-item]').should('have.length', 1);
    cy.get('[data-cy=category-item] h4').should('contain', 'Budget $100');
    
    // update it
    cy.get('div[data-cy=category-item] fieldset[data-cy=category-form] input[type=number]').clear().type('150');
    cy.get('div[data-cy=category-item] fieldset[data-cy=category-form] button[type=submit]').click();
    cy.get('[data-cy=category-item] h4').should('contain', 'Budget $150');
    
    // now delete it
    cy.get('[data-cy=category-item] button[data-cy=category-delete-btn]').click();
    cy.get('[data-cy=category-item]').should('have.length', 0);
  });

  it('Should allow CRUD an expense item', () => {
    cy.visit('/');
    // create the category
    cy.get('div[data-cy=create-category-form] input[type=text]').type('Category 1');
    cy.get('div[data-cy=create-category-form] input[type=number]').clear().type('100');
    cy.get('div[data-cy=create-category-form] button').click();
    // create the expense
    cy.get('fieldset[data-cy=expense-form] input[name=desc]').type('Expense 1');
    cy.get('fieldset[data-cy=expense-form] input[name=amount]').clear().type('50');
    cy.get('fieldset[data-cy=expense-form] button[type=submit]').click();
    cy.get('div[data-cy=expense-item]').should('have.length', 1);
    cy.get('div[data-cy=expense-item] h2').should('contain', 'Amount: $50');
    cy.get('div[data-cy=expense-item] h2').should('contain', 'Expense 1');
    // update the expense
    cy.get('div[data-cy=expense-item] input[type=text]').clear().type('Updated Expense 1');
    cy.get('div[data-cy=expense-item] input[type=number]').clear().type('75');
    cy.get('div[data-cy=expense-item] button[type=submit]').click();
    cy.get('div[data-cy=expense-item]').should('have.length', 1);
    cy.get('div[data-cy=expense-item] h2').should('contain', 'Amount: $75');
    cy.get('div[data-cy=expense-item] h2').should('contain', 'Updated Expense 1');
    // now delete it
    cy.get('div[data-cy=expense-item] button[data-cy=expense-delete-btn').click();
    cy.get('div[data-cy=expense-item]').should('have.length', 0);
  });

  it('Should allow deletion of category with expense item', () => {
    cy.visit('/');
    // create the category
    cy.get('div[data-cy=create-category-form] input[type=text]').type('Category 1');
    cy.get('div[data-cy=create-category-form] input[type=number]').clear().type('100');
    cy.get('div[data-cy=create-category-form] button').click();
    // create the expense
    cy.get('fieldset[data-cy=expense-form] input[name=desc]').type('Expense 1');
    cy.get('fieldset[data-cy=expense-form] input[name=amount]').clear().type('50');
    cy.get('fieldset[data-cy=expense-form] button[type=submit]').click();
    cy.get('div[data-cy=expense-item]').should('have.length', 1);
    cy.get('div[data-cy=expense-item] h2').should('contain', 'Amount: $50');
    cy.get('div[data-cy=expense-item] h2').should('contain', 'Expense 1');
    // now delete the category
    cy.get('[data-cy=category-item] button[data-cy=category-delete-btn]').click();
    cy.get('[data-cy=category-item]').should('have.length', 0);   
    cy.get('div[data-cy=expense-item]').should('have.length', 0);
  });
});
