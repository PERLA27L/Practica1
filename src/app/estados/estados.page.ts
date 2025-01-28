import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estados',
  templateUrl: './estados.page.html',
  styleUrls: ['./estados.page.scss'],
  standalone: false,
})
export class EstadosPage implements OnInit {

  estados = [
    
    { name: 'Ana', time:'12:25 P.M.', avatar:"https://ionicframework.com/docs/img/demos/avatar.svg"},
    { name: 'María', time: '11:40 A.M.', avatar:"https://ionicframework.com/docs/img/demos/avatar.svg"},
    { name: 'Sofía', time: '9:45 A.M.', avatar:"https://ionicframework.com/docs/img/demos/avatar.svg"},
    { name: 'Javier', time: '12:00 P.M.', avatar:"https://ionicframework.com/docs/img/demos/avatar.svg"},
    { name: 'Paula', time: '6:00 P.M.', avatar:"https://ionicframework.com/docs/img/demos/avatar.svg"},
    { name: 'Isabel', time: '3:00 P.M.', avatar:"https://ionicframework.com/docs/img/demos/avatar.svg"}
  ];

  constructor() { }

  ngOnInit() {
  }

}
