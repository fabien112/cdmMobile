import { Component, OnInit } from '@angular/core';
import {TeacherService} from "../../services/teacher.service";
import {UrlHostService} from "../../services/url-host.service";
import {AlertController, LoadingController, ModalController, ToastController, ActionSheetController} from '@ionic/angular';
import {AddquizzPage} from "../addquizz/addquizz.page";
import {Router} from "@angular/router";
import {DetailsquizzPage} from "../detailsquizz/detailsquizz.page";

@Component({
  selector: 'app-quizzs',
  templateUrl: './quizzs.page.html',
  styleUrls: ['./quizzs.page.scss'],
})
export class QuizzsPage implements OnInit {
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
        private teacher:TeacherService,
        private apuUrl : UrlHostService,
        private alertController:AlertController,
        private loadingController: LoadingController,
        public toast: ToastController,
        public actionSheetController: ActionSheetController,
        private router :Router

    ) {

        this. urlPhoto = this.apuUrl.apiUrl;
    }

    async presentActionSheet(m) {
        const actionSheet = await this.actionSheetController.create({

            buttons: [{
                text: 'Voir le questionnaire',
                icon: 'list',
                cssClass: "EditionIcon",
                handler: () => {
                    this.detailsShow2(m);
                }
            },

                {
                    text: 'Publier',
                    role: 'destructive',
                    icon: 'arrow-redo',
                    cssClass: 'DelateIcon',
                    handler: () => {

                        this.publish(m);
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



    ngOnInit() {


    }

    ionViewWillEnter(){

        this.ClasseList();


    }

    close(){
        this.modalController.dismiss(null);
    }


    async presentToast3() {
        const toast = await this.toast.create({
            message: 'Une erreure est survenue, contactez le 679901213...',
            color:'dark',
            duration: 2000,
            mode:"ios"
        });
        toast.present();
    }

    async presentToast2() {
        const toast = await this.toast.create({

            message: 'Suppression correctement éffectuée',

            color:'dark',

            duration: 2000,
            mode:"ios"
        });
        toast.present();
    }




    async delate(values) {
        const alert = await this.alertController.create({
            header: 'Confirmation!',
            message: '<strong>Etes-vous sure de vouloir supprimer ? </strong>',
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

                        this.teacher.delateQuizz(this.dat)


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

    async publish(values) {
        const alert = await this.alertController.create({
            header: 'Confirmation!',
            message: ' <strong> Etes-vous sure de vouloir publier ? </strong>',
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

                        this.teacher.updateQuizz(this.dat)


                            .subscribe(data => {


                                this.rep = data;

                                this.loadingController.dismiss();

                                 //window.location.assign('menu/quizzs');

                                this.router.navigateByUrl('menu/enligne');

                            }, error => {

                                this.loadingController.dismiss();


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
            message: 'Traitement en cours...',

        });

        return await  loading.present();
    }



    async  detailsShow () {

        const modal = await this.modalController.create({
            component: AddquizzPage,
            componentProps: {

            }

        });
        return await modal.present();



    }

    async  detailsShow2 (values) {

        localStorage.setItem('detailsquizz', JSON.stringify(values));

        const modal = await this.modalController.create({
            component: DetailsquizzPage,
            componentProps: {

            }

        });
        return await modal.present();



    }


    ClasseList() {

        this.urlPhoto = this.apuUrl.apiUrlFile;

        this.user = JSON.parse(localStorage.getItem("user"));

        this.teacher.getAllQuizzByATeacher(this.user)
            .subscribe(data => {
                    this.Liste = data
                }, err => {
                    console.log(err);
                },
            );

    }

    doRefresh(event) {


        this.ionViewWillEnter();

        setTimeout(() => {
            event.target.complete();
        }, 2000);
    }



}
