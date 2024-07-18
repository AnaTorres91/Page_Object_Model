
import {todoPage} from '../Page-Object/todoPage'

describe('to do', () => {
    
})

 it('Añadir tareas', () => {
    todoPage.navigate()
    todoPage.addItems() 
    
   })

   it('Editar tarea', () => {
      todoPage.navigate()
      todoPage.addItems() 
      todoPage.editItems()
     
     })
   
   it('Seleccionar todas', () => {
      todoPage.navigate()
      todoPage.addItems() 
      todoPage.editItems()
      todoPage.checkAll()
     
     })

     it('Borrar completadas', () => {
      todoPage.navigate()
      todoPage.addItems() 
      todoPage.editItems()
      todoPage.checkAll()
      todoPage.clearCompleted()
     
      
     })