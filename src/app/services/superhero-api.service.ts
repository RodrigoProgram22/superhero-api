import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SuperheroApiService {
  private apiUrl = `https://superheroapi.com/api/745e3d7cbb6c14a386e922a8f4914724`;

  constructor(private http: HttpClient) {}

  getSuperheroById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}
