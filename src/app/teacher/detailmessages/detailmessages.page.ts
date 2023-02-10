import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {UrlHostService} from "../../services/url-host.service";
import {TeacherService} from "../../services/teacher.service";

@Component({
  selector: 'app-detailmessages',
  templateUrl: './detailmessages.page.html',
  styleUrls: ['./detailmessages.page.scss'],
})
export class DetailmessagesPage implements OnInit {

    urlPhoto:any; message : any ;

    constructor( public modalController: ModalController,private urlData:UrlHostService,private teacher:TeacherService) {

        this.urlPhoto = this.urlData.apiUrlFile;

        this.message = JSON.parse(localStorage.getItem("messageTeach"));
    }

  ngOnInit(){

  }

    ionViewWillEnter() {


        this.teacher.updateMessagesTeacher(this.message)
            .subscribe(data=>{

                },err=>{
                    console.log(err);
                },
            );


    }

    close(){
        this.modalController.dismiss(null);
    }

}
