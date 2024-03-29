import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
  @Input() appareilName = '';
  @Input() appareilStatus = '';
  color: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  getStatus(): string {
    return this.appareilStatus;
  }

  getColor(): string {
    if (this.appareilStatus === 'éteint'){
      this.color = 'red';
    } else if (this.appareilStatus === 'allumé'){
      this.color = 'green';
    }
    return  this.color;
  }
}
