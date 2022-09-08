import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  defaultImage = '../../assets/images/white-placeholder.png';
  image = '../../assets/images/image_1.png';
  aboutImage = '../../assets/images/about-us-png-3.png'

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
  scrollToContact(){
    var element = document.getElementById('contact');
    element?.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  }

  scrollToPortfolio(){
    console.log('djdk')
    var element = document.getElementById('portfolio');
    element?.scrollIntoView({behavior: "smooth", block:"end",inline:"nearest"})
  }

}
