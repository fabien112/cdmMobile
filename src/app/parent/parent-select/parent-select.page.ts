import { Component, OnInit } from '@angular/core';
import {ParentService} from "../../services/parent.service";
import {UrlHostService} from "../../services/url-host.service";
import {ActionSheetController, ToastController} from "@ionic/angular";
import {Downloader} from "@ionic-native/downloader/ngx";
import {Router} from "@angular/router";

@Component({
    selector: 'app-parent-select',
    templateUrl: './parent-select.page.html',
    styleUrls: ['./parent-select.page.scss'],
})
export class ParentSelectPage implements OnInit {


    constructor(
        private parent:ParentService,
        private apuUrl : UrlHostService,
        public actionSheetController: ActionSheetController,
        private downloader: Downloader,
        private router : Router,
        public toast: ToastController)
    { }

    ngOnInit() {
    }

    async presentActionSheet(m) {
        const actionSheet = await this.actionSheetController.create({

            buttons: [

                {
                    text: 'Cours',
                    icon: 'layers',
                    cssClass: "EditionIcon",
                    handler: () => {
                        this.router.navigateByUrl('cours-ligne-parent');

                    }
                },

                {
                    text: 'Questionnaires',
                    icon: 'help-circle',
                    cssClass: "EditionIcon",
                    handler: () => {

                        this.router.navigateByUrl('quizz-parent');

                    }
                },

                {
                    text: 'Devoirs',
                    icon: 'school',
                    cssClass: "EditionIcon",
                    handler: () => {

                        this.router.navigateByUrl('devoirs-parent');

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


}
