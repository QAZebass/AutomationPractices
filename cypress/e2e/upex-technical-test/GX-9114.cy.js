import { plp } from "../../support/Pages/PLP";
import { cartpage } from "../../support/Pages/CartPage";

describe('GX-9114 | ✅[Challenge] Technical Exercise - QA Automation Engineer in Cypress',()=>{

    beforeEach('Precondition',()=>{
        cy.visit('/')
    })
    it.only('GX-9115 |TC8 : Validate that the price in the “Add to cart” button changes when the user changes de color of the product.',()=>{

    plp.AddtoCartbutton().should('exist')
    cy.TC1()
    cy.get('@pricesinfo').then((TC1)=>{
        const {price1, price2}= TC1;
        expect(price1).to.not.equal(price2)
    })
    it('GX-9115 | TC9:  Validate that the “email me” button enables the modal when clicked on.',()=>{
        cy.TC9()
        plp.Modal().should('exist')
        })
    })

    it('GX-9115 | TC10: Validate that the information can be hidden when clicking on “Why we love it”',()=>{

        plp.WhyweloveText().should('exist');
        plp.WhyweloveButton().should('exist')
        plp.WhyweloveButton().click()
        plp.WhyweloveText().should('not.exist')
    })
})

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    })
    const origLog = Cypress.log
    Cypress.log = function (opts, ...other) {
    if (opts.displayName === 'xhr' || opts.displayName === 'fetch' && opts.url.startsWith('https://')) {
        return
    }
    return origLog(opts, ...other)
    }
