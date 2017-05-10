import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-ng-for',
  templateUrl: './directives-ng-for.component.html',
  styleUrls: ['./directives-ng-for.component.css']
})
export class DirectivesNgForComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

private streams = [
  {item: {name: 'Module',   description: 'Description'}},
  {item: {name: 'Stream 0', description: 'Core Primer'}},
  {item: {name: 'Stream 1', description: 'HTML/CSS/JS'}},
  {item: {name: 'Stream 2', description: 'Data/Python'}},
  {item: {name: 'Stream 3', description: 'Django/Python'}}
];
