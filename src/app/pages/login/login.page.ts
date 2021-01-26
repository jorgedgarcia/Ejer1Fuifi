import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {VacantesPage} from '../vacantes/vacantes.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  correo: string;
  contrasenya: string;
  okey = false;

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  Login(): boolean{

    console.log(this.correo);
    console.log(this.contrasenya);
    if (this.correo === 'correo@correo.com' && this.contrasenya === 'alfatec'){
      this.okey = true;

      this.navCtrl.navigateForward('/vacantes');
    }else {
      alert('Datos incorrectos, prueba de nuevo!');
    }
    return this.okey;
  }
}
