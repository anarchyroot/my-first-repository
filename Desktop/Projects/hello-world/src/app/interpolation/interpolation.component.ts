
  import { Component, OnInit } from '@angular/core';

  @Component({
    selector: 'app-interpolation',
    templateUrl: './interpolation.component.html',
    styleUrls: ['./interpolation.component.css']
  })
  export class InterpolationComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    //Interpolation allows the injection of primitive types
    private heading = 'Person Details';

    // And object members
    private person = {
      name: {
        firstName: 'Brian',
        lastName: "O'Grady"
      },
      address:{
        address1: '17 Riverdale',
        address2: 'Bridgetown',
        city: 'Killaloe'
      },
      gender: 'male',

      //exercise: Add more personal details
    }

  }


