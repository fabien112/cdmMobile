import { Component, OnInit } from '@angular/core';
import {AlertController, LoadingController, ModalController, ToastController} from "@ionic/angular";
import {UrlHostService} from "../../services/url-host.service";
import {TeacherService} from "../../services/teacher.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-detailsyllabus',
  templateUrl: './detailsyllabus.page.html',
  styleUrls: ['./detailsyllabus.page.scss'],
})
export class DetailsyllabusPage implements OnInit {

    yudsegment: string;

    Liste: any;
    user = <any> {};
    Details :string;
    classes : any ; Heures : any ;
    maiteres : any ; users : string; Classes : any ;
    urlPhoto:any; trimestres:any;evaluations:any;
    Notes:any={

    };

    rep:any; image : any ; formData:any;

    dat:any = {
        idCahier: "",
        imageEmploiTmp: "",
        dateDebut: "",
        dateFin: "",
        idMatiere: "",
        idClasse: ""
    };


    constructor(
        public modalController: ModalController,
        private teacher:TeacherService,
        private apuUrl : UrlHostService,
        public toast: ToastController,
        private alertController:AlertController,
        public toastController:ToastController,
        public loadingController: LoadingController,
        private router :Router)
    {

        this.Details = JSON.parse(localStorage.getItem("detailsSyllabus"));

    }

    ngOnInit() {

    }

    ionViewWillEnter(){
        this.yudsegment = "today";
    }





    close() {
        this.modalController.dismiss(null);
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

    async presentToast() {
        const toast = await this.toast.create({
            header: 'Echec',
            message: 'Veillez saisir tous vos champs. Si le probleme persite contactez le 67901213',
            icon: 'information-circle',
            color:'danger',
            buttons: [
                {
                    text: 'Fermer',
                    role: 'cancel',

                }
            ],
            duration: 4000
        });
        toast.present();
    }

    async presentToast2() {
        const toast = await this.toast.create({
            header: 'Success',
            message: 'Syllabus corretement enregistre.',
            icon: 'information-circle',
            color:'primary',
            buttons: [
                {
                    text: 'Fermer',
                    role: 'cancel',

                }
            ],
            duration: 4000
        });
        toast.present();
    }


    Valider(value) {


        this.presentLoadingWithOptions();

        this.teacher.createSyllabus(this.dat)


            .subscribe(data => {


                this.rep = data;

                this.loadingController.dismiss();

                window.location.assign('menu/syllabus');

                // this.presentToast2();


            }, error => {

                this.loadingController.dismiss();

                this.presentToast();

            });



    }


}