import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent {
  isVisible = false;
  effect = 'scrollx';

  showModal(title:string): void {
    this.isVisible = true;
    this.getDataModal(title);
  }

  handleOk(): void {
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  getDataModal(title:string) {
    switch(title) {
      case "CUSTODIA":
        this.carousel = this.imagesCustodia;
        break;
      case "CORONA DE ESPINAS":
        this.carousel = this.imagesCoronaEspinas;
        break;
      case "ROSTROS DIVINOS":
        this.carousel = this.imagesRostrosDivinos;
        break;
      case "NATIVIDAD EN EL PACIFICO":
        this.carousel = this.imagesNatividad;
        break;
      case "TRANSVERBERACION DE UNA PORTEÑA":
        this.carousel = this.imagesTransverbencion;
        break;
      case "DESCENDIMIENTOS":
        this.carousel = this.imagesDescendimiento;
        break;
      case "ECCE HOMO":
        this.carousel = this.imagesEcceHomo;
        break;
      case "SAGRADO CORAZON DE MARIA":
        this.carousel = this.imagesSagradoCorazonMaria;
        break;
      case "CARDENAL":
        this.carousel = this.imagesCardenal;
        break;
      case "SAGRADO CORAZON DE JESÚS":
        this.carousel = this.imagesSagradoCorazonJesus;
        break;
    }
  }

  imagesConfig = {
    1: [{grow: 1, shrink: 0, basis: 'calc(25% - 0.5rem)'}]
  };
  images = [
    {src: '../../../assets/images/obras/esculturas/custodia_texto.jpg', grow: 1, shrink: 0, basis: 'calc(20% - 0.5rem)', title: "CUSTODIA", text: `En el culto católico es la pieza de oro o de otro metal precioso generalmente plata dorada, donde se 
    coloca la hostia después de consagrada para adoración de los fieles. Sus formas son distintas, pero una 
    de las más comunes es la de sol.
    En busca de memorias, historias y reliquias, nació la idea de crear objetos para guardar ese sentimiento 
    o culto sagrado de una población. Creé una custodia con restos óseos marinos que se encontraban en la 
    calle, huesos de pescados consumidos por los vecinos, otros encontrados a orillas del mar y  esteros 
    cerca de casas palafíticas. Esta custodia, desde mi punto de vista, es la representación de la población 
    de Buenaventura consagrada.`},
    {src: '../../../assets/images/obras/coronaespina.jpg', grow: 1, shrink: 0, basis: 'calc(25% - 0.5rem)', title: "CORONA DE ESPINAS", text: `La corona de espinas es un símbolo cristiano que recuerda la Pasión de Jesús, se menciona en los evangelios de Juan (19:2, 5), Marcos (15:17) y Mateo (27:29).
    La reconstrucción de este símbolo de la comunidad católica fue elaborado  con huesos de pescado consumidos por personas en muchos de sus platos. Un pez que nace de un huevo se convierte adulto y es atrapado por pescadores para el sustento de sus familias. Es vendido a mujeres quienes los llevan en 
    platones encima de sus cabezas para nuevamente comercializarlos en los barrios por donde caminan.
    Todo esto se convierte en una historia tejida, dando como resultado una circunferencia que al mismo tiempo se convierte en una corona de espinas, uniéndose en diálogo con la serie de rostros divinos expuesto en esta investigación. `},
    {src: '../../../assets/images/obras/rostro_divinos/IMG_6013.JPG', grow: 1, shrink: 0, basis: 'calc(20% - 0.5rem)', title: "ROSTROS DIVINOS", text: `
    Rostros Divinos es una serie de retratos fotográficos a mujeres y hombres con una corona, construida con restos óseos de animales marinos. La imagen referente es del “divino rostro” imagen popular de Jesús con la corona de espinas de la iglesia católica.
    la serie de Rostros Divinos, busca representar en cada uno de ellos ese rostro presente, conforme e inconforme al mismo tiempo, pero con una actitud serena y de protesta junto a un fuerte sentido de pertenencia.
    `},
    {src: '../../../assets/images/obras/IMG_7591.JPG', grow: 1, shrink: 0, basis: 'calc(20% - 0.5rem)', title: "NATIVIDAD EN EL PACIFICO", text: `
    Natividad en el pacífico es una imagen cargada de un icono no solo de la iglesia católica si no de un tema como lo es el fruto del banano, fruto mítico que ha tenido una historia sangrienta que enlutó a  Colombia como lo fue en la masacre de las bananeras, su repercusión en la historia ha estado vigente hasta nuestros días.
    Aun así en el pacífico sur colombiano este fruto también ha sido el sustento de muchos hogares, ya que su consumo es casi diario y apetecido por la población dentro de lo que es la gastronomía.
    Tanto el niño como los bananos verdes, son un nacimiento nuevo en el pacífico, el hombre como símbolo de vida y esperanza hace presencia ante un fruto que fue, es y será el sustento de muchos hogares no solo del pacífico, también de todo el país.
    `},
    {src: '../../../assets/images/obras/IMG_3492.JPG', grow: 1, shrink: 0, basis: 'calc(15% - 0.5rem)', title: "TRANSVERBERACION DE UNA PORTEÑA", text: `
    Basada en la obra del  artista italiano creador del estilo Barroco en la escultura europea Gian Lorenzo Bernini, el Éxtasis de Santa teresa. 
    Con la obra Transverberación de una porteña  rescato una imagen que nos queda solamente en la tradición oral ya que “en efecto, la memoria es el gran nutriente de la identidad”   para las nuevas generaciones que vienen creciendo en un pueblo inmerso en constantes cambios forzados por la misma nación por el afán del modernismo competitivo.
    `},
    {src: '../../../assets/images/obras/descendimiento/IMG_2627.JPG', grow: 1, shrink: 0, basis: 'calc(20% - 0.5rem)', title: "DESCENDIMIENTOS", text: `
    “Descendimientos”  es una obra cargada de muchos sentimientos, planteada, elaborada y ejecutada como forma de protesta de todos quienes hicimos parte    de este trabajo; Así cada uno de los jóvenes modelos pasaron por horas de maquillaje y puesta en escena entrelazados por lazos gruesos que sostenían sus cuerpos, tal como lo vemos en las imágenes del descendimiento del cuerpo de Cristo, Esta vez es la representación de doce jóvenes muertos por manos asesinas, hechos que se volvieron en algunos meses costumbre en toda el área de Buenaventura manchándola con su sangre.
    Esta obra es en honor a los doce jóvenes del barrio de Punta del Este en Buenaventura quienes salieron de sus casas para no volver jamás.
    `},
    {src: '../../../assets/images/obras/IMG_6608.JPG', grow: 1, shrink: 0, basis: 'calc(30% - 0.5rem)', title: "ECCE HOMO", text: `
    Con este tema revelo una constante en la forma de vida social en la comunidad afrocolombiana en todo el territorio nacional, 
    siendo en el litoral una situación intolerante, como también en el interior del país. Pero a pesar de todos los obstáculos que rodean la pobreza de la población afrodescendiente de estratos 1 y 2, las personas viven y trabajan especialmente para tres cosas: la comidad, el vestir y un buen equipo de sonido, convirtiéndose en cada uno de los hogares de buenaventura en una norma de vida, la cual se convierte en una imagen típica de nuestra región: He aquí el hombre (el escandaloso, el que señalo).
    `},
    {src: '../../../assets/images/obras/Imagen1.jpg', grow: 1, shrink: 0, basis: 'calc(10% - 0.5rem)', title: "SAGRADO CORAZON DE MARIA", text: ``},
    {src: '../../../assets/images/obras/julio_cardenal.jpg', grow: 1, shrink: 0, basis: 'calc(15% - 0.5rem)', title: "CARDENAL", text: ``},
    {src: '../../../assets/images/obras/sagrado_corazon_de_jesus.JPG', grow: 1, shrink: 0, basis: 'calc(10% - 0.5rem)', title: "SAGRADO CORAZON DE JESÚS", text: ``},
  ];

  imagesCustodia = [
    { src: "../../../assets/images/obras/esculturas/custodia_texto.jpg" },
    { src: "../../../assets/images/obras/esculturas/custodia_tex1.jpg" },
    { src: "../../../assets/images/obras/esculturas/custodia_tex2.jpg" }
  ];

  imagesCoronaEspinas = [
    { src: "../../../assets/images/obras/coronaespina.jpg" }
  ];

  imagesRostrosDivinos = [
    { src: "../../../assets/images/obras/rostro_divinos/IMG_6013.JPG" },
    { src: "../../../assets/images/obras/rostro_divinos/IMG_6358.JPG" },
    { src: "../../../assets/images/obras/rostro_divinos/IMG_6412.JPG" }
  ];

  imagesDescendimiento = [
    { src: "../../../assets/images/obras/descendimiento/IMG_1705.JPG" },
    { src: "../../../assets/images/obras/descendimiento/IMG_2251.JPG" },
    { src: "../../../assets/images/obras/descendimiento/IMG_2496.JPG" },
    { src: "../../../assets/images/obras/descendimiento/IMG_2627.JPG" },
    { src: "../../../assets/images/obras/descendimiento/IMG_2894.JPG" },
    { src: "../../../assets/images/obras/descendimiento/IMG_5926.JPG" }
  ];

  imagesEcceHomo = [
    { src: "../../../assets/images/obras/IMG_6608.JPG" }
  ];

  imagesSagradoCorazonMaria = [
    { src: "../../../assets/images/obras/Imagen1.jpg" }
  ]

  imagesCardenal = [
    { src: "../../../assets/images/obras/julio_cardenal.jpg" }
  ]

  imagesSagradoCorazonJesus = [
    { src: "../../../assets/images/obras/sagrado_corazon_de_jesus.jpg" }
  ]

  imagesNatividad = [
    { src: "../../../assets/images/obras/IMG_7591.JPG" }
  ];

  imagesTransverbencion = [
    { src: "../../../assets/images/obras/IMG_3492.JPG" }
  ];

  carousel = [
    { src: "../../../assets/images/obras/IMG_3492.JPG" }
  ];
  

}
