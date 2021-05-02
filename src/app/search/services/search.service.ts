import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http:HttpClient) {

   }
   getList(nombre:string){
     if (nombre !="all"){
            return this.http.get<any[]>(`https://www.breakingbadapi.com/api/characters?name=${nombre}`)

     }else             return this.http.get<any[]>(`https://www.breakingbadapi.com/api/characters`)

   }
}
