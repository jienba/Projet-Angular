import {Component, Input, OnInit} from '@angular/core';
import {AppareilService} from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
  @Input() appareilName = '';
  @Input() appareilStatus = '';
  @Input() index = 0;
  color: string = '';

  constructor(private appareilService: AppareilService) { }

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

  onSwitch(): void{
    if (this.appareilStatus === 'éteint'){
      this.appareilService.switchOnOne(this.index);
    } else if (this.appareilStatus === 'allumé'){
      this.appareilService.switchOffOne(this.index);
    }
  }








}
