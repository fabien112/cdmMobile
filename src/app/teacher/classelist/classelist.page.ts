import { Component, OnInit } from '@angular/core';
import {UserDataService} from "../../services/user-data.service";
import {TeacherService} from "../../services/teacher.service";
import {UrlHostService} from "../../services/url-host.service";
import { ModalController } from '@ionic/angular';
import {DetailsElevePage} from '../details-eleve/details-eleve.page';



@Component({
  selector: 'app-classelist',
  templateUrl: './classelist.page.html',
  styleUrls: ['./classelist.page.scss'],
})
export class ClasselistPage implements OnInit {

    Liste : any;
    user = <any> {};
    urlPhoto ='';


    constructor(public modalController: ModalController,
                private userProfile:UserDataService,
                private teacher:TeacherService,
                private apuUrl : UrlHostService ) { }

  ngOnInit() {

      this.ClasseList();
  }

    async detailsShow (values) {

        localStorage.setItem('EleveInfosTeacher', JSON.stringify(values));

        const modal = await this.modalController.create({
            component: DetailsElevePage,

            componentProps: {

            }

        });
        return await modal.present();



    }


    ClasseList(){

        this. urlPhoto = this.apuUrl.apiUrlFile;

        this.user = JSON.parse(localStorage.getItem("datasClasse"));

        this.teacher.getStudentClasse(this.user)
            .subscribe(data=>{
                    this.Liste = data
                },err=>{
                    console.log(err);
                },
            );



    }



}
