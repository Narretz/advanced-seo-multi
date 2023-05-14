describe('seo error', () => {
  it('opens seo site general page after creating it', () => {
    cy.visit('localhost:9000/cp');

    cy.contains('.nav-main', 'Duplicate IDs').should('not.exist');

    cy.get('#input-email').type('test@example.com');

    cy.get('#input-password').type('test1234')

    cy.get('button[type=submit]').click();

    cy.get('.nav-main .nav-section-seo a[href="http://localhost:9000/cp/advanced-seo/site"]').click();

    cy.get('.workspace a[href="http://localhost:9000/cp/advanced-seo/site/general"]').click();

    cy.get('#field_site_name').type('asdf');

    cy.scrollTo(0,0);

    cy.contains('button', 'Save').click();

    cy.get('.nav-section-tools a[href="http://localhost:9000/cp/utilities"]').click();

    cy.get('.workspace a[href="http://localhost:9000/cp/utilities/cache"]').click();

    cy.contains('.nav-main', 'Duplicate IDs');

    cy.contains('button', 'Clear').first().click();

    cy.get('.nav-main .nav-section-seo a[href="http://localhost:9000/cp/advanced-seo/site"]').click();

    cy.get('.workspace a[href="http://localhost:9000/cp/advanced-seo/site/general"]').click();

    cy.contains('ArgumentCountError').should('not.exist');
  })
})