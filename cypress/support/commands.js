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

Cypress.Commands.add('Checkbox',(number)=>{
    cy.get('[class*="rct-collapse-btn"]').eq(number).click();

    if(number===1){
        
        cy.get('[class="rct-checkbox"]').eq(Cypress._.random(2,3)).click()
    }
    else if(number===2){
        const number2= Cypress._.random(3,4)
        cy.log(`**Number 2 is ${number2}**`)
        cy.get('[aria-label="Toggle"]').eq(number2).click()
            if(number2===3){
                cy.get('[class="rct-checkbox"]').eq(Cypress._.random(4,6)).click()
            }
            else if(number2===4){
                cy.get('[class="rct-checkbox"]').eq(Cypress._.random(5,8)).click()
            }
    }
    else if(number===3){
        cy.get('[class="rct-checkbox"]').eq(Cypress._.random(4,5)).click()
    }  
    
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