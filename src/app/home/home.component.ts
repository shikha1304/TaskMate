import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { TaskComponent } from "../task/task.component";
import { TodoComponent } from "../todo/todo.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [NavComponent, TaskComponent, TodoComponent]
})
export class HomeComponent {

}
