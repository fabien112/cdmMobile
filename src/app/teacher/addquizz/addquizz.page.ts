import { Component, OnInit } from '@angular/core';
import {AlertController, LoadingController, ModalController, ToastController} from "@ionic/angular";
import {UrlHostService} from "../../services/url-host.service";
import {TeacherService} from "../../services/teacher.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-addquizz',
    templateUrl: './addquizz.page.html',
    styleUrls: ['./addquizz.page.scss'],
})
export class AddquizzPage implements OnInit {





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

        classeName: "",
        matiere: "",
        idClasse: "",
        libelleDevoir: "",
        dateLimite: "",
        duree: "",
        consigne: "",
        verrouiller: "Non",
        inputs: [
            {
                name: "",
                resp: "",
                point: "",
                repElev: '',
                choix: '',
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
        console.log(this.dat.classeName);
        this.dat.users = this.users;
        this.teacher.Matieres(this.dat)
            .subscribe(data=>{
                    this.maiteres = data
                },err=>{

                },
            );


    }



    add2(index) {
        this.dat.inputs.push({
            name: "",
            resp: "",
            point: "",
            repElev: '',
            choix: '',
        });

        console.log(this.dat.inputs);
    }

    remove2(index) {
        this.dat.inputs.splice(index, 1);
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
            icon: 'information-circle',
            color:'dark',
            duration: 4000
        });
        toast.present();
    }

    async presentToast2() {
        const toast = await this.toast.create({
            message: 'questionnaire  corretement enregistré.',
            color:'dark',
            duration: 4000
        });
        toast.present();
    }




    Valider(value) {


        this.presentLoadingWithOptions();

        this.teacher.createQuizz(this.dat)


            .subscribe(data => {


                this.rep = data;

                this.loadingController.dismiss();

                this.presentToast2();


                this.close();

                this.router.navigateByUrl('menu/enligne');


                //window.location.assign('menu/texbooks');


            }, error => {

                this.loadingController.dismiss();

                this.presentToast();

            });


    }


}
