import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expositions',
  templateUrl: './expositions.component.html',
  styleUrls: ['./expositions.component.scss']
})
export class ExpositionsComponent {
  carousel1 = [
    { src: "../../../assets/images/exposiciones/1/15.jpg" },
    { src: "../../../assets/images/exposiciones/1/23.jpg" },
    { src: "../../../assets/images/exposiciones/1/3.jpg" }
  ];
  carousel2 = [
    { src: "../../../assets/images/exposiciones/2/1 (1).jpg" },
    { src: "../../../assets/images/exposiciones/2/1 (20).jpg" },
    { src: "../../../assets/images/exposiciones/2/1 (9).jpg" }
  ];
  carousel3 = [
    { src: "../../../assets/images/exposiciones/3/1 (2).jpg" },
    { src: "../../../assets/images/exposiciones/3/1 (5).jpg" },
    { src: "../../../assets/images/exposiciones/3/1 (6).jpg" }
  ];
  carousel4 = [
    { src: "../../../assets/images/exposiciones/4/1 (13).jpg" },
    { src: "../../../assets/images/exposiciones/4/1 (4).jpg" },
    { src: "../../../assets/images/exposiciones/4/1 (40).jpg" }
  ];
  effect = 'scrollx';

}
