describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.sp.senac.br')

    cy.get('.mburger').click()
    cy.get('#txtLoginNaoLogadoMob').click()
    cy.get('#login-email').type("thuyzingrov@exemple.com")
    cy.get('#login-password').type('exemple1234')
    cy.get('#btnLoginHeader').click()

  })
})