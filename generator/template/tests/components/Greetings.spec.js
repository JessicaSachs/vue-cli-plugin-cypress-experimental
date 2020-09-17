/// <reference types="cypress" />
import { mount } from '@cypress/vue'
import Greetings from '@/components/Greetings.vue'

describe('Greetings', () => {
  it('renders the component with a default name', () => {
    mount(Greetings)

    // now we can use any Cypress command to interact with the component
    // https://on.cypress.io/api
    cy.get('[data-testid=title]').should('exist').and('contain', 'Hello world')
  })

  it('renders the name passed in', () => {
    const name = 'Jess'
    mount(Greetings, {
      propsData: {
        name
      }
    })

    cy.get('[data-testid=title]').should('contain', `Hello ${name}`)
  })
})
