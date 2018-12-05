import { Component, OnInit } from '@angular/core';
var particlesJS: any
@Component({
  selector: 'app-mheader',
  templateUrl: './mheader.component.html',
  styleUrls: ['./mheader.component.css']
})
export class MheaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    particlesJS.load('particles-js', 'assets/particles.json', function() { console.log('callback - particles.js config loaded'); });
  }

}
