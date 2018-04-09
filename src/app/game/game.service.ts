
import { Injectable, EventEmitter } from '@angular/core';
import { Http} from '@angular/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { People } from '../domain/People';

@Injectable()
export class GameService {

  constructor(private http: Http) { }

  public getAllPeople(): Observable<People[]> {
    return this.http.get('https://swapi.co/api/people/')
      .map(response => {
        console.log(response.json().results);

        return response.json().results.map(people => {
          return new People(people.name, people.gender, people.height, people.hair_color, people.mass, people.skin_color, people.eye_color, people.birth_year, false);
        });
      });
  }





}
