import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  defaultImage = '../../assets/images/white-placeholder.png';
  image = '../../assets/images/about-us-png-3.png';
  ngOnInit(): void {
  }

}
