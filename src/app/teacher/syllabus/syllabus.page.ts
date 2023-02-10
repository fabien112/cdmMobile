import { Component, OnInit } from '@angular/core';
import {UserDataService} from "../../services/user-data.service";
import {TeacherService} from "../../services/teacher.service";
import {UrlHostService} from "../../services/url-host.service";
import {
    ActionSheetController, AlertController, LoadingController, ModalController,
    ToastController
} from '@ionic/angular';
import {DetailsElevePage} from '../details-eleve/details-eleve.page';
import {AddsyllabusPage} from "../addsyllabus/addsyllabus.page";
import {DetailsyllabusPage} from "../detailsyllabus/detailsyllabus.page";

@Component({
  selector: 'app-syllabus',
  templateUrl: './syllabus.page.html',
  styleUrls: ['./syllabus.page.scss'],
})
export class SyllabusPage implements OnInit {

    Liste : any;
    user = <any> {};
    urlPhoto = '';
    rep : any ;
    i : -1;


    dat:any = {

        idCahier: ''
    };

    constructor(
                private modalController: ModalController,
                private userProfile:UserDataService,
                private teacher:TeacherService,
                private apuUrl : UrlHostService,
                private alertController:AlertController,
                private loadingController: LoadingController,
                public toast: ToastController,
                public actionSheetController: ActionSheetController

                ) { }



    ngOnInit() {


    }

    async presentActionSheet(m) {
        const actionSheet = await this.actionSheetController.create({

            buttons: [ {
                text: 'Voir le syllabus',
                icon: 'list',
                cssClass: "EditionIcon",
                handler: () => {
                    this.detailsShow2(m);
                }
            },
                {
                    text: 'Supprimer',
                    role: 'destructive',
                    icon: 'trash',
                    cssClass: 'DelateIcon',
                    handler: () => {
                        this.delate(m);
                    }
                }
                ,
                {
                    text: 'Fermer',
                    icon: 'close',

                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }

            ]
        });
        await actionSheet.present();
    }

    ionViewWillEnter(){

        this.ClasseList();

    }

    async presentToast3() {
        const toast = await this.toast.create({

            message: 'Une erreure est survenue, contactez le 679901213...',
            icon: 'information-circle',
            color:'dark',
            mode:"ios",
            duration: 2000
        });
        toast.present();
    }

    doRefresh(event) {


        this.ionViewWillEnter();

        setTimeout(() => {
            event.target.complete();
        }, 2000);
    }

    async presentToast2() {
        const toast = await this.toast.create({

            message: 'Suppression correctement éffectuée',

            color:'dark',

            mode:"ios",

            duration: 2000
        });
        toast.present();
    }



    async delate(values) {
        const alert = await this.alertController.create({
            header: 'Confirmation!',
            message: ' <strong>Etes-vous sure de vouloir supprimer ? </strong>',
            buttons: [
                {
                    text: 'Annuler',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: (blah) => {
                        console.log('');
                    }
                }, {
                    text: 'Okay',
                    handler: () => {
                        this.dat = values;

                        this.dat.idCahier = values.id;

                        this.presentLoadingWithOptions();

                        this.teacher.delateSyllabus(this.dat)


                            .subscribe(data => {


                                this.rep = data;

                                this.loadingController.dismiss();

                                this.Liste.splice(this.i,1);


                                this.presentToast2();



                            }, error => {

                                this.loadingController.dismiss();

                                this.presentToast3();

                            });



                    }
                }
            ]
        });

        await alert.present();

    }

    async presentLoadingWithOptions() {
        const loading = await this.loadingController.create({
            spinner:"bubbles"  ,
            message: 'Suppression en cours...',
            // translucent: true,
            // cssClass: 'custom-class custom-loading',
            // backdropDismiss: true
        });

        return await  loading.present();
    }



    async  detailsShow () {

        const modal = await this.modalController.create({
            component: AddsyllabusPage,

            componentProps: {

            }

        });
        return await modal.present();



    }


    async  detailsShow2 (data) {

        localStorage.setItem("detailsSyllabus",JSON.stringify(data));

        const modal = await this.modalController.create({
            component: DetailsyllabusPage,
            componentProps: {

            }

        });
        return await modal.present();


    }


    ClasseList(){

        this. urlPhoto = this.apuUrl.apiUrlFile;

        this.user = JSON.parse(localStorage.getItem("user"));

        this.teacher.getAllSyllabusByATeacher(this.user)
            .subscribe(data=>{
                    this.Liste = data
                },err=>{
                    console.log(err);
                },
            );



    }


}
