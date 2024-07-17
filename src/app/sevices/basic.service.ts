import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasicService {

  constructor() { }

  color = ['red','blue','green', 'orange' ];

  getColors(){
    return this.color;
  }
}
