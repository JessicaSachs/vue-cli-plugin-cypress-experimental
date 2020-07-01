/// <reference types="cypress" />
import { mount } from 'cypress-vue-unit-test'
import Greetings from '../../src/components/Greetings.vue'

describe('Greetings', () => {
  it('Works awesomely', () => {
    // mount command comes from
    // https://github.com/bahmutov/cypress-vue-unit-test
    mount(Greetings)

    // now we can use any Cypress command to interact with the component
    // https://on.cypress.io/api
    cy.get('[data-testid=title]').should('exist')
  })
})
