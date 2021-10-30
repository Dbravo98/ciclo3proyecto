import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  constructor(private FormBuilder:FormBuilder) { }

  registerForm=this.FormBuilder.group({
    nombre:[''],
    marca:[''],
    valor:[''],
    peso:['']



  });

  ngOnInit(): void {
  }

  submit(){
    console.log(this.registerForm.value);
  
  }

  refrescar(){
    this.registerForm.patchValue({
      nombre:'',
    marca:'',
    valor:'',
    peso:''

    });

  }

}
