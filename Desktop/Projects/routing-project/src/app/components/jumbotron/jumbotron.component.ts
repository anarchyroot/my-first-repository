import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {

  private jbtHeading:string;
  private jbtText:string;
  private jbtBtnText:string;
  private jbtBtnURL:string;

  constructor() {

    this.jbtHeading =  "Hello World";
    this.jbtText = "This is a simple hero unit. A jumbotron that calls attention to featured content";
    this.jbtBtnText = "Read More";

  }

  ngOnInit() {
  }


}
