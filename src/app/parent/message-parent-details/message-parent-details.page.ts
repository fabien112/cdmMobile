import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {UrlHostService} from "../../services/url-host.service";
import {TeacherService} from "../../services/teacher.service";
import {ParentService} from "../../services/parent.service";

@Component({
  selector: 'app-message-parent-details',
  templateUrl: './message-parent-details.page.html',
  styleUrls: ['./message-parent-details.page.scss'],
})
export class MessageParentDetailsPage implements OnInit {

    urlPhoto:any; message : any ;

    constructor( public modalController: ModalController,private urlData:UrlHostService,private parent:ParentService) {

        this.urlPhoto = this.urlData.apiUrlFile;

        this.message = JSON.parse(localStorage.getItem("messageParent"));
    }

  ngOnInit() {

  }

    ionViewWillEnter(){
        this.parent.updateMessagesParent(this.message)
            .subscribe(data=>{
                    this.message = data;

                },err=>{

                },
            );
    }



    close(){
        this.modalController.dismiss(null);
    }

}
