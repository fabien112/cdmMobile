import { Component, OnInit } from '@angular/core';
import {UserDataService} from "../../services/user-data.service";
import {ParentService} from "../../services/parent.service";
import {UrlHostService} from "../../services/url-host.service";
import {ActionSheetController, ToastController} from "@ionic/angular";
import {Downloader,DownloadRequest,NotificationVisibility} from "@ionic-native/downloader/ngx";


@Component({
  selector: 'app-cahier-texte-parent',
  templateUrl: './cahier-texte-parent.page.html',
  styleUrls: ['./cahier-texte-parent.page.scss'],
})
export class CahierTexteParentPage implements OnInit {
    cahiers : any;
    user = <any> {};
    urlPhoto ='';

    constructor(
                private parent:ParentService,
                private apuUrl : UrlHostService ,
                private downloader: Downloader,
                public actionSheetController: ActionSheetController,
                public toast: ToastController,
                )

    {


    }

    ngOnInit() {

        this.Cahiers()

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

    async presentActionSheet(m) {
        const actionSheet = await this.actionSheetController.create({

            buttons: [

                {
                    text: 'Enregistrer le document ',
                    icon: 'arrow-down',
                    cssClass: "EditionIcon",
                    handler: () => {
                        this.save(m);

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

    Cahiers() {

        this.urlPhoto = this.apuUrl.apiUrl;

        this.user = JSON.parse(localStorage.getItem("datasEnfant"));

        this.parent.getAllCahierParentParClasse(this.user)
            .subscribe(data => {
                    this.cahiers = data
                }, err => {
                    console.log(err);
                },
            );

        console.log(this.cahiers);
    }

}
