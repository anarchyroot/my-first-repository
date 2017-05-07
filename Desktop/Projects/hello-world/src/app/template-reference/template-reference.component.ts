import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-reference',
  templateUrl: './template-reference.component.html',
  styleUrls: ['./template-reference.component.css']
})
export class TemplateReferenceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  private operands = {
    operand1: 47,
    operand2: 42
  };

  private difference(num1:number,num2:number):number{
    return num1-num2;
  }

  private product(num1:number,num2:number):number{
    return num1 * num2;
  }

  private quotient(num1:number,num2:number):number{
    return num1 / num2;
  }

  private quotientRounded(num1:number,num2:number):number{
    return Math.round(num1 / num2);
  }

  private max(num1:number,num2:number):number{
    return Math.max(num1, num2);
  }

  private min(num1:number,num2:number):number{
    return Math.min(num1, num2);
  }

  private avg(num1:number,num2:number):number{
    return (num1 + num2)/2;
  }

}
