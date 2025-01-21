import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {

  constructor() {}

  ngOnInit(){
    console.log('Hola Mundo');
    console.log('Este es mi primer componente');
    console.log('LUNA');
    console.log('Aprendiendo');
  }
}
