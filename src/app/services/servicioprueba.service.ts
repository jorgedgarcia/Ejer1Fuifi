import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiciopruebaService {

  results: any;
  data2: any = {};

  getData(){
      return this.data;
  }

  set data(data){
        this.data = data;
  }

  constructor(private http: HttpClient) { }

  // public get(id: string){
  //   fetch('./assets/jsonfile/datos2.json').then(res => res.json()).then(json => {
  //        this.results = json;
  //      });
  //   return this.http.get(id, this.results);
  // }
}
