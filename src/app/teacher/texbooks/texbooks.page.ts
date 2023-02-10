import { Component, OnInit } from '@angular/core';
import {UserDataService} from "../../services/user-data.service";
import {TeacherService} from "../../services/teacher.service";
import {UrlHostService} from "../../services/url-host.service";
import {
    ActionSheetController, AlertController, LoadingController, ModalController,
    ToastController
} from '@ionic/angular';
import {AddtexbookPage} from "../addtexbook/addtexbook.page";
import {DetailtexbookPage} from "../detailtexbook/detailtexbook.page";


@Component({
  selector: 'app-texbooks',
  templateUrl: './texbooks.page.html',
  styleUrls: ['./texbooks.page.scss'],
})
export class TexbooksPage implements OnInit {
    Liste: any;
    user = <any> {};
    urlPhoto = '';
    rep: any;
    i: -1;


    dat: any = {

        idCahier: ''
    };

    constructor(private modalController: ModalController,
                private userProfile: UserDataService,
                private teacher: TeacherService,
                private apuUrl: UrlHostService,
                private alertController: AlertController,
                private loadingController: LoadingController,
                public toast: ToastController,
                public actionSheetController: ActionSheetController,
               ) {
    }



    ngOnInit() {


    }

    async presentActionSheet(m) {
        const actionSheet = await this.actionSheetController.create({

            buttons: [{
                text: 'Voir le cahier de texte',
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


    ionViewWillEnter() {

        this.ClasseList();

    }


    async presentToast3() {
        const toast = await this.toast.create({
            message: 'Une erreure est survenue, contactez le 679901213...',
            color: 'dark',
            duration: 4000,
            mode:"ios"
        });
        toast.present();
    }

    async presentToast2() {
        const toast = await this.toast.create({
            message: 'Suppression correctement éffectuée',
            color: 'dark',
            duration: 4000,
            mode:"ios"
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

                        this.teacher.delateNewBook(this.dat)


                            .subscribe(data => {


                                this.rep = data;

                                this.loadingController.dismiss();

                                this.Liste.splice(this.i, 1);


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
            spinner: "bubbles",
            message: 'Suppression en cours...',
            // translucent: true,
            // cssClass: 'custom-class custom-loading',
            // backdropDismiss: true
        });

        return await  loading.present();
    }


    async detailsShow() {

        const modal = await this.modalController.create({
            component: AddtexbookPage,

            componentProps: {}

        });
        return await modal.present();


    }


    ClasseList() {

        this.urlPhoto = this.apuUrl.apiUrlFile;

        this.user = JSON.parse(localStorage.getItem("user"));

        this.teacher.getAllCahierNewByATeacher(this.user)
            .subscribe(data => {
                    this.Liste = data
                }, err => {
                    console.log(err);
                },
            );


    }


    async detailsShow2(data) {

        localStorage.setItem("detailsTexbooks", JSON.stringify(data));

        const modal = await this.modalController.create({
            component: DetailtexbookPage,
            mode:"ios",
            animated: true,
            componentProps: {}

        });
        return await modal.present();


    }

    doRefresh(event) {


        this.ionViewWillEnter();

        setTimeout(() => {
            event.target.complete();
        }, 2000);
    }
}