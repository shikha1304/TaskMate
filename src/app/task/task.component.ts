import { Component } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import { Task } from '../model/task-model';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  task: Task = {
    data: '',
    time: ''
  }

  constructor(private http: HttpClient){}

  date = new Date()
  update: string = ''
  
  ngOnInit(){
    
  }

  onSubmit(form: NgForm){
    console.log(form.value.data)
    this.task.data = form.value.data;
    this.task.time = `${this.date.toLocaleTimeString()} ${this.date.toLocaleDateString()}`;
    console.log(this.task)

    this.http.post('http://localhost:3000/tasks', this.task).subscribe()
    
    window.location.reload()
  }

  onUpdate(){

  }
}
