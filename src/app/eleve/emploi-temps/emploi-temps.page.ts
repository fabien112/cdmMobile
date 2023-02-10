import { Component, OnInit } from '@angular/core';
import {UserDataService} from "../../services/user-data.service";
import {EleveService} from "../../services/eleve.service";
import {UrlHostService} from "../../services/url-host.service";

@Component({
  selector: 'app-emploi-temps',
  templateUrl: './emploi-temps.page.html',
  styleUrls: ['./emploi-temps.page.scss'],
})
export class EmploiTempsPage implements OnInit {

    res : any;
    user = <any> {}; urlPhoto ='';


  constructor( private userProfile:UserDataService,private eleve:EleveService,private apuUrl : UrlHostService) {


  }

  ngOnInit() {

    this.EmploiDutemps()

  }

  EmploiDutemps(){

      this.urlPhoto = this.apuUrl.apiUrlFile;

    this.user = JSON.parse(localStorage.getItem("user"));

          this.eleve.getData(this.user)
              .subscribe(data=>{
                      this.res = data;
                  },err=>{
                      console.log(err);
                  },
              );

      }


}
