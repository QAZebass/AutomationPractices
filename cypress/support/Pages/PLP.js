class PLP{
    elements={
            addtocartbutton:()=> cy.get('[class="nyla--add-to-cart css-14e98ui eb00qtb1"]'),
            scouttanbutton:()=>  cy.get('[data-nyla="option_scout-tan"]').contains('Scout Tan'),
            blackbag:()=> cy.get('[data-nyla="option_derby-black"]').find("span").contains("Derby Black"),
            emailme:()=> cy.get('[alttype="ADD_TO_CART_OUT_OF_STOCK"]'),
            modal:()=> cy.get('[data-nyla="modal-out"]'),
            whywelovebutton:()=> cy.get('[data-nyla="checkout-cta"]').contains("WHY WE LOVE IT"),
            whywelovetext:()=> cy.get('[class="content-block  css-d9qcp2 e48658t0"]')
    }

    AddtoCartbutton(){
        return this.elements.addtocartbutton()
    }
    ScouttanButton(){
        return this.elements.scouttanbutton()
    }
    BlackBag(){
        return this.elements.blackbag()
    }
    EmailMe(){
        return this.elements.emailme()
    }
    Modal(){
        return this.elements.modal()
    }
    WhyweloveButton(){
        return this.elements.whywelovebutton()
    }
    WhyweloveText(){
        return this.elements.whywelovetext()
    }
}
export const plp= new PLP()
