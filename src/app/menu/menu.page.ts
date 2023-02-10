import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LoadingController} from "@ionic/angular";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

menus = []; user = <any> {}; titreMenu : any;

// Menu eleve

    menusEleve = [
        {title: "Acceuil", url: "menu/dashboard", icon: "calendar"},
        {title: "Emploi du temps", url: "menu/emploi-temps", icon: "book"},
        {title: "Absences", url: "menu/absences", icon: "person"},
        // {title: "Cahier de liaison", url: "menu/cahiers", icon: "bookmarks"},
        {title: "Scolarité", url: "menu/frais/tranche2", icon: "wallet"},
        {title: "Devoirs ", url: "menu/devoirs", icon: "school"},
        {title: "Cours  ", url: "menu/cours", icon: "albums"},
        {title: "Questionnaires", url: "menu/quizz", icon: "folder-open"},
        {title: "Deconnexion", url: "/login", icon: "log-out"},
    ];

// Menu Parent

    menusParent = [
        {title: "Acceuil", url: "menu/dashbord-parent", icon: "calendar"},
        {title: "Messages", url: "menu/message-parent", icon: "chatbox-ellipses"},
        {title: "Deconnexion", url: "/login", icon: "log-out"},

    ];

    // Menu eleve

    menusEnseignant = [

        {title: "Acceuil", url: "menu/dashbord-teacher", icon: "calendar"},
        {title: "Absences", url: "menu/presence", icon: "person"},
        {title: "Retards", url: "menu/retard", icon: "albums"},
        {title: "Syllabus ", url: "menu/syllabus", icon: "school"},
        {title: "Cahiers de texte  ", url: "menu/texbooks", icon: "bookmarks"},
        {title: "En ligne ", url: "menu/enligne", icon: "desktop"},
        {title: "Notes", url: "menu/noteselect", icon: "bookmarks"},
        {title: "Emploi du temps", url: "menu/timetable", icon: "book"},
        {title: "Messages", url: "menu/messages", icon: "chatbox-ellipses"},
        {title: "Deconnexion", url: "/login", icon: "log-out"},
    ];

  constructor(private router:Router ,
              public loadingController: LoadingController,) {

      this.user = JSON.parse(localStorage.getItem("user"));

      if(this.user.type=='Eleve'){

          this.menus = this.menusEleve;

          this.titreMenu = "ELEVE";
      }

      if(this.user.type=='Parent'){

          this.menus = this.menusParent

          this.titreMenu = "PARENT";
      }

      if(this.user.type=='Enseignant'){

          this.menus = this.menusEnseignant

          this.titreMenu = "ENSEIGNANT";
      }



  }

  ngOnInit() {



  }


    async presentLoadingWithOptions() {
        const loading = await this.loadingController.create({
            spinner:"lines"  ,
            message: 'Déconnexion...',
            // translucent: true,
            // cssClass: 'custom-class custom-loading',
            // backdropDismiss: true
        });

        return await  loading.present();
    }

    onMenuAction(m) {



        if(m.title=="Deconnexion") {

            localStorage.clear();

            this.presentLoadingWithOptions();

            window.location.assign('login');

            // this.loadingController.dismiss();

        }

        else {
            this.router.navigateByUrl(m.url);
        }

    }
}
