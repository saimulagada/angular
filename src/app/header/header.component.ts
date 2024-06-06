import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent{
  nav = document.getElementsByTagName("nav");
  submitBars: boolean = false;
  // submitBars(){
  //   this.nav != this.nav;
  //   console.log(this.nav[0]);
  //   this.nav[0].style.display = "block";
  // }
}


