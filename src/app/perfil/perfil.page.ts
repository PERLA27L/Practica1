import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: false,
})
export class PerfilPage implements OnInit {

  perfil = [

    { name: ' Perla Luna', info: 'Estoy usando WhatsApp', tel: '+52 73 100 2727'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
