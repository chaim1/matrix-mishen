import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {
  contectMain;
  constructor() {
    this.contectMain = [{

      "img": "../../assets/imagesMain/עוז-לוי_תמונות-לדף-הבית.png",
      "text": "",
      "booton": "READ MOR",
      "col":7
    }, {

      "img": "../../assets/imagesMain/AR.png",
      "text": "",
      "booton": "READ MOR",
      "col":5
      }, {

      "img": "../../assets/imagesMain/GAME-CHANGERS-03.jpg",
      "text": "",
      "booton": "READ MOR",
      "col":5
      }, {

      "img": "../../assets/imagesMain/MATRIX_WEBSITE_Liron-brimer1.jpg",
      "text": "",
      "booton": "READ MOR",
      "col":7
      }, {

      "img": "../../assets/imagesMain/רמי-גור_תמונות-לדף-הבית.png",
      "text": "",
      "booton": "READ MOR",
      "col":7
      }, {

      "img": "../../assets/imagesMain/GAME-CHANGERS-01.jpg",
      "text": "",
      "booton": "READ MOR",
      "col":5
      }];
  }
}
