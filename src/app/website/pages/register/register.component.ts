import { Component, OnInit } from '@angular/core';

import { OnExit } from 'src/app/guards/exit.guard';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor() { }
  onExit(){
    const rta = confirm('Are you sure you want to exit')
    return rta
  }
}
