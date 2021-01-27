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
