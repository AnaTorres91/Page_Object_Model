export class TodoPage {
    navigate(){
        cy.visit('https://todomvc.com/examples/typescript-react/#/')
    }
     
    addItems(text){
        cy.get('.new-todo').type('1{enter}')
        cy.get('.new-todo').type('2{enter}')
        cy.get('.new-todo').type('3{enter}')
    }
    editItems(text){
        cy.get(':nth-child(3) > .view > label').dblclick()
        cy.get('.editing > .edit').type('!')
    }

    checkAll(){
        cy.get('[for="toggle-all"]').click()

    }

    clearCompleted(){
        cy.get('.clear-completed').click()
    
    }

  
}

export const todoPage = new TodoPage()
