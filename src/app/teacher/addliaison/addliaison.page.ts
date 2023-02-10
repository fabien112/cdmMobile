import { Component, OnInit } from '@angular/core';
import {AlertController, LoadingController, ModalController, ToastController} from "@ionic/angular";
import {UrlHostService} from "../../services/url-host.service";
import {TeacherService} from "../../services/teacher.service";
import {Router} from "@angular/router";
// //import { File , FileEntry} from '@awesome-cordova-plugins/file/ngx';
// import {FileChooser} from "@ionic-native/file-chooser/ngx";
// import {FilePath} from "@ionic-native/file-path/ngx";



@Component({
  selector: 'app-addliaison',
  templateUrl: './addliaison.page.html',
  styleUrls: ['./addliaison.page.scss'],
})
export class AddliaisonPage implements OnInit {

    Liste: any;
    user = <any> {};
    teacherData :string;
    classes : any ; Heures : any ;
    maiteres : any ; users : string; Classes : any ;
    urlPhoto:any; trimestres:any;evaluations:any;
    Notes:any={

    };

    rep:any; image : any ; formData:any;

    dat:any = {
        idCahier: "",
        imageEmploiTmp: "",
        dateDebut: "",
        dateFin: "",
        idMatiere: "",
        idClasse: ""
    };

    returnFile : string ;


    constructor(
        public modalController: ModalController,
        private teacher:TeacherService,
        private apuUrl : UrlHostService,
        public toast: ToastController,
        private alertController:AlertController,
        public toastController:ToastController,
        public loadingController: LoadingController,
        //private fileChooser: FileChooser,
       // private filePath: FilePath,
       // private file: File,
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

    // async startUpload(image_filePath) {
    //     // if(image_filePath!=""){
    //         await this.file.resolveLocalFilesystemUrl(image_filePath)
    //             .then(entry => {
    //                 ( < FileEntry > entry).file(file => this.readFile(file))
    //             })
    //             .catch(err => {
    //                 console.log('Error while reading file.','danger');
    //             });
    //     // }
    // }

    // readFile(file:any) {
    //     const reader = new FileReader();
    //     reader.onload = () => {
    //         const formData = new FormData();
    //         const imgBlob = new Blob([reader.result], {
    //             type: file.type
    //         });
    //         file.name;
    //         formData.append('file', imgBlob, file.name);
    //         this.uploadImageData(formData);
    //     };
    //     reader.readAsArrayBuffer(file);
    // }
    //
    // async uploadImageData(formData: FormData) {
    //
    //     let reqSend = await this.teacher.upload2(formData).toPromise();
    //     if (reqSend) {
    //         if (reqSend.success) {
    //             //successs
    //         }
    //     }
    // }


    // readFile2(){
    //
    //     this.fileChooser.open()
    //         .then(fileUri => {
    //
    //             this.filePath.resolveNativePath(fileUri)
    //                 .then(filePath => {
    //                     this.returnFile = filePath ;
    //                 })
    //                 .catch(err => console.log(err));
    //         })
    //         .catch(e => console.log(e));
    // }



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
            header: 'Echec',
            message: 'Veillez saisir tous vos champs. Si le probleme persite contactez le 67901213',
            icon: 'information-circle',
            color:'danger',
            buttons: [
                {
                    text: 'Fermer',
                    role: 'cancel',

                }
            ],
            duration: 4000
        });
        toast.present();
    }

    async presentToast2() {
        const toast = await this.toast.create({
            header: 'Success',
            message: 'Syllabus corretement enregistre.',
            icon: 'information-circle',
            color:'primary',
            buttons: [
                {
                    text: 'Fermer',
                    role: 'cancel',

                }
            ],
            duration: 4000
        });
        toast.present();
    }


    Valider(value) {


        this.presentLoadingWithOptions();

        this.teacher.createSyllabus(this.dat)


            .subscribe(data => {


                this.rep = data;

                this.loadingController.dismiss();

                // window.location.assign('menu/syllabus');

                this.router.navigateByUrl('menu/dashbord-teacher');

                this.presentToast2();


            }, error => {

                this.loadingController.dismiss();

                this.presentToast();

            });



    }

    selectFile(){

        console.log('Salut');
    }

}
