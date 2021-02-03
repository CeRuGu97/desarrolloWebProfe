import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/service/pokemon/pokemon.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.init();
  }

  init(){
    this.pokemonService.getPokemonByName('pikachu')
      .then((response)=>{
        console.log(response)
      })
      .catch(( error:any )=>{
        console.log(error);
      })
  }

}
