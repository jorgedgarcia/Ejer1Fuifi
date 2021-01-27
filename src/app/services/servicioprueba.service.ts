import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Storage} from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class ServiciopruebaService {

    // tslint:disable-next-line:variable-name
    _data: any;

    constructor(private storage: Storage) { }

    get data(): any {
        return this._data;
    }

    set data(value: any) {
        this._data = value;
        this.storage.set('data', this.data);
    }

  // public get(id: string){
  //   fetch('./assets/jsonfile/datos2.json').then(res => res.json()).then(json => {
  //        this.results = json;
  //      });
  //   return this.http.get(id, this.results);
  // }
}
