import { Component, OnInit } from '@angular/core';
import {AlertController} from "@ionic/angular";
import {BehaviorSubject} from "rxjs/index";

@Component({
  selector: 'app-devoir-quizz',
  templateUrl: './devoir-quizz.page.html',
  styleUrls: ['./devoir-quizz.page.scss'],
})
export class DevoirQuizzPage implements OnInit {

    devoirs: any;
    user = <any> {};
    urlPhoto = '';
    question = false;
    respEleve = {};
    correcEleve = {};
    Nbre=0;
    retard=false;
    verrouiller=false;
    res = false;
    time:BehaviorSubject<string>=new BehaviorSubject('00:00');
    timer:number;
    interval;
    temps; hr; min;
    date;
    datas = {
        idQuizz: "",
        sumPoint:0,
        totalBonne:0,
        totalPoint:0

    };
    private chrono: boolean;


    constructor(public alertController: AlertController) {

        this.devoirs = JSON.parse(localStorage.getItem('quizz'));

        this.date=this.devoirs.duree;

        this.date = this.date.split(':');

        this.hr = parseInt(this.date[0])*60;

        this.min = parseInt(this.date[1]);
    }

    ngOnInit() {


    }

    async presentAlertConfirm(duration:number) {
        const alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: 'Confirmation !',
            message: 'Etes vous sure ce vouloir demarrer ? ',
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

                        this.timer=(this.hr+this.min)*60;
                        this.interval = setInterval(()=>{
                            this.updateatimer();
                        },1000);

                        this.question=true;
                        this.chrono = true;


                    }
                }
            ]
        });
        await alert.present();
    }
    async presentAlertConfirm2() {

        const alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: 'Confirmation !',
            message: 'Etes vous sure ce vouloir envoyer ? ',
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

                        this.Nbre = this.devoirs.question.length;

                        for(var i=0 ; i<this.Nbre ;i++)  {




                            let question = this.devoirs.question[i];

                            if(question.resp_question==this.respEleve[i]) {


                                this.correcEleve[i]=1;

                                this.datas.sumPoint = this.datas.sumPoint + parseFloat(question.point);

                                this.datas.totalBonne = this.datas.totalBonne + 1

                            }

                            else {

                                this.correcEleve[i]=0;

                            }

                            this.datas.totalPoint =  this.datas.totalPoint+parseFloat(question.point)


                        }

                        this.res=true;
                        this.verrouiller=true;



                    }
                }
            ]
        });
        await alert.present();
    }

    updateatimer(){

         let minutes : any = this.timer/60;

        let seconds : any =  this.timer%60;

        minutes = Math.floor(minutes);

        seconds = Math.floor(seconds);

        const text  = minutes + ' min : ' + seconds + ' s';
        this.time.next(text);
        --this.timer;

       if(this.timer<-1){

           clearInterval(this.interval);
           this.time.next('00:00');
           this.retard=true;
       }



    }

}
