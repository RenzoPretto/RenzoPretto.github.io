describe('Test homepage links.', () => {
    it('Directs to login.', () => {
        cy.visit('http://localhost:4200/home')
        cy.contains('Get Started').click()
        cy.url().should('include', '/login')
    })
    it('Directs to login 2.', () => {
        cy.visit('http://localhost:4200/home')
        cy.contains('Sign Up').click()
        cy.url().should('include', '/login')
    })
})