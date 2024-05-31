import { Component } from '@angular/core';
import { SuperheroApiService } from 'src/app/services/superhero-api.service';

@Component({
  selector: 'app-que-prefieres',
  templateUrl: './que-prefieres.component.html',
  styleUrls: ['./que-prefieres.component.css']
})
export class QuePrefieresComponent {
  superheroe1: any = {};
  superheroe2: any = {};
  superheroSelect: any;
  constructor(private superheroService: SuperheroApiService) {}

  ngOnInit(): void {
    this.generarSuperHero();
  }
  generarNumeroAleatorio() {
    // Genera un número aleatorio entre 1 y 150
    return Math.floor(Math.random() * 150) + 1;
  }
  generarSuperHero() {
    this.superheroService
      .getSuperheroById(this.generarNumeroAleatorio())
      .subscribe((data) => {
        this.superheroe1 = data; // Guarda los resultados en un array
        console.log(this.superheroe1.powerstats.power)
      });
    this.superheroService
      .getSuperheroById(this.generarNumeroAleatorio())
      .subscribe((data) => {
        this.superheroe2 = data; // Guarda los resultados en un array
        console.log(this.superheroe2.powerstats.power)
      });
     
  }
  select(name: string) {
    this.superheroSelect = name;
  }
  refrestar() {
    this.generarSuperHero();
    this.superheroSelect = '';
  }
}
