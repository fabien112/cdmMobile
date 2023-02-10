import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
      children:[

          {
              path: 'dashboard',
              loadChildren: () => import('../eleve/dashboard/dashboard.module').then( m => m.DashboardPageModule)
          },
          {
              path: 'devoirs',
              loadChildren: () => import('../eleve/devoirs/devoirs.module').then( m => m.DevoirsPageModule)
          },
          {
              path: 'cours',
              loadChildren: () => import('../eleve/cours/cours.module').then( m => m.CoursPageModule)
          },
          {
              path: 'emploi-temps',
              loadChildren: () => import('../eleve/emploi-temps/emploi-temps.module').then( m => m.EmploiTempsPageModule)
          },
          {
              path: 'frais',
              loadChildren: () => import('../eleve/frais/frais.module').then( m => m.FraisPageModule)
          },
          {
              path: 'absences',
              loadChildren: () => import('../eleve/absences/absences.module').then( m => m.AbsencesPageModule)
          },
          {
              path: 'cahiers',
              loadChildren: () => import('../eleve/cahiers/cahiers.module').then( m => m.CahiersPageModule)
          },
          {
              path: 'quizz',
              loadChildren: () => import('../eleve/quizz/quizz.module').then( m => m.QuizzPageModule)
          },

          {
              path: 'dashbord-parent',
              loadChildren: () => import('../parent/dashbord-parent/dashbord-parent.module').then( m => m.DashbordParentPageModule)
          },

          {
              path: 'dashbord-teacher',
              loadChildren: () => import('../teacher/dashbord-teacher/dashbord-teacher.module').then( m => m.DashbordTeacherPageModule)
          },

          {
              path: 'timetable',
              loadChildren: () => import('../teacher/timetable/timetable.module').then( m => m.TimetablePageModule)
          },

          {
              path: 'presence',
              loadChildren: () => import('../teacher/presence/presence.module').then( m => m.PresencePageModule)
          },

          {
              path: 'retard',
              loadChildren: () => import('../teacher/retard/retard.module').then( m => m.RetardPageModule)
          },

          {
              path: 'note',
              loadChildren: () => import('../teacher/note/note.module').then( m => m.NotePageModule)
          },
          {
              path: 'noteselect',
              loadChildren: () => import('../teacher/noteselect/noteselect.module').then( m => m.NoteselectPageModule)
          },

          {
              path: 'noteteacher',
              loadChildren: () => import('../teacher/noteteacher/noteteacher.module').then( m => m.NoteteacherPageModule)
          },

          {
              path: 'messages',
              loadChildren: () => import('../teacher/messages/messages.module').then( m => m.MessagesPageModule)
          },

          {
              path: 'syllabus',
              loadChildren: () => import('../teacher/syllabus/syllabus.module').then( m => m.SyllabusPageModule)
          },

          {
              path: 'texbooks',
              loadChildren: () => import('../teacher/texbooks/texbooks.module').then( m => m.TexbooksPageModule)
          },

          {
              path: 'liaison',
              loadChildren: () => import('../teacher/liaison/liaison.module').then( m => m.LiaisonPageModule)
          },

          {
              path: 'enligne',
              loadChildren: () => import('../teacher/enligne/enligne.module').then( m => m.EnlignePageModule)
          },

          {
              path: 'quizzs',
              loadChildren: () => import('../teacher/quizzs/quizzs.module').then( m => m.QuizzsPageModule)
          },
          {
              path: 'message-parent',
              loadChildren: () => import('../parent/message-parent/message-parent.module').then( m => m.MessageParentPageModule)
          },

          {
              path: 'courligne',
              loadChildren: () => import('../teacher/courligne/courligne.module').then( m => m.CourlignePageModule)
          },

          {
              path: 'devoirligne',
              loadChildren: () => import('../teacher/devoirligne/devoirligne.module').then( m => m.DevoirlignePageModule)
          },

          {
              path: 'addnote-one',
              loadChildren: () => import('../teacher/addnote-one/addnote-one.module').then( m => m.AddnoteOnePageModule)
          },


      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
