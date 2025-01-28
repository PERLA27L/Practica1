import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-llamadas',
  templateUrl: './llamadas.page.html',
  styleUrls: ['./llamadas.page.scss'],
  standalone: false,
})
export class LlamadasPage implements OnInit {

  llamadas = [

    { name: 'Sofía(2)', date: '2025-01-27', time: '9:45 A.M.', avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { name: 'Javier(8)', date: '2025-01-27', time: '12:00 P.M.', avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { name: 'Laura', date: '2025-01-27', time: '4:50 P.M.', avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { name: 'David(3)', date: '2025-01-27', time: '8:30 A.M.', avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { name: 'Paula(4)', date: '2025-01-27', time: '6:00 P.M.', avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { name: 'Fernando', date: '2025-01-27', time: '7:15 P.M.', avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { name: 'Camila', date: '2025-01-27', time: '5:35 P.M.', avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { name: 'Pedro(2)', date: '2025-01-27', time: '9:00 A.M.', avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { name: 'Elena(3)', date: '2025-01-27', time: '8:20 A.M.', avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { name: 'Hugo', date: '2025-01-27', time: '2:25 P.M.', avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { name: 'Diana(3)', date: '2025-01-27', time: '11:10 A.M.', avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { name: 'Miguel', date: '2025-01-27', time: '1:45 P.M.', avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
