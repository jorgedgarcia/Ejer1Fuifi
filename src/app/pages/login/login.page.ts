import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {VacantesPage} from '../vacantes/vacantes.page';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public navCtrl: NavController, private fb: FormBuilder) {

  }

  get email(){
    return this.forma.get('emailform');
  }

  get password(){
    return this.forma.get('passwordform');
  }


  correo: string;
  contrasenya: string;
  okey = false;
  forma: FormGroup;

  ngOnInit() {
      this.contraseña();
  }


  contraseña(){
       this.forma = this.fb.group({
                correo: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')] ],
                contrasenya: ['', [ Validators.required, Validators.minLength(8), Validators.pattern('^(?=.[A-Za-z])(?=.\d)[A-Za-z\d]$'
                )]]
            });
  }

Login(form: NgForm) {

    if (form.invalid){
      return;
      alert('Datos incorrectos, prueba de nuevo!');
    }else {
      this.navCtrl.navigateForward('/vacantes');
    }

    // console.log(this.correo);
    // console.log(this.contrasenya);
    // if (this.correo === 'correo@correo.com' && this.contrasenya === 'aalfatec'){
    //   this.okey = true;
    //
    //   this.navCtrl.navigateForward('/vacantes');
    // }else {
    //   alert('Datos incorrectos, prueba de nuevo!');
    // }
    // return this.okey;
  }


}



