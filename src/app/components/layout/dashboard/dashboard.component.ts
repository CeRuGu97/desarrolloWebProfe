import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/service/pokemon/pokemon.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

    //stop=6;
 
    img : '';
    name: ''; 
    height: '';
    weight: number;

    type: '';
    hp: '';
    exp: '';
    ataque:'';
    defensa:'';
    especial:'';
    speed: '';

    abilitis: string [] = [];
    moves: string [] = [];
    


  constructor(private pokemonService: PokemonService) { }

  ngOnInit(){
    this.pokemonService.getPokemonByName('pikachu')
    .then((response)=>{
      this.img = response.sprites.other.dream_world.front_default;
        this.name = response.name;
        this.height = response.height;
        this.weight = response.weight;
        
        this.type = response.types[0].type.name;
        this.hp = response.stats[0].base_stat;
        this.exp = response.base_experience;
        this.ataque = response.stats[1].base_stat;
        this.defensa = response.stats[2].base_stat;
        this.especial = response.stats[3].base_stat;
        this.speed = response.stats[5].base_stat;

        for (let index = 0; index < response.abilities.length; index++) {
          //console.log(response.abilities[index].ability.name)
          this.abilitis[index] = response.abilities[index].ability.name
        }
        for (let index = 0; index < response.moves.length; index++) {
          //console.log(response.moves[index].move.name)
          this.moves[index] = response.moves[index].move.name
        }


        console.log(response)
        //console.log(this.abilitis)
      })
      .catch(( error:any )=>{
        console.log(error);
      })
    }
    
    // //era para poner mas datos a los movimientos moves
    // mas(num:any){
    //   if(num == 1){
    //     this.stop += 10;
    //   }else if(num == 2){
    //     this.stop = this.stop - 10;
    //     if(this.stop <= 0 ){
    //       this.stop = 0
    //     }
    //   }
    //   //console.log(this.stop);
    // }
    
    
}
  