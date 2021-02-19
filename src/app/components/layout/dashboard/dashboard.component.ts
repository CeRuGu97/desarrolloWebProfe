import { Component, OnInit } from '@angular/core';
import { isInteger } from '@ng-bootstrap/ng-bootstrap/util/util';
import { PokemonService } from 'src/app/service/pokemon/pokemon.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

    data: any = {};
    error: boolean;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(){
    this.getPokemonName('pikachu');
    this.error = false;
    }
  getPokemonName(nombre:any){
      this.pokemonService.getPokemonByName(nombre).then((response)=>{
      let abilitis = []
      let moves = []
      for (let index = 0; index < response.abilities.length; index++) {
        abilitis[index] = response.abilities[index].ability.name
      }
      for (let index = 0; index < response.moves.length; index++) {
        moves[index] = response.moves[index].move.name
      }
      this.data = 
        {
          img: response.sprites.other.dream_world.front_default,
          name: response.name,
          abilitis,
          moves,
          height : response.height,
          weight : response.weight,
          type : response.types[0].type.name,
          hp : response.stats[0].base_stat,
          exp : response.base_experience,
          ataque : response.stats[1].base_stat,
          defensa : response.stats[2].base_stat,
          especial : response.stats[3].base_stat,
          speed : response.stats[5].base_stat,
        }
        this.error = false;
      })
      .catch(( error:any )=>{
        this.error = true;
      })
    }

  getPokemonId(id:any){
      this.pokemonService.getPokemonById(id).then((response)=>{
      let abilitis = []
      let moves = []
      for (let index = 0; index < response.abilities.length; index++) {
        abilitis[index] = response.abilities[index].ability.name
      }
      for (let index = 0; index < response.moves.length; index++) {
        moves[index] = response.moves[index].move.name
      }
      this.data = 
        {
          img: response.sprites.other.dream_world.front_default,
          name: response.name,
          abilitis,
          moves,
          height : response.height,
          weight : response.weight,
          type : response.types[0].type.name,
          hp : response.stats[0].base_stat,
          exp : response.base_experience,
          ataque : response.stats[1].base_stat,
          defensa : response.stats[2].base_stat,
          especial : response.stats[3].base_stat,
          speed : response.stats[5].base_stat,
        }
        this.error = false;
      })
      .catch(( error:any )=>{
        this.error = true;
      })
    }  
  getPokemon(event){
      // console.log(event)
      if(!isNaN(Number(event))){
        let numer = Number(event)
        // console.log('es numero: '+ numer )
        this.getPokemonId(numer);
      }else{
        // console.log('es letras: ' + event );
        this.getPokemonName(event);
      }
      
    }
    
}
  