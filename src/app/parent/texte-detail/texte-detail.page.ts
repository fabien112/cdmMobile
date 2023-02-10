import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {UrlHostService} from "../../services/url-host.service";
import {ParentService} from "../../services/parent.service";

@Component({
    selector: 'app-texte-detail',
    templateUrl: './texte-detail.page.html',
    styleUrls: ['./texte-detail.page.scss'],
})
export class TexteDetailPage implements OnInit {

    parentEleveInfosTeacher : any ;

    dat : any =  {
        idTexte: '',
    };



    constructor( public modalController: ModalController,private urlData:UrlHostService,private parent:ParentService) {



    }

    ngOnInit() {

        if (localStorage.datasEnfant) {

            this.dat.idTexte = JSON.parse(localStorage.getItem("idCahierTexte"));

        }


        this.parent.getDetailsCahierTexte(this.dat)
            .subscribe(data=>{
                    this.parentEleveInfosTeacher = data
                },err=>{

                },
            );






    }






    close(){
        this.modalController.dismiss(null);
    }

}
