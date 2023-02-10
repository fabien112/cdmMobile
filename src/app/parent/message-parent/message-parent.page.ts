import {Component, OnInit, ViewChild} from '@angular/core';
import {ParentService} from "../../services/parent.service";
import {AlertController, LoadingController, ModalController, ToastController} from "@ionic/angular";
import {MessageParentDetailsPage} from "../message-parent-details/message-parent-details.page";

@Component({
  selector: 'app-message-parent',
  templateUrl: './message-parent.page.html',
  styleUrls: ['./message-parent.page.scss'],
})
export class MessageParentPage implements OnInit {

    user = <any> {}; yudsegment = ""; messages : any; messagesSend:any;

    data: any = {
        tous: "NON",
        objet: "",
        destinataire: "Administration",
        message: "",
        classe: "",
        senderData: ""

};

  constructor(private  parent : ParentService,

              public toast: ToastController,

              private  modalController: ModalController,

              public loadingController: LoadingController,) {

      this.user = JSON.parse(localStorage.getItem("user"));






  }

  ngOnInit() {
  }

    ionViewWillEnter(){

        this.parent.getMessagesParent(this.user)
            .subscribe(data=>{
                    this.messages = data;

                },err=>{

                },
            );
        this.parent.getMessageEnvoyesParent(this.user)
            .subscribe(data=>{
                    this.messagesSend = data;
                },err=>{

                },
            );
        this.yudsegment = "today";
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
            message: 'Message envoyé ',
            mode:'ios',
            color:'dark',
            duration: 4000
        });
        toast.present();
    }


    doRefresh(event) {


        this.ionViewWillEnter();

        setTimeout(() => {
            event.target.complete();
        }, 2000);
    }


    Valider(forms) {

        console.log(forms);


        // this.data.objet = forms.objet ;
        //
        // this.data.message = forms.message ;

        this.data.senderData = this.user;

        console.log(this.data);

        this.data.senderData = this.user;

        this.presentLoadingWithOptions();

        this.parent.sendMessageByParent(this.data)

            .subscribe(data => {


                this.loadingController.dismiss();

                this.data.objet ='';
                this.data.message='';

                this.presentToast();


                //window.location.assign('menu/texbooks');


            }, error => {

                this.loadingController.dismiss();

                this.presentToast();

            });


    }


    async detailsShow (values) {

        this.parent.getMessagesParent(this.user)
            .subscribe(data=>{
                    this.messages = data;

                },err=>{

                },
            );

        localStorage.setItem("messageParent", JSON.stringify(values));

        const modal = await this.modalController.create({
            component:MessageParentDetailsPage,
            mode:'ios',
            componentProps: {

            }

        });
        return await modal.present();



    }

}


