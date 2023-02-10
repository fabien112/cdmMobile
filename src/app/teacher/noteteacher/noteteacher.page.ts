import { Component, OnInit } from '@angular/core';
import {TeacherService} from "../../services/teacher.service";
import {UrlHostService} from "../../services/url-host.service";
import {AlertController, LoadingController, ModalController, ToastController} from "@ionic/angular";
import {Router} from "@angular/router";
import {EditnotePage} from "../editnote/editnote.page";


@Component({
  selector: 'app-noteteacher',
  templateUrl: './noteteacher.page.html',
  styleUrls: ['./noteteacher.page.scss'],
})
export class NoteteacherPage implements OnInit {

    teacherData :string;
    classes : any ; Heures : any ;
    maiteres : any ; users : string; Classes : any ;
    urlPhoto:any; trimestres:any;evaluations:any; actua:any = false

    dat:any = {
        matiere:'',
        libelleEvaluation:'',
        trimestre:'',
        classeName:'',
        idClasse:''
    };


    datasEdit: {
        note: "",
        mention: "",
        idNote: "",
    };
    rep:any;

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
        this.teacherData = JSON.parse(localStorage.getItem("user"));
        this.urlPhoto = this.apuUrl.apiUrlFile;
        this.users = JSON.parse(localStorage.getItem("user"));

    }

  ngOnInit() {
  }


    charger(){

        this.dat.classeName =this.dat.idClasse;
        this.dat.matiere ='';
        this.dat.users = this.users;
        this.teacher.Matieres(this.dat)
            .subscribe(data=>{
                    this.maiteres = data
                },err=>{

                },
            );


    }


    async  detailsShow (data,i) {


        localStorage.setItem("noteEdit",JSON.stringify(data));

        localStorage.setItem("item",JSON.stringify(this.dat));

        const modal = await this.modalController.create({
            component: EditnotePage,

            componentProps: {

            }

        });
        return await modal.present();




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


    afficher() {


        this.actua=true ;


        this.presentLoadingWithOptions();

        this.teacher.getStudentByTeacherVoirNote(this.dat)
            .subscribe(data=>{
                    this.Classes = data;
                this.loadingController.dismiss();
                },err=>{

                },
            );


    }

    ionViewWillEnter(){


        this.teacher.getAllClasseOfTeacher(this.teacherData)
            .subscribe(data=>{
                    this.classes = data;
                },err=>{

                },
            );



        this.teacher.getAllEvaluations(this.users)
            .subscribe(data=>{


                    this.evaluations = data
                },err=>{

                },
            );



    }

}
