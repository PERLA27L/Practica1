import { Component, OnInit } from '@angular/core';
import {NavController, ToastController} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {

  email: string = '';
  password: string = '';

  constructor(
    private navController: NavController,
    private toastController: ToastController
  ) { }

  ngOnInit() {
  }

  login() {
    if(this.email === '20233L001119@utcv.edu.mx' && this.password === '1234'){
      this.navController.navigateRoot('/inicio');
    }
    else{
      this.presentToast();
    }
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Las credenciales de acceso son incorrectas',
      duration: 3000,
      position: 'bottom',
      color: 'warning'
    });

    await toast.present();
  }

}
