import { Injectable } from '@angular/core';
import {Resolve} from '@angular/router';
import {ServiciopruebaService} from './servicioprueba.service';

@Injectable({
  providedIn: 'root'
})
export class DataResolverService implements Resolve<any>{

  constructor(private servicio: ServiciopruebaService) { }

  resolve() {
    return this.servicio.data;
    console.log('resolverdata');
  }
}
