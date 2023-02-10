import { Component, OnInit } from '@angular/core';
import {UserDataService} from "../../services/user-data.service";
import {ParentService} from "../../services/parent.service";
import {UrlHostService} from "../../services/url-host.service";
import {ActionSheetController, ToastController} from "@ionic/angular";
import {Downloader,DownloadRequest,NotificationVisibility} from "@ionic-native/downloader/ngx";

@Component({
  selector: 'app-cours-ligne-parent',
  templateUrl: './cours-ligne-parent.page.html',
  styleUrls: ['./cours-ligne-parent.page.scss'],
})
export class CoursLigneParentPage implements OnInit {
    cahiers : any;
    user = <any> {};
    urlPhoto ='';

    constructor(private userProfile:UserDataService,
                private parent:ParentService,
                private apuUrl : UrlHostService,
                public actionSheetController: ActionSheetController,
                private downloader: Downloader,
                public toast: ToastController)
    { }

    ngOnInit() {

        this.Cahier()

    }



    async presentActionSheet(m) {
        const actionSheet = await this.actionSheetController.create({

            buttons: [

                {
                    text: 'Enregistrer le fichier',
                    icon: 'arrow-down',
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

    Cahier(){

        this. urlPhoto = this.apuUrl.apiUrl;

        this.user = JSON.parse(localStorage.getItem("datasEnfant"));

        this.parent.getAllCoursParentParClasse(this.user)
            .subscribe(data=>{
                    this.cahiers = data
                },err=>{
                    console.log(err);
                },
            );

        console.log(this.cahiers);

    }

    async presentToast4() {
        const toast = await this.toast.create({
            // header: 'Success',
            message: 'Fichier enregristré',
            color:'dark',

            duration: 2000
        });
        toast.present();
    }

    async save2(m) {

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

}
