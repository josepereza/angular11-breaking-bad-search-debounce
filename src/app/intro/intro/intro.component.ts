import { Component,HostListener, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { WHITE_ON_BLACK_CSS_CLASS } from '@angular/cdk/a11y/high-contrast-mode/high-contrast-mode-detector';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css'],
  animations: [
    trigger('openClose', [
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
  ],
})
export class IntroComponent implements OnInit {
  isOpen = true;
  constructor() { }

  ngOnInit(): void {
  }
  @HostListener('window:scroll') onWindowScroll() {
    if (window.scrollY > 350) { 
   this.isOpen=false;
    } else {
    this.isOpen=true;
    }
  }
}
