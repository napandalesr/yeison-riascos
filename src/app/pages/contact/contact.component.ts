import { Component, OnInit } from '@angular/core';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent{
  faFacebookF = faFacebook;
  faInstagram = faInstagram;
  name="";
  to="yerismo@hotmail.com";
  from="";
  subject="";
  content="";
  isSpinning = false;

  constructor(private notification: NzNotificationService) {}

  async sendEmail(){
    this.isSpinning =true;
    try {
      const response = await axios.post("https://us-central1-email-service-cloud.cloudfunctions.net/api/sendEmail",
      {to:this.to,from:this.from,subject: this.subject,content:this.content,token:environment.token});
      if([200, 201, 202, 203, 204].indexOf(response.status) > -1){
        this.notification.create('success','El mensaje fué enviado exitosamente','');
      }
      this.isSpinning =false;
    } catch (error) {
      this.notification.create('error','Ha ocurrido un error intente más tarde','');
      this.isSpinning =false;
    }
  }

  imagesConfig = {
    1: [{grow: 1, shrink: 0, basis: 'calc(25% - 0.5rem)'}]
  };
  images = [
    {src: '../../../assets/images/obras/esculturas/custodia_texto.jpg', grow: 1, shrink: 0, basis: 'calc(12% - 0.5rem)'},
    {src: '../../../assets/images/obras/coronaespina.jpg', grow: 1, shrink: 0, basis: 'calc(35% - 0.5rem)'},
    {src: '../../../assets/images/obras/rostro_divinos/IMG_6013.JPG', grow: 1, shrink: 0, basis: 'calc(15% - 0.5rem)'},
    {src: '../../../assets/images/obras/IMG_7591.JPG', grow: 1, shrink: 0, basis: 'calc(25% - 0.5rem)'},
    {src: '../../../assets/images/obras/IMG_3492.JPG', grow: 1, shrink: 0, basis: 'calc(15% - 0.5rem)'},
    {src: '../../../assets/images/obras/descendimiento/IMG_2627.JPG', grow: 1, shrink: 0, basis: 'calc(20% - 0.5rem)'},
    {src: '../../../assets/images/obras/IMG_6608.JPG', grow: 1, shrink: 0, basis: 'calc(30% - 0.5rem)'},
    {src: '../../../assets/images/obras/Imagen1.jpg', grow: 1, shrink: 0, basis: 'calc(10% - 0.5rem)'},
    {src: '../../../assets/images/obras/julio_cardenal.jpg', grow: 1, shrink: 0, basis: 'calc(15% - 0.5rem)'},
    {src: '../../../assets/images/obras/sagrado_corazon_de_jesus.JPG', grow: 1, shrink: 0, basis: 'calc(10% - 0.5rem)'},
  ];

}
