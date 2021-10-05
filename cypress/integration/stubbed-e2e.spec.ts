// api.js is an adapter for the API the app uses

// import proxyquire from 'proxyquire'

// import * as api from '../../src/firebase/hooks'
// We cannot stub the module by importing here because cypress uses two windows one for the test runner and an iframe for the application.

// stackoverflow.com/questions/67474324/how-to-stub-a-module-in-cypress

describe('Stubbing Dependencies', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.window().should('have.property', 'appReady', true)
    let api

    cy.window()
      .then((win) => {
        /** @ts-ignore */
        api = win.api
      })
      .then(() => {
        // variable "foo" has been set
        cy.stub(api, 'test123')
          .as('mockTest123')
          .returns('Hey from cypress resolution. Test123')
        // expect(foo).to.equal('bar') // test passes
      })
    // cy.window().then((win) => {
    //   /** @ts-ignore */
    //   cy.stub(win, 'api').as('api')
    // })

    // cy.window().then((win) => {
    //   /** @ts-ignore */
    //   cy.log(win.api)
    //   /** @ts-ignore */
    //   cy.stub(win.api, 'useHomeScreenGames')
    //     .as('mockUseHomeScreenGames')
    //     .returns('Hey from cypress resolution.')
    //   // .callsFake(() => {
    //   //   console.log('stubbing with cypress for useHomeScreenGames')
    //   // })

    //   /* @ts-ignore */
    //   // cy.stub(api, 'useBrowseGames')
    //   //   .as('mockUseBrowseGames')
    //   //   .callsFake(() => {
    //   //     console.log('stubbing with cypress for use browse games')
    //   //   })

    //   // // cy.spy(api, 'useBrowseGames')
    // })
  })
  it('renders with stub test123', () => {
    cy.visit('/signin')
  })

  // it('Renders successfully', () => {
  //   // cy.log('Super duper')
  //   cy.visit('/', {
  //     onBeforeLoad: (contentWindow) => {
  //       // eslint-disable-next-line no-param-reassign
  //       contentWindow.fetch = null
  //       // contentWindow is the remote page's window object
  //     },
  //   })
  // })
})
