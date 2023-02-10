import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import {ParentService} from "./services/parent.service";
import {interval} from "rxjs/index";
import {LocalNotifications} from "@awesome-cordova-plugins/local-notifications/ngx";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {


    resp2 : any;  titre : any;  content : any; idNotif : any;  user = <any> {};

    dat:any = {
        id:''
    };

    constructor(

    private platform:Platform,
    private parent:ParentService,
    private localNotifications:LocalNotifications,

  )

  {


      console.log(this.user);



  }

    ngOnInit() {


        interval(30000).subscribe(() => this.notifications());
    }

    setSound() {
        if (this.platform.is('android')) {
            return 'file://assets/sounds/beep.mp3' // for Android
        } else {
            return 'file://assets/sounds/beep.mp3' // for iOS
        }
    }





    notifications(){


        if (localStorage.user) {


            this.user = JSON.parse(localStorage.getItem("user"));



            if(this.user.type=="Parent"){

                this.parent.listeNotifications(this.user)
                    .subscribe((data:any) => {
                            this.resp2 = data;

                            console.log(this.resp2.length);

                            if(this.resp2.length > 0){

                                for(let i = 0 ;i<=this.resp2.length; i++) {


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

                                    this.dat.id=this.resp2[i].id;
                                    this.parent.updateNotifications(this.dat)
                                        .subscribe((data:any) => {

                                                console.log('Mise a jour des notifications  ')

                                            },err=>{
                                                console.log(err);
                                            },
                                        );
                                }

                                // this.updateNotifications();

                            }

                            else {
                                console.log("Pas de nouvelle notification ")
                            }
                        },err=>{
                            console.log(err);
                        },
                    );


            }




            // console.log(this.user);




        }














    }


    updateNotifications(){

        this.parent.updateNotifications(this.user)
            .subscribe((data:any) => {

                    console.log('Mise a jour des notifications  ')


                },err=>{
                    console.log(err);
                },
            );



    }

}
