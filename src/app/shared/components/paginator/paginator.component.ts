import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  limit;
  offset;
  constructor() { }

  ngOnInit(): void {
  }

  onPageActivated(event){
    this.limit = event.pageSize;
    this.offset = (Number(event.pageIndex) * Number(event.pageSize)); 
    console.log('limit: '+this.limit+ " offset: "+this.offset)
  }

}
