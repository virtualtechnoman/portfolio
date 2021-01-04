import { Component, OnChanges, OnInit } from '@angular/core';
import Typed from 'typed.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges, OnInit {
  title = 'portfolio';

  constructor() { }

  ngOnInit() {
    const options = {
      strings: ['Developer.', 'Photographer.','Gamer.'],
      typeSpeed: 100,
      backSpeed: 100,
      showCursor: true,
      cursorChar: '|',
      loop: true
    };

    const typed = new Typed('.typed', options);
  }
  ngOnChanges() {
  }
}