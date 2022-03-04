describe('Test toolbar links.', () => {
    it('Directs to home page.', () => {
        cy.visit('http://localhost:4200/carpools')
        cy.contains('Wepool').click()
        cy.url().should('include', '/home')
    })
    it('Directs to carpools page.', () => {
        cy.contains('Carpools').click()
        cy.url().should('include', '/carpools')
    })
    it('Directs to profile page.', () => {
        cy.contains('Profile').click()
        cy.url().should('include', '/profile')
    })
    it('Directs to moderation page.', () => {
        cy.contains('Moderation').click()
        cy.url().should('include', '/moderation')
    })
    it('Directs to Administration page.', () => {
        cy.contains('Administration').click()
        cy.url().should('include', '/administration')
    })
    it('Directs to Login page.', () => {
        cy.get('.mat-icon').click()
        cy.url().should('include', '/login')
    })
})