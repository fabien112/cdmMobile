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
        commune:'Non',
        communeValue:'',
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

        this.actua=false
    }


    charger2(){

        this.actua=false
        this.dat.communeValue = ''


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


    async presentToast() {
        const toast = await this.toast.create({
            message: 'Les note ont  correctement été enregistrées...',
            color:'dark',
            duration: 2000
        });
        toast.present();
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


    async  Justifier(data) {




        const alert = await  this.alertController.create({
            cssClass: 'my-custom-class',
            header: 'Confirmation !',
            message: '<strong> Etes-vous sur de vouloir justifier cette note  ? </strong>',
            buttons: [
                {
                    text: 'Annuler',
                    role: 'cancel',
                    cssClass: 'secondary',
                    id: 'cancel-button',
                    handler: (blah) => {
                        console.log('Confirm Cancel: blah');
                    }
                }, {
                    text: 'Confirmer',
                    id: 'confirm-button',

                    handler: () => {


                        this.presentLoadingWithOptions();
                        this.teacher.JustifierNote(data) .
                        subscribe(data=>{

                                this.loadingController.dismiss();


                            this.presentToast();

                            this.afficher()
                            },err=>{
                                this.loadingController.dismiss();

                            },
                        );


                        console.log(data)




                    }


                }

            ]


        });

        await alert.present();
    }


    afficher() {


        this.actua=true ;


        this.presentLoadingWithOptions();

        this.teacher.getStudentByTeacherVoirNote(this.dat)
            .subscribe(data=>{
                    this.Classes = data;



                if (this.dat.commune === "Oui") {
                    this.Classes.forEach(note => {
                        note.valeur = this.dat.communeValue; // Affecter la valeur commune à chaque note
                    });
                }

                this.Classes.forEach(note => {
                    if (note.statusNote == 1) note.valeur = ""; // Affecter la valeur commune à chaque note
                });
                this.loadingController.dismiss();
                },err=>{

                },
            );


    }


    async ValiderNew(){

        for (var item in this.Classes) {
            let valeur = this.Classes[item]["valeur"];

            this.Classes[item]["Ideval"] = this.dat.libelleEvaluation;
            this.Classes[item]["Idmatiere"] = this.dat.matiere;
            this.Classes[item]["Idtrimestre"] = this.dat.trimestre;
            this.Classes[item]["Idclasse"] = this.dat.idClasse;

            // Vérifie si la valeur n'est pas un nombre (NaN) ou est hors de l'intervalle 0-20
            if (valeur > 20 || valeur < 0) {
                var dec = true;
                alert(
                    " La ligne " +
                    (parseInt(item) + 1) +
                    " contient une note invalide. Assurez-vous d'entrer un nombre compris entre << 0 et 20 >>."
                );
                break;
            } else {
                dec = false;

            }
        }

        if (dec == false) {

            this.presentLoadingWithOptions();

            this.teacher.addNoteNew(this.Classes)


                .subscribe( data => {


                    this.loadingController.dismiss();
                    this.presentToast();

                    //this.close();


                },error => {

                    this.loadingController.dismiss();

                    this.presentToast();

                });


        }

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
