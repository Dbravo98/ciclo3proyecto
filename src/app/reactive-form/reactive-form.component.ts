import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor(private FormBuilder:FormBuilder) { }

  registerForm=this.FormBuilder.group({
    username:[''],
    apellidos:[''],
    cedula:[''],
    correo:[''],
    telefono:[''],
    direccion:[''],
    pais:[''],
    ciudad:['']



  });

  ngOnInit(): void {
  }

  submit(){
    console.log(this.registerForm.value);
  
  }

  refrescar(){
    this.registerForm.patchValue({
      username:'',
      apellidos:'',
      cedula:'',
      correo:'',
      telefono:'',
      direccion:'',
      pais:'',
    ciudad:''

    });

  }

}
