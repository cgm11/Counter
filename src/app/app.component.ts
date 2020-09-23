import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  counter: number = 0;
  bookList: Array<string> = ['one', 'two', 'three', 'four', 'five'];
  isIncrementedClicked: boolean;

  ngOnInit(){
    console.log("inicio");
  }

  increment() {
    this.counter++;
    this.isIncrementedClicked = true;
  }

  decrement(){
    this.counter--;
  }
}
