describe('Working with checkboxes',()=>{
    it('Selecting random checkboxes',()=>{
        let number= Cypress._.random(1,3)
        cy.log(`**Number is ${number}**`)

        cy.visit('https://demoqa.com/checkbox')

        cy.get('[class*="rct-collapse-btn"]').click();
        cy.Checkbox(number)
    
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