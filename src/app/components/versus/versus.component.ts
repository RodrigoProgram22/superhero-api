import { Component } from '@angular/core';
import { SuperheroApiService } from 'src/app/services/superhero-api.service';
@Component({
  selector: 'app-versus',
  templateUrl: './versus.component.html',
  styleUrls: ['./versus.component.css'],
})
export class VersusComponent {
  superheroe1: any = {};
  superheroe2: any = {};

  constructor(private superheroService: SuperheroApiService) {}

  ngOnInit(): void {
    this.superheroService
      .getSuperheroById(this.generarNumeroAleatorio())
      .subscribe((data) => {
        this.superheroe1 = data; // Guarda los resultados en un array
        console.log(data);
      });
    this.superheroService
      .getSuperheroById(this.generarNumeroAleatorio())
      .subscribe((data) => {
        this.superheroe2 = data; // Guarda los resultados en un array
        console.log(data);
      });
  }

  generarNumeroAleatorio() {
    // Genera un número aleatorio entre 1 y 150
    return Math.floor(Math.random() * 150) + 1;
  }
}
