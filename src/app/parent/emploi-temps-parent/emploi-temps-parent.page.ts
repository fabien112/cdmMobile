import { Component, OnInit } from '@angular/core';
import {UserDataService} from "../../services/user-data.service";
import {EleveService} from "../../services/eleve.service";
import {UrlHostService} from "../../services/url-host.service";

@Component({
  selector: 'app-emploi-temps-parent',
  templateUrl: './emploi-temps-parent.page.html',
  styleUrls: ['./emploi-temps-parent.page.scss'],
})
export class EmploiTempsParentPage implements OnInit {

    res : any;
    user = <any> {}; urlPhoto ='';


    constructor( private userProfile:UserDataService,private eleve:EleveService,private apuUrl : UrlHostService) {

    }

    ngOnInit() {

        this.EmploiDutemps()

    }

    EmploiDutemps(){

        this.urlPhoto = this.apuUrl.apiUrlFile;

        this.res = JSON.parse(localStorage.getItem("datasEnfant"));

    }


}
