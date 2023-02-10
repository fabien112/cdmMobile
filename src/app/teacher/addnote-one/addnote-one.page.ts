import { Component, OnInit } from '@angular/core';
import {TeacherService} from "../../services/teacher.service";
import {UrlHostService} from "../../services/url-host.service";
import {AlertController, LoadingController, ToastController} from "@ionic/angular";
import {Router} from "@angular/router";

@Component({
  selector: 'app-addnote-one',
  templateUrl: './addnote-one.page.html',
  styleUrls: ['./addnote-one.page.scss'],
})
export class AddnoteOnePage implements OnInit {

    teacherData :string;
    classes : any ; Heures : any ;
    maiteres : any ; users : string; Classes : any ;
    urlPhoto:any; trimestres:any;evaluations:any;
    Notes:any={};
    EleveListes:any;

    dat:any = {
        matiere:'',
        libelleEvaluation:'',
        classeName:'',
        idClasse:'',
        note: "",
        idEleve : ""
    };
    rep:any;

    constructor(


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

    ionViewWillEnter(){


        this.teacher.getAllClasseOfTeacher(this.teacherData)
            .subscribe(data=>{
                    this.classes = data;
                },err=>{

                },
            );


        this.teacher.getEvaluationActif(this.users)
            .subscribe(data=>{
                    this.evaluations = data
                },err=>{

                },
            );





    }

  ngOnInit() {



  }


    async presentLoadingWithOptions() {
        const loading = await this.loadingController.create({
            spinner:"lines"  ,
            message: 'Traitement en cours...',
            // translucent: true,
            // cssClass: 'custom-class custom-loading',
            // backdropDismiss: true
        });

        return await  loading.present();
    }

    async presentToast2() {
        const toast = await this.toast.create({
            header: 'Echec',
            message: 'Enregistrement échoué.',
            color:'dark',
            duration: 4000
        });
        toast.present();
    }


    async presentToast() {
        const toast = await this.toast.create({
            header: 'Success',
            message: 'note corretement enregistré.',
            color:'dark',
            duration: 4000
        });
        toast.present();
    }


    afficher() {

        console.log(this.dat);

        this.presentLoadingWithOptions();

        this.teacher.AddNoteAlone(this.dat)

            .subscribe(data => {


                this.rep = data;

                this.loadingController.dismiss();

                // window.location.assign('menu/syllabus');

                this.router.navigateByUrl('menu/noteselect');

                this.presentToast();


            }, error => {

                this.loadingController.dismiss();

                this.presentToast2();

            });


    }


    charger(){


        this.dat.classeName =this.dat.idClasse;
        this.dat.users = this.users;


        this.teacher.Matieres(this.dat)
            .subscribe(data=>{
                    this.maiteres = data
                },err=>{

                },
            );


        this.teacher.getEleveclasseById(this.dat)
            .subscribe(data=>{
                    this.EleveListes = data
                },err=>{

                },
            );
    }

}
