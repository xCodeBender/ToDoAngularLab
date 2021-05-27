import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToDo } from '../to-do';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addTask:ToDo[] = []
  
  things:ToDo[] = [
    {
      task:"Study",
      completed: true
    },
    {
      task:"Travel",
      completed: false
    },
    {
      task:"Cook",
      completed: true
    },
    {
      task:"Shop",
      completed: false
    },
    {
      task:"Create content",
      completed: true
    },
    {
      task:"Chill",
      completed: true
    },
  ]

  addToList(form:NgForm){
    let newItem:ToDo = {
      task: form.form.value.task,
      completed: form.form.value.completed,
    };

    this.addTask.push(newItem);
  };


  
}
