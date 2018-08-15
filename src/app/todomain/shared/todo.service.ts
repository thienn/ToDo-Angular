import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoList: AngularFireList<any>;

  constructor(private firebasedb: AngularFireDatabase) { }

  getTodoList() {
    this.todoList = this.firebasedb.list('items'); // Connect the local one to the one that the app get from the firebase connection with the argument given. The items db in this case
    return this.todoList;
  }

  addItem(name: string, user: string) {
    this.todoList.push({
      name: name,
      author: user,
      description: "", 
      isChecked: false
    });
  }

  checkItemStatus($key: string, flag: boolean) {
    this.todoList.update($key, { isChecked: flag }); // Checks the status of the item based on the key given from firebase, then update the flag to true or false (boolean)
  }

  removeItem($key: string) {
    this.todoList.remove($key); // Remove item based on the given key information (id)
  }
}
