import { Component, OnInit } from '@angular/core';
import {ParentService} from "../../services/parent.service";
import {UrlHostService} from "../../services/url-host.service";
import {Router} from "@angular/router";
import {AlertController, LoadingController, ToastController} from "@ionic/angular";

@Component({
  selector: 'app-absence-parent',
  templateUrl: './absence-parent.page.html',
  styleUrls: ['./absence-parent.page.scss'],
})
export class AbsenceParentPage implements OnInit {

    Absences : any;
    user = <any> {};
    urlPhoto ='';
    TotalHeure=0;
    nbr=0;


    constructor(private parent:ParentService,
                private apuUrl : UrlHostService,
                private router : Router,
                private alertController:AlertController,
                public toastController:ToastController,
                public loadingController: LoadingController
    )
    {

        this.urlPhoto = this.apuUrl.apiUrlFile;

        this.user = JSON.parse(localStorage.getItem("datasEnfant"));


    }

    ngOnInit() {

        this.presentLoadingWithOptions();

        this.parent.getAbensesOfEleveclasseByEleve(this.user)
            .subscribe(data=>{
                    this.Absences = data;
                    this.nbr = this.Absences.length;
                    this.total()

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



    total(){

        for(let i=0;i<this.Absences.length;i++) {
            this.TotalHeure = this.TotalHeure + parseInt(this.Absences[i].duree)

        }
    }

}
