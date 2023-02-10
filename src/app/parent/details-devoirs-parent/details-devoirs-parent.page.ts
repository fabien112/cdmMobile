import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UrlHostService} from "../../services/url-host.service";
import {ActionSheetController, ToastController} from "@ionic/angular";
import {Downloader,DownloadRequest,NotificationVisibility} from "@ionic-native/downloader/ngx";



@Component({
  selector: 'app-details-devoirs-parent',
  templateUrl: './details-devoirs-parent.page.html',
  styleUrls: ['./details-devoirs-parent.page.scss'],
})
export class DetailsDevoirsParentPage implements OnInit {
    devoirDetails:any;
    urlPhoto:any;

    constructor(

                 private activatedRoute:ActivatedRoute,
                 private router:Router,
                 private apuUrl : UrlHostService,
                 private downloader: Downloader,
                 public actionSheetController: ActionSheetController,
                 public toast: ToastController,

                 ) {

        this. urlPhoto = this.apuUrl.apiUrl;


        this.devoirDetails = JSON.parse(localStorage.getItem('devoir'));


    }

    ngOnInit() {


    }

    async presentActionSheet(m) {
        const actionSheet = await this.actionSheetController.create({

            buttons: [

                {
                    text: 'Enregistrer le devoir ',
                    icon: 'arrow-down',
                    cssClass: "EditionIcon",
                    handler: () => {
                        this.save(m);

                    }
                },

                {
                    text: 'Enregistrer la correction',
                    icon: 'save',
                    cssClass: "EditionIcon",
                    handler: () => {
                        this.save2(m);

                    }
                },


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

    async save(m) {

        var YOUR_URI =  this.apuUrl.apiUrlFile+m.document;

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
            .catch((error: any) => {

            });

    }


    async save2(m) {

        var YOUR_URI =  this.apuUrl.apiUrlFile+m.support;

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
            .catch((error: any) => {

                this.presentToast5()

            });

    }

    backPage(){

        this.router.navigateByUrl('devoir-details-parent');
    }

    async presentToast4() {
        const toast = await this.toast.create({
            // header: 'Success',
            message: 'Fichier bien enregristré',
            color:'dark',

            duration: 2000
        });
        toast.present();
    }

    async presentToast5() {
        const toast = await this.toast.create({
            // header: 'Success',
            message: "Correction non postée par l'enseignant ",
            color:'dark',

            duration: 2000
        });
        toast.present();
    }


}
