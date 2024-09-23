import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup;
  //loading = false;

  constructor(private fb: FormBuilder, private _snackBar:MatSnackBar){
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ingresar(){
    const user = this.form.value.usuario;
    const password = this.form.value.password;

    if(user == "oolivares" && password == 123456){
      /*this.loading();*/
    }else{
      this.error();
    }
  }

  error(){
    this._snackBar.open('El usuario o la contraseña ingresados son inválidos.', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition:'top'
    })
  }

  /*loading(){
    set.tim
  }*/

}
