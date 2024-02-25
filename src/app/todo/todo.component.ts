import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-todo',
    standalone: true,
    templateUrl: './todo.component.html',
    styleUrl: './todo.component.css',
    imports: [HttpClientModule]
})
export class TodoComponent {

  count: number = 0;

  taskList: any

  constructor(private http: HttpClient){

  }

  ngOnInit(){
    this.http.get<any>('http://localhost:3000/tasks').subscribe((res)=>{
      this.taskList = res;
    })

    this.count = this.taskList.length
  }

  onEdit(){
    
  }

  onRemove(id:number){
    this.http.delete('http://localhost:3000/tasks/'+ id).subscribe()
    window.location.reload()
  }
}
