import { Component, OnInit } from '@angular/core';
import {TeacherService} from "../../services/teacher.service";
import {UrlHostService} from "../../services/url-host.service";
import {AlertController, LoadingController, ToastController} from "@ionic/angular";
import {Router} from "@angular/router";

@Component({
  selector: 'app-parent-notes',
  templateUrl: './parent-notes.page.html',
  styleUrls: ['./parent-notes.page.scss'],
})
export class ParentNotesPage implements OnInit {

  datasEnfant:any; Liste : any ; rep:any; dec:any;

    dat:any = {
        libelleEvaluation:'',
    };

  constructor(

      private teacher:TeacherService,
      private apuUrl : UrlHostService,
      public toast: ToastController,
      private alertController:AlertController,
      public toastController:ToastController,
      public loadingController: LoadingController,
      private router:Router
  ) {


      // this.urlPhoto = this.apuUrl.apiUrlFile;

      this.datasEnfant = JSON.parse(localStorage.getItem("datasEnfant"));

      this.teacher.getAllEvaluationsByParent(this.datasEnfant)
          .subscribe(data=>{
                  this.Liste = data
              },err=>{
                  console.log(err);
              },
          );
  }

  ngOnInit() {


  }

    async presentLoadingWithOptions() {
        const loading = await this.loadingController.create({
            spinner:"bubbles"  ,
            message: 'Traitement en cours...',
            // translucent: true,
            // cssClass: 'custom-class custom-loading',
            // backdropDismiss: true
        });

        return await  loading.present();
    }


    afficher(values){
        this.dat.datasEnfant = this.datasEnfant;

      this.presentLoadingWithOptions();



      this.teacher.getBulletinEleveByParent(this.dat)

          .subscribe( data => {

              this.rep = data ;

              this.dec =1;

              console.log(this.rep);

              this.loadingController.dismiss();


          },error => {

              this.dec = 0;

              this.loadingController.dismiss();

          });
  }

}
