import { Component, OnInit } from '@angular/core';
import {ServiciopruebaService} from '../../services/servicioprueba.service';
import {NavigationExtras, Router} from '@angular/router';

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
      fecha: '15-04-2021',
      comentario: 'Lorem ipsum dolor sit amet consectetur adipisci' +
          'ng elit etiam ultrices luctus integer tempus id volutpat praesent arcu nullam auctor risus, mattis tortor malesuada ' +
          'hac mi tellus est euismod. Venenatis quis leo congue egestas a habitant faucibus dignissim '
  };

  constructor(private servicio: ServiciopruebaService, private router: Router) {
    // this.localstorage();
    //   this.router.params.subscribe(params => {
    //       this.enviarDetalle(params.id);
    //   });
  }

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


   //  enviarDetalle(id: string){
   //   this.servicio.get(id).subscribe(res => {
   //      this.results = res;
   //   });
   // }
  // localstorage() {
  //   // fetch('./assets/jsonfile/datos2.json').then(res => res.json()).then(json => {
  //   //   console.log(json);
  //   //   this.results = json;
  //   // });
  //
  //   const datos = {
  //     id: 1,
  //     tituloVacante: 'Titulo de la vacante',
  //     vacante: 'Programador/a web2',
  //     fecha: '2020-04-15'
  //   };
  //
  //
  //   localStorage.setItem('datos2',  JSON.stringify(datos));
  // }

}
