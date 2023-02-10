import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },

  {
    path: 'devoir-details',
    loadChildren: () => import('./eleve/devoir-details/devoir-details.module').then( m => m.DevoirDetailsPageModule)
  },
  {
    path: 'devoir-quizz',
    loadChildren: () => import('./eleve/devoir-quizz/devoir-quizz.module').then( m => m.DevoirQuizzPageModule)
  },

    {
        path:'tranche2',
        children:[
            {
                path: 'tranche2',
                loadChildren: () => import('./eleve/tranches/tranche2/tranche2.module').then( m => m.Tranche2PageModule)

            }
        ]
    },
  {
    path: 'parent-select',
    loadChildren: () => import('./parent/parent-select/parent-select.module').then( m => m.ParentSelectPageModule)
  },
  {
    path: 'emploi-temps-parent',
    loadChildren: () => import('./parent/emploi-temps-parent/emploi-temps-parent.module').then( m => m.EmploiTempsParentPageModule)
  },
  {
    path: 'absence-parent',
    loadChildren: () => import('./parent/absence-parent/absence-parent.module').then( m => m.AbsenceParentPageModule)
  },
  {
    path: 'frais-parent',
    loadChildren: () => import('./parent/frais-parent/frais-parent.module').then( m => m.FraisParentPageModule)
  },
  {
    path: 'devoirs-parent',
    loadChildren: () => import('./parent/devoirs-parent/devoirs-parent.module').then( m => m.DevoirsParentPageModule)
  },
  {
    path: 'details-devoirs-parent',
    loadChildren: () => import('./parent/details-devoirs-parent/details-devoirs-parent.module').then( m => m.DetailsDevoirsParentPageModule)
  },
  {
    path: 'cahier-texte-parent',
    loadChildren: () => import('./parent/cahier-texte-parent/cahier-texte-parent.module').then( m => m.CahierTexteParentPageModule)
  },
  {
    path: 'cours-ligne-parent',
    loadChildren: () => import('./parent/cours-ligne-parent/cours-ligne-parent.module').then( m => m.CoursLigneParentPageModule)
  },
  {
    path: 'quizz-parent',
    loadChildren: () => import('./parent/quizz-parent/quizz-parent.module').then( m => m.QuizzParentPageModule)
  },
  {
    path: 'detailsquizz-parent',
    loadChildren: () => import('./parent/detailsquizz-parent/detailsquizz-parent.module').then( m => m.DetailsquizzParentPageModule)
  },
  {
    path: 'tranche2-parent',
    loadChildren: () => import('./parent/tranches/tranche2-parent/tranche2-parent.module').then( m => m.Tranche2ParentPageModule)
  },
  {
    path: 'classelist',
    loadChildren: () => import('./teacher/classelist/classelist.module').then( m => m.ClasselistPageModule)
  },
  {
    path: 'details-eleve',
    loadChildren: () => import('./teacher/details-eleve/details-eleve.module').then( m => m.DetailsElevePageModule)
  },
  {
    path: 'timetable',
    loadChildren: () => import('./teacher/timetable/timetable.module').then( m => m.TimetablePageModule)
  },
  {
    path: 'presence',
    loadChildren: () => import('./teacher/presence/presence.module').then( m => m.PresencePageModule)
  },
  {
    path: 'note',
    loadChildren: () => import('./teacher/note/note.module').then( m => m.NotePageModule)
  },
  {
    path: 'messages',
    loadChildren: () => import('./teacher/messages/messages.module').then( m => m.MessagesPageModule)
  },
  {
    path: 'detailmessages',
    loadChildren: () => import('./teacher/detailmessages/detailmessages.module').then( m => m.DetailmessagesPageModule)
  },
  // {
  //   path: 'note',
  //   loadChildren: () => import('./parent/note/note.module').then( m => m.NotePageModule)
  // },
  {
    path: 'parent-notes',
    loadChildren: () => import('./parent/parent-notes/parent-notes.module').then( m => m.ParentNotesPageModule)
  },
  {
    path: 'syllabus',
    loadChildren: () => import('./teacher/syllabus/syllabus.module').then( m => m.SyllabusPageModule)
  },
  {
    path: 'addsyllabus',
    loadChildren: () => import('./teacher/addsyllabus/addsyllabus.module').then( m => m.AddsyllabusPageModule)
  },
  {
    path: 'texbooks',
    loadChildren: () => import('./teacher/texbooks/texbooks.module').then( m => m.TexbooksPageModule)
  },
  {
    path: 'addtexbook',
    loadChildren: () => import('./teacher/addtexbook/addtexbook.module').then( m => m.AddtexbookPageModule)
  },
  {
    path: 'liaison',
    loadChildren: () => import('./teacher/liaison/liaison.module').then( m => m.LiaisonPageModule)
  },
  {
    path: 'addliaison',
    loadChildren: () => import('./teacher/addliaison/addliaison.module').then( m => m.AddliaisonPageModule)
  },
  {
    path: 'enligne',
    loadChildren: () => import('./teacher/enligne/enligne.module').then( m => m.EnlignePageModule)
  },
  {
    path: 'quizzs',
    loadChildren: () => import('./teacher/quizzs/quizzs.module').then( m => m.QuizzsPageModule)
  },
  {
    path: 'addquizz',
    loadChildren: () => import('./teacher/addquizz/addquizz.module').then( m => m.AddquizzPageModule)
  },
  {
    path: 'detailsyllabus',
    loadChildren: () => import('./teacher/detailsyllabus/detailsyllabus.module').then( m => m.DetailsyllabusPageModule)
  },
  {
    path: 'detailtexbook',
    loadChildren: () => import('./teacher/detailtexbook/detailtexbook.module').then( m => m.DetailtexbookPageModule)
  },
  {
    path: 'detailsquizz',
    loadChildren: () => import('./teacher/detailsquizz/detailsquizz.module').then( m => m.DetailsquizzPageModule)
  },
  {
    path: 'message-parent',
    loadChildren: () => import('./parent/message-parent/message-parent.module').then( m => m.MessageParentPageModule)
  },
  {
    path: 'message-parent-details',
    loadChildren: () => import('./parent/message-parent-details/message-parent-details.module').then( m => m.MessageParentDetailsPageModule)
  },
  {
    path: 'consigne',
    loadChildren: () => import('./parent/consigne/consigne.module').then( m => m.ConsignePageModule)
  },
  {
    path: 'texte',
    loadChildren: () => import('./parent/texte/texte.module').then( m => m.TextePageModule)
  },
  {
    path: 'parent',
    loadChildren: () => import('./parent/parent.module').then( m => m.ParentPageModule)
  },
  {
    path: 'courligne',
    loadChildren: () => import('./teacher/courligne/courligne.module').then( m => m.CourlignePageModule)
  },
  {
    path: 'devoirligne',
    loadChildren: () => import('./teacher/devoirligne/devoirligne.module').then( m => m.DevoirlignePageModule)
  },
  {
    path: 'retard',
    loadChildren: () => import('./teacher/retard/retard.module').then( m => m.RetardPageModule)
  },
  {
    path: 'noteselect',
    loadChildren: () => import('./teacher/noteselect/noteselect.module').then( m => m.NoteselectPageModule)
  },
  {
    path: 'noteteacher',
    loadChildren: () => import('./teacher/noteteacher/noteteacher.module').then( m => m.NoteteacherPageModule)
  },
  {
    path: 'addnote-one',
    loadChildren: () => import('./teacher/addnote-one/addnote-one.module').then( m => m.AddnoteOnePageModule)
  },
  {
    path: 'editnote',
    loadChildren: () => import('./teacher/editnote/editnote.module').then( m => m.EditnotePageModule)
  },
  // {
  //   path: 'messages',
  //   loadChildren: () => import('./parent/messages/messages.module').then( m => m.MessagesPageModule)
  // }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
