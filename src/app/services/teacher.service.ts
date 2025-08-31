import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UrlHostService} from "./url-host.service";

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

    apiUrl = "";
    apiDatas = "";

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
        })
    };

    constructor(private http: HttpClient, private UrlHost:UrlHostService) {

        this.apiUrl = this.UrlHost.apiUrl;
        this. apiDatas  = this.UrlHost.apiUrlFile;

    }


    public addNoteNew(values)

    {
        return this.http.post<any>(this.apiUrl+'/teacher/AddNotenewversion',values,this.httpOptions);
    }



    public getTrimestreEtablissement(values)

    {
        return this.http.post<any>(this.apiUrl+'/locale/getTrimestreEtablissement',values,this.httpOptions);
    }


    public JustifierNote(values)

    {
        return this.http.post<any>(this.apiUrl+'/teacher/JustifierNote',values,this.httpOptions);
    }

    public getInfosTeacher(values)

    {
        return this.http.post<any>(this.apiUrl+'/locale/getInfosTeacher',values,this.httpOptions);
    }

    public  getStudentClasse(values){

        return this.http.post<any>(this.apiUrl+'/locale/getEleveclasseByTeacher',values,this.httpOptions);


    }

    public  getInfoparent(values){

        return this.http.post<any>(this.apiUrl+'/teacher/getEleveAndParentInfosTeacher',values,this.httpOptions);


    }

    public  getTimetables(values){

        return this.http.post<any>(this.apiUrl+'/locale/getAllTimetableTeacher',values,this.httpOptions);

    }


    public  getAllClasseOfTeacher(values){

        return this.http.post<any>(this.apiUrl+'/teacher/getAllClasseOfTeacher',values,this.httpOptions);

    }

    public  AddNoteAlone (values){

        return this.http.post<any>(this.apiUrl+'/teacher/AddNoteAlone',values,this.httpOptions);

    }

    public  Update (values){

        return this.http.post<any>(this.apiUrl+'/teacher/updateNote',values,this.httpOptions);

    }



    public  Heures (){

        return this.http.post<any>(this.apiUrl+'/teacher/getAllHeures',this.httpOptions);

    }

    public  Matieres  (values){

        return this.http.post<any>(this.apiUrl+'/teacher/getLibelleMatiereclasseById',values,this.httpOptions);

    }


    public  getEleveclasseById  (values){

        return this.http.post<any>(this.apiUrl+'/locale/getEleveclasseById',values,this.httpOptions);

    }


    public  getStudentsofClasses  (values){

        return this.http.post<any>(this.apiUrl+'/teacher/getStudentByTeacherForAppel',values,this.httpOptions);

    }

    public  DoAppelClasses  (values){

        return this.http.post<any>(this.apiUrl+'/teacher/DoAppelByTeacher',values,this.httpOptions);

    }

    public  DoRetardClasses  (values){

        return this.http.post<any>(this.apiUrl+'/teacher/DoRetardByTeacher',values,this.httpOptions);

    }
    public  getTrimestreActif  (values){

        return this.http.post<any>(this.apiUrl+'/teacher/getTrimestreActif',values,this.httpOptions);

    }
    public  getEvaluationActif  (values){

        return this.http.post<any>(this.apiUrl+'/teacher/getEvaluationActif',values,this.httpOptions);

    }

    public  getStudentByTeacherForAppel  (values){

        return this.http.post<any>(this.apiUrl+'/teacher/getStudentByTeacherForAppel',values,this.httpOptions);

    }

    public  AddNote (values){

        return this.http.post<any>(this.apiUrl+'/teacher/AddNote',values,this.httpOptions);

    }

    public  getMessagesTeacher  (values){

        return this.http.post<any>(this.apiUrl+'/parent/getMessagesTeacher',values,this.httpOptions);

    }

    public  updateMessagesTeacher  (values){

        return this.http.post<any>(this.apiUrl+'/parent/updateMessagesParent',values,this.httpOptions);

    }

    public  getAllEvaluationsByParent  (values) {

        return this.http.post<any>(this.apiUrl+'/teacher/getAllEvaluationsByParent',values,this.httpOptions);
    }

    public  getBulletinEleveByParentTrimestre  (values) {

        return this.http.post<any>(this.apiUrl+'/teacher/getBulletinEleveByParentTrimestre',values,this.httpOptions);
    }

    public  getBulletinEleveByParent  (values) {

        return this.http.post<any>(this.apiUrl+'/teacher/getBulletinEleveByParentTrimestre',values,this.httpOptions);
    }

    public  getAllSyllabusByATeacher  (values) {

        return this.http.post<any>(this.apiUrl+'/teacher/getAllSyllabusByATeacher',values,this.httpOptions);
    }

    public  createSyllabus  (values) {

        return this.http.post<any>(this.apiUrl+'/teacher/createSyllabus',values,this.httpOptions);
    }

    public  delateSyllabus  (values) {

        return this.http.post<any>(this.apiUrl+'/teacher/delateSyllabus',values,this.httpOptions);
    }

    public  getAllCahierNewByATeacher  (values) {

        return this.http.post<any>(this.apiUrl+'/teacher/getAllCahierNewByATeacher',values,this.httpOptions);
    }

    public  delateNewBook  (values) {

        return this.http.post<any>(this.apiUrl+'/teacher/delateNewBook',values,this.httpOptions);
    }

    public  getAllMois  () {

        return this.http.post<any>(this.apiUrl+'/locale/getAllMois',this.httpOptions);
    }

    public  getChapitreByMatiereAndclasse  (values) {

        return this.http.post<any>(this.apiUrl+'/teacher/getChapitreByMatiereAndclasse',values,this.httpOptions);
    }


    public  getPartieByMatiereAndclasse  (values) {

        return this.http.post<any>(this.apiUrl+'/teacher/getPartieByMatiereAndclasse',values,this.httpOptions);
    }

    public createCahierTexte (values) {

        return this.http.post<any>(this.apiUrl+'/teacher/createCahierTexte',values,this.httpOptions);
    }

    public createQuizz (values) {

        return this.http.post<any>(this.apiUrl+'/teacher/createQuizz',values,this.httpOptions);
    }

    public getAllCahierByATeacher (values) {

        return this.http.post<any>(this.apiUrl+'/teacher/getAllCahierByATeacher',values,this.httpOptions);
    }

    public  delateCahierTeacher  (values) {

        return this.http.post<any>(this.apiUrl+'/teacher/delateCahierTeacher',values,this.httpOptions);
    }

    public  delateQuizz  (values) {

        return this.http.post<any>(this.apiUrl+'/teacher/delateQuizz',values,this.httpOptions);
    }

    public  updateCahierTeacher  (values) {

        return this.http.post<any>(this.apiUrl+'/teacher/updateCahierTeacher',values,this.httpOptions);
    }

    public  updateQuizz  (values) {

        return this.http.post<any>(this.apiUrl+'/teacher/updateQuizz',values,this.httpOptions);
    }

    public  upload2  (values) {

        return this.http.post<any>(this.apiUrl+'/admin/upload2',values,this.httpOptions);
    }

    public  getAllQuizzByATeacher  (values) {

        return this.http.post<any>(this.apiUrl+'/teacher/getAllQuizzByATeacher',values,this.httpOptions);
    }

    public  getAllCoursLigneByATeacher  (values) {

        return this.http.post<any>(this.apiUrl+'/teacher/getAllCoursByATeacher',values,this.httpOptions);
    }

    public  delateCoursTeacher  (values) {

        return this.http.post<any>(this.apiUrl+'/teacher/delateCoursTeacher',values,this.httpOptions);
    }

    public  pubishCoursTeacher  (values) {

        return this.http.post<any>(this.apiUrl+'/teacher/updateCoursTeacher',values,this.httpOptions);
    }


    public  getAllDevoirsTeacher  (values) {

        return this.http.post<any>(this.apiUrl+'/teacher/getAllDevoirsTeacher',values,this.httpOptions);
    }

    public  delatedevoirTeacher  (values) {

        return this.http.post<any>(this.apiUrl+'/teacher/delateDevoir',values,this.httpOptions);
    }

    public  pubishdevoirTeacher  (values) {

        return this.http.post<any>(this.apiUrl+'/teacher/updateDevoirsTeacher',values,this.httpOptions);
    }

    public  getAllEvaluations  (values) {

        return this.http.post<any>(this.apiUrl+'/teacher/getEvaluationAll',values,this.httpOptions);
    }

    public  getStudentByTeacherVoirNote  (values) {

        return this.http.post<any>(this.apiUrl+'/teacher/getStudentByTeacherVoirNote',values,this.httpOptions);
    }











}
