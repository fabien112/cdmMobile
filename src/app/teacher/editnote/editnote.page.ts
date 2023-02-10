import { Component, OnInit } from '@angular/core';
import {AlertController, LoadingController, ModalController, ToastController} from "@ionic/angular";
import {TeacherService} from "../../services/teacher.service";
import {UrlHostService} from "../../services/url-host.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-editnote',
  templateUrl: './editnote.page.html',
  styleUrls: ['./editnote.page.scss'],
})
export class EditnotePage implements OnInit {



    teacherData :string;
    classes : any ; Heures : any ;
    maiteres : any ; users : string; Classes : any ;
    urlPhoto:any; trimestres:any;evaluations:any;
    EditNote:any;


    datas:any = {
        classeName: "",
        idClasse: "",
        libelleEvaluation: "",
        matiere: "",
        trimestre: ""
    };


    datasEdit:any = {

    };

    da : any = {
        note: "",
        mention: "",
        idNote: "",
    };


    constructor(

        private modalController: ModalController,
        private teacher:TeacherService,
        private apuUrl : UrlHostService,
        public toast: ToastController,
        private alertController:AlertController,
        public toastController:ToastController,
        public loadingController: LoadingController,
        private router:Router)

    {
        this.EditNote = JSON.parse(localStorage.getItem("noteEdit"));
        this.datas = JSON.parse(localStorage.getItem("item"));
        this.urlPhoto = this.apuUrl.apiUrlFile;
        this.users = JSON.parse(localStorage.getItem("user"));

    }

  ngOnInit() {




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


    async presentToast2() {
        const toast = await this.toast.create({
            message: 'note corretement enregistré.',
            color:'dark',
            duration: 5000,

        });
        toast.present();
    }

    async presentToast() {
        const toast = await this.toast.create({
            message: 'Echec du traitement...',
            color:'dark',
            duration: 5000,

        });
        toast.present();
    }



    close() {
        this.modalController.dismiss(null);
    }

    Valider(){

        console.log(this.da);

        this.datasEdit.idNote = this.EditNote.idNote;
        this.datasEdit.note = this.da.note;
        this.datasEdit.mention = this.da.mention;
        this.datasEdit.eleveId = this.EditNote.id;
        this.datasEdit.reste = this.datas;



        this.presentLoadingWithOptions();

        this.teacher.Update(this.datasEdit)


            .subscribe( data => {


                this.loadingController.dismiss();
                this.presentToast2();

                this.close();


            },error => {

                this.loadingController.dismiss();

                this.presentToast();

            });






        console.log(this.datasEdit)



    }

}
