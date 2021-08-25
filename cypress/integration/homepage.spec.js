describe('Renders homepage properly', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.task('resetTestUser')
  })
  it('Renders successfully', () => {
    cy.findByText(/epic clone/i)
    // cy.findByRole('button', { name: /browse/i })
    // cy.findByRole('button', { name: /news/i })
    // cy.findByRole('button', { name: /community/i })
    cy.findByText(/Blockbusters Of The Month/i)
    cy.findByText(/Most anticipated games/i)
    cy.findByText(/Most popular games/i)
    cy.findByText(/Action Games/i)
    cy.findByText(/Adventure Games/i)
    cy.findByText(/Puzzle Games/i)
    cy.findByText(/Narration Games/i)
  })

  it('Gets the children', () => {
    cy.findByTestId('blockbusters-of-the-month').children().first()
    cy.findByTestId('longest-games').children()
    cy.findByTestId('most-anticipated-games').children()
    cy.findByTestId('most-popular-games').children()
    cy.findByTestId('action-games').children()
    cy.findByTestId('adventure-games').children()
    cy.findByTestId('narration-games').children()
    cy.findByTestId('puzzle-games').children().first().click()

    cy.findByRole('button', { name: /add to cart/i }).click()
    cy.findByTestId('similar-games').children()
  })
})
describe('Login flow', () => {
  beforeEach(() => {
    cy.visit('/')
    // cy.task('resetTestUser')
  })
  it('Logs in using UI', () => {
    cy.findByText(/epic clone/i)
    cy.findByRole('button', { name: /login/i }).click()
    cy.findByLabelText(/username/i, { timeout: 7000 }).type('test@email.com')
    cy.findByLabelText(/password/i, { timeout: 7000 }).type('testTest')
    cy.findByRole('button', { name: /sign in/i }).click()
    cy.url().should('eq', `${Cypress.config().baseUrl}/`)
  })
})

describe('tests wishlist', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.resetTestUser()
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(3000)
  })
  it('click wishlist', () => {
    cy.login('test@email.com', 'testTest')
    cy.log('After login!')
    // eslint-disable-next-line cypress/no-unnecessary-waiting

    cy.findByTestId('action-games')
      .children()
      .first()
      .within(() => {
        cy.get(`[aria-label="add-to-wishlist"]`).click()
      })
  })
  it('click cart', () => {
    cy.login('test@email.com', 'testTest')
    cy.log('After login!')
    // eslint-disable-next-line cypress/no-unnecessary-waiting

    cy.findByTestId('action-games')
      .children()
      .first()
      .within(() => {
        cy.findByLabelText('add-to-wishlist').click()
      })
  })
})

describe('Purchases correctly', () => {
  beforeEach(() => {
    cy.visit('/')

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(3000)
  })

  afterEach(() => {
    cy.resetTestUser()
  })
  it.only('Add to cart works good', () => {
    cy.findByLabelText('nav-cart-page-link').click()
    cy.findByTestId('cart-page-list').children().should('have.length', 0)
    cy.findByText(/epic clone/i).click()

    cy.findByTestId('action-games')
      .children()
      .eq(1)
      .within(() => {
        cy.findByLabelText('add-to-cart').click()
      })

    cy.findByLabelText('nav-cart-page-link').click()
    cy.findByTestId('cart-page-list').children().should('have.length', 1)
    cy.findByText(/epic clone/i).click()

    cy.findByTestId('action-games').children().eq(2).click()
    cy.findByRole('button', { name: /add to cart/i }).click()

    cy.findByLabelText('nav-cart-page-link').click()
    cy.findByTestId('cart-page-list').children().should('have.length', 2)

    cy.findByRole('button', { name: /pay/i }).click()
  })
  it('Add to wishlist works good', () => {
    cy.findByLabelText('nav-wishlist-page-link').click()
    cy.findByText('Wishlist is empty.')
    cy.findByText(/epic clone/i).click()

    cy.findByTestId('action-games')
      .children()
      .eq(1)
      .within(() => {
        cy.findByLabelText('add-to-wishlist').click()
      })
    cy.findByTestId('action-games')
      .children()
      .eq(1)
      .within(() => {
        cy.findByLabelText('wishlisted')
      })

    cy.findByLabelText('nav-wishlist-page-link').click()
    cy.findByLabelText('nav-wishlist-page-link-count').should('have.text', 1)
    cy.findByLabelText('wishlist-page-list').children().should('have.length', 1)
    cy.findByText(/epic clone/i).click()

    cy.findByTestId('action-games').children().eq(2).click()
    cy.findByRole('button', { name: /wishlist/i }).click()
    cy.findByRole('button', { name: /in wishlist/i })

    cy.findByLabelText('nav-wishlist-page-link').click()
    cy.findByLabelText('nav-wishlist-page-link-count').should('have.text', 2)
    cy.findByLabelText('wishlist-page-list').children().should('have.length', 2)
  })
})
