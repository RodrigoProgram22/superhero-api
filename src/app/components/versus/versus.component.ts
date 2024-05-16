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
  superheroSelect: any;
  barAnimationActive: boolean = false;
  alertaPokemonSelect: boolean = false;
  superHeroGanador: any;
  racha: number = 0;
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
    this.barAnimationActive = false;
    this.superheroSelect = '';
  }
  batalla() {
    const power1 = this.superheroe1.powerstats.power === 'null' ? null : Number(this.superheroe1.powerstats.power);
    const power2 = this.superheroe2.powerstats.power === 'null' ? null : Number(this.superheroe2.powerstats.power);
  
    if (power1 === null || power2 === null) {
      if (power1 === null) {
        this.superheroe1.powerstats.power = 'Desconocido';
      }
      if (power2 === null) {
        this.superheroe2.powerstats.power = 'Desconocido';
      }
      this.superHeroGanador = undefined;
    } else if (power1 > power2) {
      this.superHeroGanador = true;
    } else if (power1 === power2) {
      this.superHeroGanador = undefined;
    } else {
      this.superHeroGanador = false;
    }
  
    if (this.superHeroGanador === true) {
      if (this.superheroSelect === this.superheroe1.name) {
        this.racha++;
      } else {
        this.racha = 0;
      }
    } else if (this.superHeroGanador === false) {
      if (this.superheroSelect === this.superheroe2.name) {
        this.racha++;
      } else {
        this.racha = 0;
      }
    } else {
      if (this.superheroSelect === this.superheroe1.name || this.superheroSelect === this.superheroe2.name) {
        this.racha++;
      }
    }
  
    if (this.superheroSelect) {
      this.barAnimationActive = true;
      this.alertaPokemonSelect = false;
      setTimeout(() => {
        this.refrestar();
      }, 5000); // 5000 milisegundos = 5 segundos
    } else {
      this.alertaPokemonSelect = true;
    }
  }
}
