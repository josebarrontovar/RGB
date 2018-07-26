import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-itemscontainer',
  templateUrl: './itemscontainer.component.html',
  styleUrls: ['./itemscontainer.component.css']
})
export class ItemscontainerComponent implements OnInit {

  items = [
    {
      title: "Hola 1",
      description: "this is my descriptionthis is my descriptionthis is my descriptionthis is my descriptionthis is my description"
    },
    {
      title: "Hola 2",
      description: "this is my descriptionthis is my descriptionthis is my descriptionthis is my descriptionthis is my description"
    },
    {
      title: "Hola 3",
      description: "this is my descriptionthis is my descriptionthis is my descriptionthis is my descriptionthis is my description"
    },
    {
      title: "Hola 4",
      description: "this is my descriptionthis is my descriptionthis is my descriptionthis is my descriptionthis is my description"
    },
    {
      title: "Hola 5",
      description: "this is my descriptionthis is my descriptionthis is my descriptionthis is my descriptionthis is my description"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
