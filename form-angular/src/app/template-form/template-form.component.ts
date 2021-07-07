import { Component, OnInit } from '@angular/core';

interface IRegisterForm {
  name: string;
  email: string;
  password: string;
  repeatPass: string;
}

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  register: IRegisterForm = {
    name: "",
    email:"",
    password:"",
    repeatPass:""
  }

  constructor() { }

  ngOnInit(): void {
  }

  submit() {

  }
}
