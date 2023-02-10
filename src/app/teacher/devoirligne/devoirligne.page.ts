import { Component, OnInit } from '@angular/core';
import {
    ActionSheetController, AlertController, LoadingController, ModalController, Platform,
    ToastController
} from "@ionic/angular";
import {TeacherService} from "../../services/teacher.service";
import {UrlHostService} from "../../services/url-host.service";
import {Router} from "@angular/router";
import { File } from '@awesome-cordova-plugins/file/ngx';
import {Downloader, DownloadRequest, NotificationVisibility} from "@ionic-native/downloader/ngx";

// import {Downloader} from "@ionic-native/downloader/ngx";

@Component({
    selector: 'app-devoirligne',
    templateUrl: './devoirligne.page.html',
    styleUrls: ['./devoirligne.page.scss'],
})
export class DevoirlignePage implements OnInit {

    Liste : any;
    user = <any> {};
    uploadText : any ;   downloadText : any ;
    urlPhoto = '';
    rep : any ;
    i : -1;


    dat:any = {

        idDevoir: ''
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
        private file: File,
        private platform:Platform,
        private downloader : Downloader
    ) {

        this. urlPhoto = this.apuUrl.apiUrl;
        this.uploadText = "";  this.downloadText = "";

    }

    ngOnInit() {
    }

    ionViewWillEnter()
    {

        this.ClasseList();
    }

    async presentToast4() {
        const toast = await this.toast.create({
            //header: 'ECHEC',
            message: 'Enregistré correctement',

            color:'dark',
            duration: 4000
        });
        toast.present();
    }


    // async save() {
    //     await this.platform.ready();
    //     return this.file.writeFile(this.file.dataDirectory, 'hello.json', JSON.stringify({test:'value'}), {replace:true});
    // }



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


    async presentActionSheet(m) {
        const actionSheet = await this.actionSheetController.create({

            buttons: [

                {
                    text: 'Enregistrer',
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

    async presentToast3() {
        const toast = await this.toast.create({
            //header: 'ECHEC',
            message: 'Une erreure est survenue, contactez le 679901213...',

            color:'dark',
            duration: 4000
        });
        toast.present();
    }

    async presentToast2() {
        const toast = await this.toast.create({
            // header: 'Success',
            message: 'Suppression correctement éffectuée',

            color:'dark',

            duration: 4000
        });
        toast.present();
    }

    async presentToast1() {
        const toast = await this.toast.create({
            // header: 'Success',
            message: 'Publication correctement éffectuée',

            color:'dark',

            duration: 4000
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

                        this.teacher.delatedevoirTeacher(this.dat)


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

                        this.dat.idDevoir = values.id;

                        this.presentLoadingWithOptions();

                        this.teacher.pubishdevoirTeacher(this.dat)


                            .subscribe(data => {


                                this.rep = data;

                                this.loadingController.dismiss();

                                window.location.assign('menu/enligne');


                                this.presentToast1();



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

    ClasseList() {

        this.urlPhoto = this.apuUrl.apiUrlFile;

        this.user = JSON.parse(localStorage.getItem("user"));

        this.teacher.getAllDevoirsTeacher(this.user)
            .subscribe(data => {
                    this.Liste = data
                }, err => {
                    console.log(err);
                },
            );

    }

}
