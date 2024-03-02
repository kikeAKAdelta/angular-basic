import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent {

  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName(): string{
    return this.name.toUpperCase();
  }

  /**A diferencia de Getter o Setters, los metodos se debe utilizar parentesis en su invocacion */
  /**Metodo */
  getHeroDescription(): string{
    return `${ this.name } - ${ this.age }`;
  }

  changeHeroe(heroe: string): void{
    this.name = heroe;
  }

  changeAge(age: number): void{
    this.age = age;
  }

  resetHeroe(): void{
    this.name = 'ironman';
    this.age = 45;
  }
}
