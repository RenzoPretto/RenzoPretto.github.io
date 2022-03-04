describe('Test accessing the login page.', () => {
    it('Switches to Register Tab.', () => {
        cy.visit('http://localhost:4200/login')
        cy.contains('Register').click()
        cy.url().should('include', '/login')
    })
    it('Switches to Login Tab.', () => {
        cy.contains('Login').click()
        cy.url().should('include', '/login')
    })
    it('Succesful Registration', () => {
        cy.visit('http://localhost:4200/login')
        cy.contains('Register').click()
        cy.get('#mat-input-0').type('Danny123')
        cy.get('#mat-input-1').type('Password456')
        cy.get('#mat-input-2').type('Password456')
        cy.url().should('include', '/profile')
    })
    it('Succesful Login', () => {
        cy.visit('http://localhost:4200/login')
        cy.contains('Login').click()
        cy.get('#mat-input-0').type('Danny123')
        cy.get('#mat-input-1').type('Password456')
        cy.url().should('include', '/home')
    })
    it('Failed Login', () => {
        cy.contains('Login').click()
        cy.url().should('include', '/login')
    })
    it('Failed Registration', () => {
        cy.contains('Login').click()
        cy.url().should('include', '/login')
    })
    it('Fill in preferences.', () => {
        cy.get('#question_5 > #body > .type > .slider > .mat-slider').type('{rightarrow}{leftarrow}')
        cy.get('#question_6 > #body > .type > .slider > .mat-slider').type('{rightarrow}{leftarrow}{leftarrow}')
        cy.get('#mat-slide-toggle-1 > .mat-slide-toggle-label > .mat-slide-toggle-bar > .mat-slide-toggle-thumb-container > .mat-slide-toggle-thumb').click()
        cy.get('#question_8 > #body > .type > .slider > .mat-slider').type('{rightarrow}{rightarrow}')
    })
    it('Fill in must haves.', () => {
        cy.get('#mat-slide-toggle-3 > .mat-slide-toggle-label > .mat-slide-toggle-bar > .mat-slide-toggle-thumb-container > .mat-slide-toggle-thumb').click()
    })
  })