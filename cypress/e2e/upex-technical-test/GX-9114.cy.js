import { plp } from "../../support/Pages/PLP";
import { cartpage } from "../../support/Pages/CartPage";

describe('GX-9114 | ✅[Challenge] Technical Exercise - QA Automation Engineer in Cypress',()=>{

    beforeEach('Precondition',()=>{
        cy.visit('/')
    })
    it.skip('GX-9115 | TC2:  Validate that the user can add more than one of the same product through the counter next to the “add” button.',()=>{

        cy.TC1()
        cy.get('@countercart').then((TC1)=>{
            const {counter2}= TC1;
            cartpage.Counter().should('have.text', counter2)
        })
        cy.log('@total')
        cy.get('@total').then((TC1)=>{
            const {total}= TC1;
            cartpage.Total().should('include.text', total)
        })
    })
    it('GX-9115 | TC9:  Validate that the “email me” button enables the modal when clicked on.',()=>{
        cy.TC9()
        plp.Modal().should('exist')
    })

    it('GX-9115 | TC10: Validate that the information can be hidden when clicking on “Why we love it”',()=>{

        plp.WhyweloveText().should('exist')
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
