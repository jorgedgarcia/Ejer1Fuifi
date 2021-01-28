import {Component, Input, OnInit} from '@angular/core';
import {VacantesPage} from '../vacantes/vacantes.page';
import {NavController} from '@ionic/angular';
import {ServiciopruebaService} from '../../services/servicioprueba.service';
import {ActivatedRoute} from '@angular/router';
import {Storage} from '@ionic/storage';


@Component({
  selector: 'app-vacante',
  templateUrl: './vacante.page.html',
  styleUrls: ['./vacante.page.scss'],
})
export class VacantePage implements OnInit {

  vacante: any = {};
  data2: any;
  datavacantes: any[] = [{
    tituloVacante: 'Titulo de la vacante',
    vacante: 'Programador/a web',
    fecha: '2020-04-14',
    imagen: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png'
  },
    {
      tituloVacante: 'Titulo de la vacante',
      vacante: 'Programador/a web2',
      fecha: '2020-04-15',
      imagen: 'https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png'
    },
    {
      tituloVacante: 'Titulo de la vacante',
      vacante: 'Programador/a web3',
      fecha: '2020-04-16',
      imagen: 'https://www.flaticon.es/svg/vstatic/svg/194/194938.svg?token=exp=1611762756~hmac=46c3c0dd45a01e7675a1a7563383e0aa'
    },
    {
      tituloVacante: 'Titulo de la vacante',
      vacante: 'Programador/a web4',
      fecha: '2020-04-17',
      imagen: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/7_avatar-512.png'
    }
  ];
  constructor(private service: ServiciopruebaService, private router: ActivatedRoute, private storage: Storage) {

    this.data2 = this.router.snapshot.data.data;
    if (!this.data2){
      this.storage.get('data').then(data => this.data2 = data);
    }


    // this.router.queryParams.subscribe(params => {
    //     console.log(params);
    //     this.data2 = JSON.parse(params.data);
    //   });
    // this.router.params.subscribe(params => {
    //   this.vacante = params;
    //   console.log(params);
    //   this.getVacante(params.id);
    // });

  }



    // getVacante(id: string){
    //   this.service.get(id).subscribe(res => {
    //      console.log(res);
    //    });
    //  }

  ngOnInit() {
  }





}
