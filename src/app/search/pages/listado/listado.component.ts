import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
@Input () characters:any[]=[]
  constructor() { }

  ngOnInit(): void {
  }

}
