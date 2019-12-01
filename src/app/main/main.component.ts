import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../servics/main-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
contectMain;
numSliderImage;
sliderImage = [
  {
    img: "../../assets/imagesMain/Retail2.jpg",
    content:"Applying deep knowledge and experience in handling the retail and commercial sectors’.",
    header:"RETAIL",
    id:0
  },
 {
    img: "../../assets/imagesMain/MATRIX_WEBSITE_Liron-brimer1.jpg",
    content:"Applying deep knowledge and experience in handling the retail and commercial sectors’.",
    header:"DEFENSE",
    id:1
  },
  {
    img: "../../assets/imagesMain/GAME-CHANGERS-03.jpg",
    content:"Applying deep knowledge and experience in handling the retail and commercial sectors’ ",
    header: 'FINANCE',
    id:2
  }
];
  constructor(private serviceMain: MainServiceService) {
    this.contectMain = serviceMain.contectMain;
    this.numSliderImage = 0;
  }

  ngOnInit() {
  }
  nextSliderImage(id) {
      this.numSliderImage = id;
  }
  idSliderRev(id){
    if(this.numSliderImage == 2){
      this.numSliderImage = 1;
    }else if(this.numSliderImage == 0) {
      this.numSliderImage = 2;
    }else{
      this.numSliderImage--
    }
  }
  idSliderDrv(id){
    if(this.numSliderImage == 2){
      this.numSliderImage = 0;
    }else{
      this.numSliderImage++;
    }
  }

}
