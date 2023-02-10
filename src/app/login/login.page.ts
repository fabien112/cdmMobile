import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from "../services/authentification.service";
import {Router} from "@angular/router";
import {AlertController, LoadingController, Platform, ToastController} from "@ionic/angular";
import {LocalNotifications} from "@awesome-cordova-plugins/local-notifications/ngx";


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  constructor(private authService:AuthentificationService,
              private router :Router,
              public loadingController: LoadingController,
              public alertController:AlertController,
              public toastController:ToastController,
              private localNotifications:LocalNotifications,
              private platform:Platform
  ) { }

  dataUser = {}; res = <any> {}; isConnected=0;

  dat:any = {
      login:'',
      password:''
  };

  ErrorMessage: any="Login inco";


  ngOnInit() {


  }


    Send(){

        this.localNotifications.schedule({
            title:'Xschoolink',
            text: 'I already tried adding a sound file to the resources folder and add the below code. But still not working',
            sound: this.setSound(),
            foreground: true,

        });
    }


    setSound() {
        if (this.platform.is('android')) {
            return 'file://assets/sounds/beep.mp3' // for Android
        } else {
            return 'file://assets/sounds/beep.mp3' // for iOS
        }
    }

    onLogin(user) {
         this.presentLoadingWithOptions();
         this.authService.login(this.dat)
            .subscribe(data=>{
                  this.res = data;
                console.log(this.res);
                  this.loadingController.dismiss();
                  if(this.res.status =='OK'){
                    if(this.res.userDatas.type=='Eleve'){
                      this.isConnected=1;
                        localStorage.setItem("user",JSON.stringify(this.res.userDatas));
                        this.router.navigateByUrl('menu/dashboard')
                    }

                      if(this.res.userDatas.type=='Parent'){
                          this.isConnected=1;
                          localStorage.setItem("user",JSON.stringify(this.res.userDatas));
                          this.router.navigateByUrl('menu/dashbord-parent')
                      }

                      if(this.res.userDatas.type=='Enseignant'){
                          this.isConnected=1;
                          localStorage.setItem("user",JSON.stringify(this.res.userDatas));
                          this.router.navigateByUrl('menu/dashbord-teacher')
                      }
                  }
                  else{

                      this.router.navigateByUrl('login')
                  }
                },err=>{
                    console.log(this.ErrorMessage);
                   this.loadingController.dismiss();
                   this.presentToast();
                },
            );


}


    async presentToast() {
        const toast = await this.toastController.create({
            header: '',
            message: 'Login ou mot de passe incorrect',
            icon: 'information-circle',
            color:'dark',
            // buttons: [
            //     {
            //         text: 'Fermer',
            //         role: 'cancel',
            //
            //     }
            // ],
            duration: 2000
        });
        toast.present();
    }


    // async presentAlert() {
    //     const alert = await this.alertController.create({
    //         subHeader: 'Connexion impossible',
    //         message: 'Login ou mot de passe incorrect.',
    //         buttons: ['OK']
    //     });
    //
    //     await alert.present();
    //
    //     const { role } = await alert.onDidDismiss();
    //     console.log('onDidDismiss resolved with role', role);
    // }


    async presentLoadingWithOptions() {
        const loading = await this.loadingController.create({
             spinner:"lines"  ,
             message: 'Connexion en cours...',
            // translucent: true,
            // cssClass: 'custom-class custom-loading',
            // backdropDismiss: true
        });

        return await  loading.present();
    }


}
