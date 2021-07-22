import { Component, OnInit } from '@angular/core';
import { Car } from './car';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  carP: Car ={
    make:"BMW",
    color:"Black",
    year: 2019,
    door: 2
  };
  
  make: string = '';
  year: number = 0;
  color: string = 'White';
  door: number = 4;

  cars: Car[] = [
    {
      make:"BMW",
      color:"Black",
      year: 2019,
      door: 2
    },
    {
      make:"BMW",
      color:"Black",
      year: 2019,
      door: 2
    },
    {
      make:"BMW",
      color:"Black",
      year: 2019,
      door: 2
    }
  ]
  
  bar(car : Car){
    console.log(car)
  }
  constructor() { }

  ngOnInit(): void {
  }

  makeCar(): void {
    const newCar = {
      make: this.make,
      year: this.year,
      color: this.color,
      door: this.door,
    };

    console.log(newCar);
  }
}
