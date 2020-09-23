import {
  Component,
  OnInit,
  Input,
  SimpleChange,
} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  @Input() counterParent: number;
  counterHistory: Array<object> = [];
  constructor() {}

  ngOnChanges(changes: SimpleChange) {
    for (let propName in changes) {
      let change = changes[propName];
      this.counterHistory.push({currentValue: change.currentValue, PreviewValue: change.previousValue });
    }
  }

  ngOnInit(): void {}
}
