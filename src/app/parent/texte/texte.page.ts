import { Component, OnInit } from '@angular/core';
import {AlertController, LoadingController, ModalController, ToastController} from "@ionic/angular";
import {ParentService} from "../../services/parent.service";
import {UrlHostService} from "../../services/url-host.service";
import {Router} from "@angular/router";
import {TexteDetailPage} from "../texte-detail/texte-detail.page";

@Component({
    selector: 'app-texte',
    templateUrl: './texte.page.html',
    styleUrls: ['./texte.page.scss'],
})
export class TextePage implements OnInit {

    Liste: any;
    user = <any> {};
    datasEnfants :any;
    classes : any ; Heures : any ;
    maiteres : any ; users : string; Classes : any ;

    urlPhoto:any; trimestres:any;evaluations:any;


    dat : any =  {
        date: '',
        classe:""
    };
    constructor(
        public modalController: ModalController,
        private parent:ParentService,
        private apuUrl : UrlHostService,
        public toast: ToastController,
        private alertController:AlertController,
        public toastController:ToastController,
        public loadingController: LoadingController,
        private router :Router)
    {

        // this.teacherData = JSON.parse(localStorage.getItem("user"));
        // this.urlPhoto = this.apuUrl.apiUrlFile;
        // this.users = JSON.parse(localStorage.getItem("user"));
    }


    ngOnInit() {

        this.datasEnfants = JSON.parse(localStorage.getItem("datasEnfant"));

        this.dat.classe = this.datasEnfants.classe;
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

    Valider(value){



        this.presentLoadingWithOptions();

        this.parent.getAllCahierParentParClasse2(this.dat)


            .subscribe( data => {


                this.Liste = data ;

                this.loadingController.dismiss();


            },error => {

                this.loadingController.dismiss();


            });









    }


    async detailsShow (values) {

        localStorage.setItem('idCahierTexte', JSON.stringify(values));

        const modal = await this.modalController.create({
            component: TexteDetailPage,

            componentProps: {

            }

        });
        return await modal.present();



    }

}
