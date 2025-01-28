import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage {

  chats = [

    { name: 'Ana',  message: 'Hola, ¿Como estas?',  time:'12:25 P.M.',  avatar:"https://ionicframework.com/docs/img/demos/avatar.svg"},
    { name: 'Luis', message: '¿Qué tal va todo?', time: '10:15 A.M.', avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { name: 'María', message: '¡Hola! ¿Nos vemos mañana?', time: '11:40 A.M.', avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { name: 'Carlos', message: '¿Pudiste revisar el informe?', time: '1:20 P.M.', avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { name: 'Lucía', message: '¿Qué película quieres ver?', time: '3:30 P.M.', avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { name: 'Andrés', message: '¡Buenas noticias! Lo logramos.', time: '2:10 P.M.', avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { name: 'Sofía', message: '¿A qué hora llegas?', time: '9:45 A.M.', avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { name: 'Javier', message: 'Gracias por tu ayuda.', time: '12:00 P.M.', avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { name: 'Laura', message: '¿Te parece bien a las 5?', time: '4:50 P.M.', avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { name: 'David', message: '¿Listo para el examen?', time: '8:30 A.M.', avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { name: 'Paula', message: '¡Qué buena idea!', time: '6:00 P.M.', avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { name: 'Fernando', message: 'Estoy afuera de tu casa.', time: '7:15 P.M.', avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { name: 'Camila', message: '¿Cómo quedó el proyecto?', time: '5:35 P.M.', avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { name: 'Pedro', message: 'No puedo ir, lo siento.', time: '9:00 A.M.', avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { name: 'Elena', message: '¡Feliz cumpleaños!', time: '8:20 A.M.', avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { name: 'Hugo', message: '¿Me puedes ayudar con esto?', time: '2:25 P.M.', avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { name: 'Diana', message: '¿Dónde estás?', time: '11:10 A.M.', avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { name: 'Miguel', message: '¡Vamos al cine hoy!', time: '1:45 P.M.', avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { name: 'Isabel', message: 'Te llamo en 5 minutos.', time: '3:00 P.M.', avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { name: 'Pablo', message: 'Recuerda llevar los documentos.', time: '10:50 A.M.', avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { name: 'Valeria', message: '¡Qué lindo día!', time: '9:25 A.M.', avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { name: 'Álvaro', message: '¿Te conectas a la reunión?', time: '4:15 P.M.', avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { name: 'Claudia', message: '¿Qué opinas de esto?', time: '2:05 P.M.', avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { name: 'Gabriel', message: 'Ya estoy llegando.', time: '7:45 P.M.', avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { name: 'Silvia', message: 'Te mandé un correo, revísalo.', time: '10:00 A.M.', avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { name: 'Rodrigo', message: 'Nos vemos en la cafetería.', time: '12:45 P.M.', avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg' }

  ];

  constructor() { }

  ngOnInit() { }

}
