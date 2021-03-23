import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollToHome(){
    var element = document.getElementById('home');
    element?.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  }

  scrollToAbout(){
    console.log('djdk')
    var element = document.getElementById('about');
    element?.scrollIntoView({behavior: "smooth", block:"end",inline:"nearest"})
  }

}
