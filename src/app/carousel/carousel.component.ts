import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  @Input() color:string;

  constructor() {
    setInterval(function(){ alert("Cambio de Color"); }, 3000);
   }

  ngOnInit() {
  }

}
