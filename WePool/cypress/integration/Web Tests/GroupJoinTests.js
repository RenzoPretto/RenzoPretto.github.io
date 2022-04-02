describe('Check page loaded group.', () => {
    it('Clicks on join group.', () => {
      cy.visit('http://localhost:4200/administration')
      cy.get('[style="left: 0px; width: calc((50% - 0.5px) * 1 + 0px); margin-top: 0px; padding-top: calc((25% - 0.5px) * 1 + 0px);"] > .mat-figure > .mat-card > .mat-card-actions > .mat-focus-indicator > .mat-button-wrapper').click()
    })
  })