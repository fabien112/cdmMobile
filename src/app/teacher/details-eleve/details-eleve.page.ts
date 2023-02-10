import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {UrlHostService} from "../../services/url-host.service";
import {TeacherService} from "../../services/teacher.service";
@Component({


  selector: 'app-details-eleve',
  templateUrl: './details-eleve.page.html',
  styleUrls: ['./details-eleve.page.scss'],
})
export class DetailsElevePage implements OnInit {

    yudsegment: string;

    urlPhoto:string;

    parentEleveInfosTeacher : any ;

    parent : any ;

  constructor( public modalController: ModalController,private urlData:UrlHostService,private teacher:TeacherService) {

      this.urlPhoto = this.urlData.apiUrlFile;

      this.parentEleveInfosTeacher = JSON.parse(localStorage.getItem("EleveInfosTeacher"));
  }

    ionViewWillEnter(){
        this.yudsegment = "today";
    }

  ngOnInit() {


      this.teacher.getInfoparent(this.parentEleveInfosTeacher)
          .subscribe(data=>{
                  this.parent = data
              },err=>{

              },
          );


  }

    close(){
        this.modalController.dismiss(null);
    }

}


