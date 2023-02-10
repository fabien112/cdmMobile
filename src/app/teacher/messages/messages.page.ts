import { Component, OnInit } from '@angular/core';
import {AlertController, LoadingController, ModalController, ToastController} from "@ionic/angular";
import {TeacherService} from "../../services/teacher.service";
import {UrlHostService} from "../../services/url-host.service";
import {Router} from "@angular/router";
import {DetailmessagesPage} from "../detailmessages/detailmessages.page";


@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {

  messages:any[]; teacherData :string;
    classes : any ; Heures : any ; maiteres : any ; users : string; students : any ;
    urlPhoto:any;

  constructor(

      private teacher:TeacherService,
      private  modalController: ModalController,
      private apuUrl : UrlHostService,
      public toast: ToastController,
      private alertController:AlertController,
      private router:Router,
      public loadingController: LoadingController
  )


  {

      this.teacherData = JSON.parse(localStorage.getItem("user"));
      this.urlPhoto = this.apuUrl.apiUrlFile;
      this.users = JSON.parse(localStorage.getItem("user"));


  }

    ngOnInit() {
    }

    ionViewWillEnter() {

      this.presentLoadingWithOptions();

      this.teacher.getMessagesTeacher(this.teacherData)
          .subscribe(data=>{
                  this.messages = data;
                  this.loadingController.dismiss();
              },err=>{
              this.loadingController.dismiss();

              },
          );
  }


    async presentLoadingWithOptions() {
        const loading = await this.loadingController.create({
            spinner:"lines"  ,
            message: 'Chargement en cours...',
            // translucent: true,
            // cssClass: 'custom-class custom-loading',
            // backdropDismiss: true
        });

        return await  loading.present();
    }

    doRefresh(event) {


        this.ionViewWillEnter();

        setTimeout(() => {
            event.target.complete();
        }, 2000);
    }

    async detailsShow (values) {

        localStorage.setItem("messageTeach", JSON.stringify(values));

        this.teacher.getMessagesTeacher(this.teacherData)
            .subscribe(data=>{
                    this.messages = data;

                },err=>{


                },
            );

        const modal = await this.modalController.create({
            component: DetailmessagesPage,
            mode:'ios',
            componentProps: {

            }

        });
        return await modal.present();



    }

}
