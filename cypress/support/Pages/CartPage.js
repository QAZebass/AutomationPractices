class CartPage{
    elements={
        total:()=> cy.get('[class="undefined content-item e1axzrep0 rich-text css-1trwqtp e1nqke5h2"]', {timeout:20000}),
        counter: ()=> cy.get('[data-nyla="quantity-box-cb"]')
    }
    Total(){
        return this.elements.total()
    }
    Counter(){
        return this.elements.counter()
    }
}
export const cartpage= new CartPage()
