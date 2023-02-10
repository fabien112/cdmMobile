import { Component, OnInit } from '@angular/core';
import {AlertController, LoadingController, ModalController, ToastController} from "@ionic/angular";
import {UrlHostService} from "../../services/url-host.service";
import {TeacherService} from "../../services/teacher.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-addsyllabus',
  templateUrl: './addsyllabus.page.html',
  styleUrls: ['./addsyllabus.page.scss'],
})
export class AddsyllabusPage implements OnInit {

    Liste: any;
    user = <any> {};
    teacherData :string;
    classes : any ; Heures : any ;
    maiteres : any ; users : string; Classes : any ;
    urlPhoto:any; trimestres:any;evaluations:any;
    Notes:any={

    };

    rep:any;



    dat:any = {
        matiere:'',
        chapitre:'',
        duree:'',
        classeName:'',
        idClasse:'',
        date:"2022-04-30",
        inputs1: [
            {
                objectif: "",

            }

            ] ,

            inputs2: [
        {
            partie: "",
            exercie: "",


        }
        ]


    };


    constructor(
                public modalController: ModalController,
                private teacher:TeacherService,
                private apuUrl : UrlHostService,
                public toast: ToastController,
                private alertController:AlertController,
                public toastController:ToastController,
                public loadingController: LoadingController,
                private router :Router)
    {

        this.teacherData = JSON.parse(localStorage.getItem("user"));
        this.urlPhoto = this.apuUrl.apiUrlFile;
        this.users = JSON.parse(localStorage.getItem("user"));
    }

    ngOnInit() {

        this.teacher.getAllClasseOfTeacher(this.teacherData)
            .subscribe(data=>{
                    this.classes = data;
                },err=>{

                },
            );


        this.teacher.Heures()
            .subscribe(data=>{
                    this.Heures = data;
                },err=>{

                },
            );


    }

    close() {
        this.modalController.dismiss(null);
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


    }


    add(index) {
        this.dat.inputs1.push({
            objectif: "",

        });

        console.log(this.dat.inputs1);
    }

    add2(index) {
        this.dat.inputs2.push({
            partie: "",
            exercie: ""
        });

        console.log(this.dat.inputs2);
    }

    remove(index) {
        this.dat.inputs1.splice(index, 1);
    }
    remove2(index) {
        this.dat.inputs2.splice(index, 1);
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
            message: 'Veillez saisir tous les champs. Si le probleme persite contactez le 67901213',
            color:'dark',
            mode:"ios",
            duration: 4000
        });
        toast.present();
    }

    async presentToast2() {
        const toast = await this.toast.create({
            message: 'Syllabus corretement enregistré.',

            color:'dark',
            duration: 5000,
            mode:"ios"
        });
        toast.present();
    }


    Valider(value){



        this.presentLoadingWithOptions();

        this.teacher.createSyllabus(this.dat)


            .subscribe( data => {


                this.rep = data ;

                this.loadingController.dismiss();

                this.close();



                // window.location.assign('menu/syllabus');

                this.presentToast2();

                this.router.navigateByUrl('menu/dashbord-teacher');



            },error => {

                this.loadingController.dismiss();

                this.presentToast();

            });







    }





}
