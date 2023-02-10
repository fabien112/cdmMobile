import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detailsquizz',
  templateUrl: './detailsquizz.page.html',
  styleUrls: ['./detailsquizz.page.scss'],
})
export class DetailsquizzPage implements OnInit {

    detailsquizz : any ;

    constructor( public modalController: ModalController) {

        this.detailsquizz = JSON.parse(localStorage.getItem("detailsquizz"));
    }

  ngOnInit() {
  }


    close(){
        this.modalController.dismiss(null);
    }

}
