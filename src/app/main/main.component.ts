import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../servics/main-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
contectMain;
  constructor(private serviceMain: MainServiceService) {
    this.contectMain = serviceMain.contectMain;
    console.log(this.contectMain);
  }

  ngOnInit() {
  }

}
