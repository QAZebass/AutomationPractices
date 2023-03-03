import { cartpage } from "./Pages/CartPage";
import { plp } from "./Pages/PLP";
let price;
let counter, counter2;
let total;
let pricenum;

Cypress.Commands.add('TC1',()=>{
    
    plp.AddtoCartbutton().invoke('text').then(info=>{
        price= info.replace(/\D/g, "")
        pricenum = parseInt(price);
    
    let number= Cypress._.random(2,6)
    
    for (let i=0; i<=number; i++){
        plp.AdditionProduct().click({force:true})}

    plp.Counter().invoke('text').then(number=>{
        counter= parseInt(number)
    
    plp.AddtoCartbutton().click({force:true})
    cy.log(pricenum, counter)
    total= pricenum*counter
    const totalexport={total: total}

    cartpage.Counter().invoke('text').then(number=>{
        counter2= parseInt(number)
    const counterexport= {counter2: counter2}
    cy.wrap(counterexport).as('countercart')
    cy.wrap(totalexport).as('total')
    })
    })
})
})
Cypress.Commands.add('TC9',()=>{
    plp.BlackBag().click({force:true})
    plp.EmailMe().click()
})

//
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