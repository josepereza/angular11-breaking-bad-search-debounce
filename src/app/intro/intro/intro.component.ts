import { Component,ElementRef,HostListener, OnInit, ViewChild,AfterViewInit, Inject } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css'],
  animations: [
    trigger('minavbar', [
      // ...
      state('open', style({
       color:'white',
        opacity: 1,
        position: 'fixed'        
      })),
      state('closed', style({
        display:'flex',
       
     
        height: '140px',
        width:'100%',
        color:'white',
        opacity: 1,
        position: 'fixed',     
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
        
        backgroundImage: 'url("/../../assets/images/minavbar.svg")'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('1s')
      ]),
      transition('open => close', [
        animate('0.5s')
      ]),
    ]),
    trigger('equipo', [
      // ...
      state('open', style({
       transform:'translate(-100px)'     
      })),
      state('closed', style({
        margin:'30px auto'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('1s')
      ]),
      transition('open => close', [
        animate('0.5s')
      ]),
    ]),
  ],
})
export class IntroComponent implements OnInit , AfterViewInit{
  @ViewChild('equipo', { static: false }) equipo!: ElementRef;
  scrollEquipo:number=0;
  isOpen = true;
  activado:boolean;
  constructor() { 
    this.activado=true;
  }

  ngOnInit(): void {
    
  }
  ngAfterViewInit() {
    this.scrollEquipo=this.equipo.nativeElement.offsetTop
    console.log(this.equipo.nativeElement.offsetTop)  
  }
  @HostListener('document:scroll') onWindowScroll() {
    if (window.pageYOffset > 350) { 
   this.isOpen=false;
    } else {
    this.isOpen=true;
    }

    if (window.pageYOffset > this.scrollEquipo-900){
      this.activado=false;
    }else {this.activado=true}
  }
}
