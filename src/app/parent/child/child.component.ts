import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Car } from '../car';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() car!: Car;
  @Output() carEventEmitter: EventEmitter<Car> = new EventEmitter<Car>()

  carNew :Car = {make:"Mercedes", year:2020, color:"white", door:4 }

  onCarEmit(){
    this.carEventEmitter.emit(this.carNew);
  }
  
  ngOnInit(){
    this.carEventEmitter.emit(this.carNew)
  }

  constructor() { }



}
