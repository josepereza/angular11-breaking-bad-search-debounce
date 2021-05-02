import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import {
  debounceTime,
  map,
  distinctUntilChanged,
  filter
} from "rxjs/operators";
import { SearchService } from '../../services/search.service';
@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
 personajes:any[]=[]

 
  @ViewChild ('searchInput', { static: true }) searchInput!: ElementRef;
  constructor(private searchService:SearchService) { }

  ngOnInit(): void {

    fromEvent(this.searchInput.nativeElement, 'keyup').pipe(

      // get value
      map((event: any) => {
        return event.target.value;
      })
      // if character length greater then 2
      , filter(res => res.length > 2)

      // Time in milliseconds between key events
      , debounceTime(1000)

      // If previous query is diffent from current   
      , distinctUntilChanged()

      // subscription for response
    ).subscribe((text: string) => {
    this.searchService.getList(text).subscribe((datos:any[])=>{
this.personajes=datos;
      console.log(datos)
    })
      console.log(text)


    });
  }
    
  

}
