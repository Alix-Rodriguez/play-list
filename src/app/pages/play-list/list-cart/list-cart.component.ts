import { Component } from '@angular/core';

@Component({
  selector: 'app-list-cart',
  templateUrl: './list-cart.component.html',
  styleUrls: ['./list-cart.component.css']
})
export class ListCartComponent {

 public videos:any = [
  {
    title: "Peliculas",
    channel:"Venevición",
    img:"https://concepto.de/wp-content/uploads/2020/12/imagen-e1607991781485.jpg",
    description:"lorem insup"
  },
  {
    title: "Peliculas",
    channel:"Venevición",
    img:"https://concepto.de/wp-content/uploads/2020/12/imagen-e1607991781485.jpg",
    description:"lorem insup"
  },
  {
    title: "Peliculas",
    channel:"Venevición",
    img:"https://concepto.de/wp-content/uploads/2020/12/imagen-e1607991781485.jpg",
    description:"lorem insup"
  }
 ];
 
 constructor(){}


}
