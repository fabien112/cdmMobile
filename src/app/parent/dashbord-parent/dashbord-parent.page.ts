import { Component, OnInit } from '@angular/core';
import {UserDataService} from "../../services/user-data.service";
import {EleveService} from "../../services/eleve.service";
import {Router} from "@angular/router";
import {UrlHostService} from "../../services/url-host.service";
import {ParentService} from "../../services/parent.service";
import {Platform} from "@ionic/angular";
import {LocalNotifications} from "@awesome-cordova-plugins/local-notifications/ngx";

@Component({
  selector: 'app-dashbord-parent',
  templateUrl: './dashbord-parent.page.html',
  styleUrls: ['./dashbord-parent.page.scss'],
})
export class DashbordParentPage implements OnInit {

    resp : any;  resp2 : any;  titre : any;  content : any; idNotif : any;
    user = <any> {};
    urlPhoto ='';
    datasEnfant:any;



    constructor(

                private userProfile:UserDataService,
                private eleve:EleveService,
                private router:Router,
                private urlData:UrlHostService,
                private parent:ParentService,
                private platform:Platform,
                private localNotifications:LocalNotifications,

    )

    {

        this.urlPhoto = this.urlData.apiUrlFile;
    }


    ngOnInit() {

        this.Profils();

        // this.notifications();
    }

    details(data){

        localStorage.setItem("datasEnfant",JSON.stringify(data));
        this.router.navigateByUrl('parent-select')
    }


    Profils(){

        this.user = JSON.parse(localStorage.getItem("user"));
        this.eleve.getInfosParent(this.user)
            .subscribe((data:any) => {
                    this.resp = data;
                },err=>{
                    console.log(err);
                },
            );

    }


    setSound() {
        if (this.platform.is('android')) {
            return 'file://assets/sounds/beep.mp3' // for Android
        } else {
            return 'file://assets/sounds/beep.mp3' // for iOS
        }
    }





    notifications(){

        this.user = JSON.parse(localStorage.getItem("user"));

        this.parent.listeNotifications(this.user)
            .subscribe((data:any) => {
                    this.resp2 = data;

                    if(this.resp2!=0){

                        for(let i = 0 ;i<=this.resp2.length; i++){


                            this.idNotif =this.resp2[i].id;
                            this.titre = this.resp2[i].titre ;

                            this.content = this.resp2[i].contenu ;

                                this.localNotifications.schedule({
                                    id:  this.idNotif ,
                                    title: this.titre,
                                    text: this.content,
                                    sound: this.setSound(),
                                    foreground: true,
                                });

                        }



                    }
                },err=>{
                    console.log(err);
                },
            );


        this.updateNotifications()





    }


    updateNotifications(){

        this.parent.updateNotifications(this.user)
            .subscribe((data:any) => {

            console.log('A jour bien ')


                },err=>{
                    console.log(err);
                },
            );



    }




}
