import { Component, OnInit } from '@angular/core';
import {AlertController, LoadingController, ModalController, ToastController} from "@ionic/angular";
import {UrlHostService} from "../../services/url-host.service";
import {TeacherService} from "../../services/teacher.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-addtexbook',
  templateUrl: './addtexbook.page.html',
  styleUrls: ['./addtexbook.page.scss'],
})
export class AddtexbookPage implements OnInit {

    Liste: any;
    user = <any> {};
    teacherData: string;
    classes: any;
    Heures: any;
    Mois: any;
    maiteres: any;
    chapitres: any;
    parties: any;
    users: string;
    Classes: any;
    urlPhoto: any;
    trimestres: any;
    evaluations: any;
    Notes: any = {};

    rep: any;


    dat: any = {
        classeName: "",
        matiere: "",
        idClasse: "",
        idMois: "",
        chapitre: "",
        date: "00/10/2035",
        duree: "",

        inputs2: [
            {
                partie: "",
                souspartie: "",


            }
        ]


    };


    constructor(public modalController: ModalController,
                private teacher: TeacherService,
                private apuUrl: UrlHostService,
                public toast: ToastController,
                private alertController: AlertController,
                public toastController: ToastController,
                public loadingController: LoadingController,
                private router : Router) {

        this.teacherData = JSON.parse(localStorage.getItem("user"));
        this.urlPhoto = this.apuUrl.apiUrlFile;
        this.users = JSON.parse(localStorage.getItem("user"));
    }

    ngOnInit() {

        this.teacher.getAllClasseOfTeacher(this.teacherData)
            .subscribe(data => {
                    this.classes = data;
                }, err => {

                },
            );


        // this.teacher.Heures()
        //     .subscribe(data => {
        //             this.Heures = data;
        //         }, err => {
        //
        //         },
        //     );

        this.teacher.getAllMois()
            .subscribe(data => {
                    this.Mois = data;
                }, err => {

                },
            );


    }

    close() {
        this.modalController.dismiss(null);
    }


    charger() {

        this.dat.classeName = this.dat.idClasse;
        this.dat.users = this.users;
        this.teacher.Matieres(this.dat)
            .subscribe(data => {
                    this.maiteres = data
                }, err => {

                },
            );


    }

    chargerchapitre() {

        console.log(this.dat);
        this.dat.users = this.users;
        this.teacher.getChapitreByMatiereAndclasse(this.dat)
            .subscribe(data => {
                    this.chapitres = data
                }, err => {

                },
            );
    }

    chargerpartie() {

        console.log(this.dat);
        this.dat.users = this.users;
        this.teacher.getPartieByMatiereAndclasse(this.dat)
            .subscribe(data => {
                    this.parties = data;

                    // setInterval(() => {
                    //     location.reload();
                    // }, 2000);

                }, err => {

                },
            );
    }



    add2(index) {
        this.dat.inputs2.push({
            partie: "",
            exercie: ""
        });

        console.log(this.dat.inputs2);
    }



    remove2(index) {
        this.dat.inputs2.splice(index, 1);
    }

    async presentLoadingWithOptions() {
        const loading = await this.loadingController.create({
            spinner: "bubbles",
            message: 'Traitement en cours...',
            // translucent: true,
            // cssClass: 'custom-class custom-loading',
            // backdropDismiss: true
        });

        return await  loading.present();
    }

    async presentToast() {
        const toast = await this.toast.create({
            message: 'Verifier que vous avez saisi tous vos champs. Si le probleme persite contactez le 67901213',
            mode:"ios",
            color: 'dark',
            duration: 4000
        });
        toast.present();
    }

    async presentToast2() {
        const toast = await this.toast.create({
            message: 'Cahier de texte  corretement enregistre.',
            color: 'dark',
            mode:"ios",
            duration: 2000,

        });
        toast.present();
    }




    Valider(value) {



        this.presentLoadingWithOptions();

        this.teacher.createCahierTexte(this.dat)


            .subscribe(data => {


                this.rep = data;

                this.loadingController.dismiss();

                this.presentToast2();


               this.close();

                this.router.navigateByUrl('menu/dashbord-teacher');

                // window.location.assign('menu/texbooks');


            }, error => {

                this.loadingController.dismiss();

                this.presentToast();

            });


    }
}
