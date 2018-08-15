import { Component, OnInit } from '@angular/core';
import { TodoService } from './shared/todo.service';
import { AuthService } from '../auth/auth.service';
import { AngularFireAuth } from 'angularfire2/auth'; 
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-todomain',
  templateUrl: './todomain.component.html',
  styleUrls: ['./todomain.component.css'],
  providers: [TodoService], // To make it local for this component for now to avoid problems. Will make it global later when the rest of the features are ready
})
export class TodomainComponent implements OnInit {
  todolistArray: any[]; // Change later to only accept a certain model structure, for safety reasons. Between ionic and angular
  user = 'unknown';

  constructor(private todoService: TodoService, private authService: AuthService) { }

  ngOnInit() {
    this.todoService.getTodoList().snapshotChanges().subscribe(
      item => {
        this.todolistArray = [];
        // loop through the list given from the firebase, then push them to the todolistArray for working in local 
        item.forEach(element => {
          var localItem = element.payload.toJSON(); // Legacy will change to updated version, as it's taken as JSON by default
          localItem["$key"] = element.key; // assign the unique key to the element as key variable
          this.todolistArray.push(localItem); // Then push it to the array
        })

        // Sort the list based on isChecked false -> true (so all the unchecked are on top and then the finished checked ones are on bottom)
        this.todolistArray.sort((a, b) => {
          return a.isChecked - b.isChecked;
        })
      }
    )
  }

  onAdd(itemName) {
    this.user = firebase.auth().currentUser.email; 
    console.log(itemName.value);
    this.todoService.addItem(itemName.value, this.user); // Access the itemName value (whatever is typed into input field, then add it to the firebase via service)
    itemName.value = null; // Reset the input field
  }

  updateCheck($key: string, isChecked) {
    this.todoService.checkItemStatus($key, !isChecked); // Change the isChecked based on what it currently is, so if it's false then change to true, true then false
  }

  onDelete($key: string) {
    this.todoService.removeItem($key);
  }

  isAuthenticatedCheck() {
    return this.authService.isAuthenticated();
  }

}
