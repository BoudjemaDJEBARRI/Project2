import { Component } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { AddNewTaskPage } from '../add-new-task/add-new-task.page';
import { TodoService } from '../todo.service';
import { UpdateTaskPage } from '../update-task/update-task.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  todoList = []
  
  today: number = Date.now();

  constructor(public modalCtlr: ModalController, public todoService:TodoService) { 
    this.getAllTask()
  }

  async addNewItem() {
    const modal = await this.modalCtlr.create({
      component: AddNewTaskPage,
    })
    modal.onDidDismiss().then(newTask =>{
      this.getAllTask()
    })
    return await modal.present()
  }

  getAllTask(){
    this.todoList = this.todoService.getAllTasks()
    console.log(this.todoService.getAllTasks());
  }

  delete(key: any) { 
    this.todoService.deleteTask(key)
    this.getAllTask()
  }

  async update(selectedTask: string){
    const modal = await this.modalCtlr.create({
      component: UpdateTaskPage,
      componentProps: {task: selectedTask}
    })

    modal.onDidDismiss().then(()=>{
      this.getAllTask()
    })
    
    return await modal.present()
  }
}

// import { Component } from '@angular/core';
// import { IonicModule } from '@ionic/angular';


// @Component({
//   selector: 'app-home',
//   templateUrl: 'home.page.html',
//   styleUrls: ['home.page.scss'],
//   standalone: true,
//   imports: [IonicModule],
// })
// export class HomePage {

//   todoList = [{
//     itemName : 'Coding',
//     itemDueDate : '12-11-2023',
//     itemPriority : 'High',
//     itemCategory : 'Words',
//   },
//   {
//     itemName : 'Design',
//     itemDueDate : '15-11-2023',
//     itemPriority : 'Low',
//     itemCategory : 'Words',
//   },
//   {
//     itemName : 'Shopping',
//     itemDueDate : '13-11-2023',
//     itemPriority : 'Middle',
//     itemCategory : 'Personal',
//   },
// ]

// today : number = Date.now();

//   constructor() {}
// }
