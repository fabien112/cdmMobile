import { Component, OnInit } from '@angular/core';
import {ParentService} from "../../services/parent.service";
import {UrlHostService} from "../../services/url-host.service";
import {Router} from "@angular/router";
import {AlertController, LoadingController, ToastController} from "@ionic/angular";

@Component({
    selector: 'app-consigne',
    templateUrl: './consigne.page.html',
    styleUrls: ['./consigne.page.scss'],
})
export class ConsignePage implements OnInit {

    yudsegment:any;

    Absences : any;
    user = <any> {};
    urlPhoto ='';
    TotalHeure=0;
    nbr=0;

    data2: {

        idEleve : "",


    }
    constructor(private parent:ParentService,
                private apuUrl : UrlHostService,
                private router : Router,
                private alertController:AlertController,
                public toastController:ToastController,
                public loadingController: LoadingController
    )
    {

        this.urlPhoto = this.apuUrl.apiUrlFile;

        if (localStorage.datasEnfant) {

            this.data2 = JSON.parse(localStorage.getItem("datasEnfant"));

            this.data2.idEleve =  this.data2['id'];

        }

    }
    ngOnInit() {
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


    ionViewWillEnter() {

        this.yudsegment = "pin";

        this.presentLoadingWithOptions();

        this.parent.getAlldiscipline(this.data2)
            .subscribe(data=>{
                    this.Absences = data;
                    this.loadingController.dismiss();
                },err=>{
                    this.loadingController.dismiss();
                },
            );
    }


}
