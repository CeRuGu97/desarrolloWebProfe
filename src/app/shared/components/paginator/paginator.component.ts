import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PokemonService } from 'src/app/service/pokemon/pokemon.service';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  @Output() dataArray = new EventEmitter<string>();
  limit;
  offset;
  total;
  
  constructor(public pokemonService: PokemonService) { 
    
  }

  ngOnInit(){
    this.pokemonService.getPokemonByPage(10, 0).then((res)=>{
      this.total = res.count;
      this.dataArray.emit(res.results);
    })
  }

  onPageActivated(event){
    this.limit = event.pageSize;
    //console.log(this.limit)
    this.offset = (Number(event.pageIndex) * Number(event.pageSize)); 
    //console.log(this.offset)
    //console.log('limit: '+this.limit+ " offset: "+this.offset)
    this.pokemonService.getPokemonByPage(this.limit, this.offset).then((res)=>{
      //console.log(res);
      //this.total = res.count;
      this.dataArray.emit(res.results);
      //console.log(this.dataArray)
    }).catch((err:any)=>{
      console.log(err);
    })
  }

}
