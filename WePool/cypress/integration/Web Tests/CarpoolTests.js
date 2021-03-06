describe('Test group info component', () => {
    it('Opens first rider\'s tab', () => {
      cy.visit('http://localhost:4200/carpools')
      cy.contains('Rider 1:').click()
      cy.contains('Name:')
      cy.wait(100)
    })
    it('Opens second rider\'s tab', () => {
      cy.contains('Rider 2:').click()
      cy.contains('Name:')
      cy.wait(100)
    })
    it('Opens third rider\'s tab', () => {
      cy.contains('Rider 3:').click()
      cy.contains('Name:')
      cy.wait(100)
    })
    it('Opens fourth rider\'s tab', () => {
      cy.contains('Rider 4:').click()
      cy.contains('Name:')
      cy.wait(100)
    })
  })
  
  describe('Test directions scrolling.', () => {
    it('Scrolls halfway through the directions.', () => {
      cy.get('span#sidebar').scrollTo('center')
      cy.wait(100)
    })
    it('Scrolls to the end of the directions.', () => {
      cy.get('span#sidebar').scrollTo('bottom')
      cy.wait(100)
    })
  })