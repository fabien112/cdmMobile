import { Component, OnInit } from '@angular/core';
import {TeacherService} from "../../services/teacher.service";
import {UrlHostService} from "../../services/url-host.service";
import {ActionSheetController,AlertController, LoadingController, ModalController, ToastController} from '@ionic/angular';
import {AddliaisonPage} from "../addliaison/addliaison.page";
// import { FileTransfer, FileTransferObject } from '@awesome-cordova-plugins/file-transfer/ngx';
import {Downloader,DownloadRequest,NotificationVisibility} from "@ionic-native/downloader/ngx";
//import { File } from '@awesome-cordova-plugins/file/ngx';
import {Router} from "@angular/router";
import { Platform } from '@ionic/angular';



@Component({
  selector: 'app-liaison',
  templateUrl: './liaison.page.html',
  styleUrls: ['./liaison.page.scss'],
})
export class LiaisonPage implements OnInit {

    Liste : any;
    user = <any> {};
    uploadText : any ;   downloadText : any ;
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
        private router : Router,
        private downloader: Downloader,
        private file: File,
        private platform:Platform

    ) {

        this.urlPhoto = this.apuUrl.apiUrlFile;

        this.uploadText = "";  this.downloadText = "";





    }

    // fileTransfer:FileTransferObject = this.transfer.create();
    //
    // download() {
    //     const url = 'http://www.example.com/file.pdf';
    //     this.fileTransfer.download(url, this.file.dataDirectory + 'file.pdf').then((entry) => {
    //         console.log('download complete: ' + entry.toURL());
    //     }, (error) => {
    //         // handle error
    //     });
    // }

    async presentActionSheet(m) {
        const actionSheet = await this.actionSheetController.create({

            buttons: [

                {
                text: 'Enregistrer le fichier',
                icon: 'arrow-down',
                cssClass: "EditionIcon",
                handler: () => {

                    this.save(m);

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
                    text: 'Publier',
                    role: 'destructive',
                    icon: 'arrow-redo',
                    cssClass: 'PublishIcon',
                    handler: () => {
                        this.publish(m);
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


    async presentToast3() {
        const toast = await this.toast.create({
            message: 'Une erreure est survenue, contactez le 679901213...',
            icon: 'information-circle',
            color:'dark',
            duration: 4000,
            mode:"ios"
        });
        toast.present();
    }

    async presentToast2() {

        const toast = await this.toast.create({
            message: 'Suppression correctement éffectuée',
            color:'dark',
            mode:"ios",
            duration: 4000
        });
        toast.present();
    }

    async presentToast4() {
        const toast = await this.toast.create({
            message: 'Fichier bien enregristré',
            color:'dark',
            mode:"ios",
            duration: 2000
        });
        toast.present();
    }


    async save(m) {

        var YOUR_URI = this.urlPhoto+m.document;

        console.log(YOUR_URI);

        var request: DownloadRequest = {
            uri: YOUR_URI,
            title: 'Fichier',
            description: '',
            mimeType: '',
            visibleInDownloadsUi: true,
            notificationVisibility: NotificationVisibility.VisibleNotifyCompleted,
            destinationInExternalFilesDir: {
                dirType: 'Downloads',
                subPath: 'Le fichier'
            }
        };

        this.downloader.download(request)
            .then((location: string) => {

                this.presentToast4()
            })
            .catch((error: any) => console.error(error));

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

                        this.teacher.delateCahierTeacher(this.dat)


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
            message: ' <strong>Etes-vous sure de vouloir publier ? </strong>',
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

                        this.teacher.updateCahierTeacher(this.dat)


                            .subscribe(data => {


                                this.rep = data;

                                this.loadingController.dismiss();

                                //window.location.assign('menu/liaison');


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
            message: 'En cour de traitement...',
            // translucent: true,
            // cssClass: 'custom-class custom-loading',
            // backdropDismiss: true
        });

        return await  loading.present();
    }



    async  detailsShow () {

        const modal = await this.modalController.create({
            component: AddliaisonPage,
            mode:"ios",
            componentProps: {

            }

        });
        return await modal.present();



    }


    ClasseList() {

        this.urlPhoto = this.apuUrl.apiUrlFile;

        this.user = JSON.parse(localStorage.getItem("user"));

        this.teacher.getAllCahierByATeacher(this.user)
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
