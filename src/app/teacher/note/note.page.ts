import { Component, OnInit } from '@angular/core';
import {TeacherService} from "../../services/teacher.service";
import {UrlHostService} from "../../services/url-host.service";
import {AlertController, LoadingController, ToastController} from "@ionic/angular";
import {Router} from "@angular/router";
import {beforeEach} from "selenium-webdriver/testing";


@Component({
  selector: 'app-note',
  templateUrl: './note.page.html',
  styleUrls: ['./note.page.scss'],
})
export class NotePage implements OnInit {

    teacherData :string;
    classes : any ; Heures : any ;
    maiteres : any ; users : string; Classes : any ;
    urlPhoto:any; trimestres:any;evaluations:any;
    Notes:any={};

    dat:any = {
        matiere:'',
        libelleEvaluation:'',
        trimestre:'',
        classeName:'',
        idClasse:''
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

        this.teacher.getTrimestreActif(this.users)
            .subscribe(data=>{
                    this.trimestres = data
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

    afficher(){

        this.teacher.getStudentByTeacherForAppel(this.dat)
            .subscribe(data=>{
                    this.Classes = data
                },err=>{

                },
            );


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
            message: 'Saisir toutes les notes correctement !',
            color:'dark',
            duration: 2000,

        });
        toast.present();
    }

    async presentToast2() {
        const toast = await this.toast.create({
            message: 'Notes enregistrées correctement ! ',
            color:'dark',
            duration: 3000,

        });
        toast.present();
    }

    async presentToast3() {
        const toast = await this.toast.create({
            message: 'Les notes  saisient sont incorrects  ou existent deja , contactez le  o679901213 !',
            color:'dark',
            duration: 4000,

        });
        toast.present();
    }

    async presentToast4() {
        const toast = await this.toast.create({
            message: 'Saisir toutes les notes correctement !',
            color:'dark',
            duration: 2000,

        });
        toast.present();
    }

    async Valider(event:Event){

        const alert = await this.alertController.create({
            header: 'Confirmation !',
            message: ' <strong>Etes-vous sure de vouloir envoyer ces notes ? </strong>',
            buttons: [
                {
                    text: 'Annuler',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: (blah) => {
                        console.log('Confirm Cancel: blah');
                    }
                }, {
                    text: 'OK',
                    handler: () => {
                        this.dat.Note = this.Notes;

                        this.dat.Classes = this.Classes;

                        console.log(this.Notes);

                        if(Object.keys(this.Notes).length<this.Classes.length){


                            this.presentToast();

                        }

                        else {

                            for (var item in this.Notes) {


                                console.log(this.Notes[item]);

                                if (this.Notes[item] == null  ) {


                                    var dec = true ;

                                    this.presentToast4();

                                    break;

                                }



                                else {

                                    dec = false
                                }




                            }

                            console.log(dec)


                            if(dec==false){


                                this.presentLoadingWithOptions();

                                this.teacher.AddNote(this.dat)


                                    .subscribe(data => {


                                        this.rep = data;

                                        this.loadingController.dismiss();

                                        this.presentToast2();


                                        for (var key in this.dat) {

                                            delete this.dat[key];
                                        }

                                        this.router.navigateByUrl('menu/noteteacher');


                                    }, error => {

                                        this.loadingController.dismiss();

                                        this.presentToast3();

                                    });
                            }







                        }




                    }

                }



            ]
        });

        await alert.present();





        }

    refresh(){

        location.reload();
    }


            // console.log(this.dat);



}
