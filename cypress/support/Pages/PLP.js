class PLP{
    elements={
            addtocartbutton:()=> cy.get('[class="nyla--add-to-cart css-14e98ui eb00qtb1"]'),
            additionproduct:()=> cy.get('[src="/_cdn/xnU7WKBsT2WPhsJdEPnQ/__N__2__N__.svg"]').first(),
            gotocart:()=> cy.get('[class="css-9iujih e1u0lm2u0"]'),
            counternumber:()=> cy.get('[class="e1axzrep0 css-lozh3q e1nqke5h3"]'),
            blackbag:()=> cy.get('[data-nyla="option_derby-black"]').find("span").contains("Derby Black"),
            emailme:()=> cy.get('[alttype="ADD_TO_CART_OUT_OF_STOCK"]'),
            modal:()=> cy.get('[data-nyla="modal-out"]'),
            whywelovebutton:()=> cy.get('[data-nyla="checkout-cta"]').contains("WHY WE LOVE IT"),
            whywelovetext:()=> cy.get('[class="content-block  css-d9qcp2 e48658t0"]')
    }

    AddtoCartbutton(){
        return this.elements.addtocartbutton()
    }
    AdditionProduct(){
        return this.elements.additionproduct()
    }
    Gotocart(){
        return this.elements.gotocart()
    }
    Counter(){
        return this.elements.counternumber()
    }
    Total(){
        return this.elements.total()
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
