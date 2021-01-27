import { Component, OnInit } from '@angular/core';
import {ServiciopruebaService} from '../../services/servicioprueba.service';
import {NavigationExtras, Router} from '@angular/router';
import moment from 'moment';
moment().locale('es');

@Component({
  selector: 'app-vacantes',
  templateUrl: './vacantes.page.html',
  styleUrls: ['./vacantes.page.scss'],
})
export class VacantesPage implements OnInit {

    results: any[];
  data: any = {
      titulo: 'TÍTULO DE LA VACANTE',
      vacante: 'Programador Web',
      fecha: moment('2021-01-20').locale('es').format('dddd DDD [de] MMMM [del] YYYY'),
      comentario: 'Lorem ipsum dolor sit amet consectetur adipisci' +
          'ng elit etiam ultrices luctus integer tempus id volutpat praesent arcu nullam auctor risus, mattis tortor malesuada ' +
          'hac mi tellus est euismod. Venenatis quis leo congue egestas a habitant faucibus dignissim ',
      imagen: 'https://visualpharm.com/assets/682/New%20Job-595b40b75ba036ed117d9964.svg'
  };



  constructor(private servicio: ServiciopruebaService, private router: Router) {}

  ngOnInit() {
    fetch('./assets/jsonfile/datos2.json').then(res => res.json()).then(json => {
         console.log(json);
         this.results = json;
    });

  }

  getData(){
      const extras: NavigationExtras = {
          queryParams: {
               data: JSON.stringify(this.data)
          }
      };
      this.router.navigate(['/vacante'], extras);
  }

  getData2(){

      this.servicio.data = this.data;
      this.router.navigate(['/vacante']);

  }
}
