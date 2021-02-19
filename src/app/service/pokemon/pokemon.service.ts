import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClientService } from '../http-client.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonService extends HttpClientService {

  private endpoint: any;

  constructor(httpclient: HttpClient, router: Router) {
    super(httpclient, router);
    this.urlBase = environment.endpoint.api
    this.endpoint = environment.endpoint.pokemon;
  }

  public getPokemonByName(name:any): Promise<any> {
    const url: string = this.endpoint.name;
    return this.get(url.replace('_name_', name));
  }
  
  public getPokemonById(id: any): Promise<any> {
    const url: string = this.endpoint.id;
    return this.get(url.replace('_id_', id));
  }

  public getPokemonByPage(limit: any, offset: any): Promise<any>{
    const url: string = this.endpoint.pagination;
    return this.get(url.replace('_limit_', limit).replace('_offset_', offset));
  }
  
}
