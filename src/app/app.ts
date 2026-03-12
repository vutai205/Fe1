import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'Angular'; 
  fullName = 'Anh Tai';
  age: number = 20;

  // method: function
  sayHello() {
    console.log('hello ');
    alert('hello ' + this.fullName);
  }
}
