import { plp } from "./Pages/PLP";
let pricebefore;
let priceafter;

Cypress.Commands.add('TC1',()=>{
    plp.AddtoCartbutton().invoke('text').then(price=>{
        pricebefore= price.replace(/[^0-9]/g, '')
    
    plp.ScouttanButton().click({force:true})
    plp.AddtoCartbutton().invoke('text').then(price2=>{
        priceafter= price2.replace(/[^0-9]/g, '')
    cy.log(pricebefore, priceafter)
    const prices= {price1: pricebefore, price2: priceafter}; 
    cy.wrap(prices).as('pricesinfo')
    })
    })
})
Cypress.Commands.add('TC9',()=>{
    plp.BlackBag().click({force:true})
    plp.EmailMe().click()
})


// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
