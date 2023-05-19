import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './listaPersonajes.component.html',
  styleUrls: ['./listaPersonajes.component.css']
})
export class ListaPersonajesComponent implements OnInit {


  data: any[] = [];
  public page!: number;
  public search: string = '';

  constructor(private ApiService: ApiService) { }

  ngOnInit(): void {
    this.llenarData()
  }

  llenarData() {
    this.ApiService.getData().subscribe( data => {
      this.data=data.results;
      console.log(this.data);
    })
  }

  onSearchPersonaje( search: string ){

    if( search.length === 0 )
    this.search= search;
    console.log(search);
  }

}
