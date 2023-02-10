import { Component, OnInit } from '@angular/core';
import {TeacherService} from "../../services/teacher.service";
import {UrlHostService} from "../../services/url-host.service";
import {take} from "rxjs/internal/operators";
import {AlertController, LoadingController, ToastController} from "@ionic/angular";
import {Router} from "@angular/router";

@Component({
  selector: 'app-presence',
  templateUrl: './presence.page.html',
  styleUrls: ['./presence.page.scss'],
})
export class PresencePage implements OnInit {

    teacherData :string;
    classes : any ; Heures : any ; maiteres : any ; users : string; students : any ;
    urlPhoto:any;

    checkedNames: any =[];

    dat:any = {
        matiere:'',
        dateJour:'',
        duree:'',
        classeName:'',
        idClasse:''
    };

    constructor (

        private teacher:TeacherService,
        private apuUrl : UrlHostService,
        public toast: ToastController,
        private alertController:AlertController,
        private router:Router,
        public loadingController: LoadingController
    )

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

    async presentToast() {
        const toast = await this.toast.create({
            message: 'Les absences ont correctement été enregistrées...',
            color:'dark',
            duration: 2000
        });
        toast.present();
    }


    afficher() {

        this.dat.classeName=this.dat.idClasse;

        this.teacher.getStudentsofClasses(this.dat)
            .subscribe(data=>{
                    this.students = data;

                for(let i=0;i<=this.students.length;i++){

                    this.students[i].checked = false;
                }


                },err=>{

                },
            );



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

   async Valider(){



       const alert = await this.alertController.create({
           cssClass: 'my-custom-class',
           header: 'Confirmation !',
           message: '<strong> Etes-vous sur de vouloir envoyer ? </strong>',
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
                   text: 'Valider',
                   id: 'confirm-button',

                   handler: () => {
                       this.presentLoadingWithOptions();
                       for (let i = 0; i < this.students.length; i++) {

                           this.checkedNames[i] = '';

                           if (this.students[i].checked == true) {

                               // Je recupere les id de tous les eleves absents ( coches en front end)


                               this.checkedNames[i] = this.students[i].id;

                           }


                       }


                       // Je supprime tous les selections vides du tableau


                       var checkedNames_filtre = this.checkedNames.filter(function (val) {

                           if (val == '' || val == NaN || val == undefined || val == null) {
                               return false;
                           }
                           return true;
                       });


                       // Je peux appeler l'api du fait l'appel depuis laravel


                       this.dat.checkBoxs = checkedNames_filtre;

                       console.log(this.dat);


                       this.teacher.DoAppelClasses(this.dat)
                           .pipe(take(1))
                           .subscribe((data) => {

                               this.loadingController.dismiss();

                               this.presentToast();

                             // Je reiinitialise les champs

                               for (var key in this.dat) {

                                   delete this.dat[key];
                               }


                               this.router.navigateByUrl('menu/dashbord-teacher');

                               // setInterval(() => {
                               //     location.reload();
                               // }, 2000);



                           });







                   }


               }

               ]


       });

       await alert.present();


    }


}
