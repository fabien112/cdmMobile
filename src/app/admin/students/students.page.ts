import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ToastController } from '@ionic/angular';

@Component({
    selector: 'app-students',
    templateUrl: './students.page.html',
    styleUrls: ['./students.page.scss'],
})
export class StudentsPage {
    studentPhoto: string | null = null; // Stocke l’image en base64
    photoSelected: File | null = null; // Stocke le fichier sélectionné
    serverUploadUrl: string = "https://cdu.infinitytech-proges.com/api/admin/uploadpic"; // Remplace par ton URL serveur

    constructor(
        private camera: Camera,
        private toastController: ToastController
    ) {}

    async showToast(message: string) {
        const toast = await this.toastController.create({
            message,
            duration: 3000,
            position: 'top',
        });
        toast.present();
    }

    // 📷 Capture une photo avec la caméra
    takePhoto() {
        const options: CameraOptions = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.CAMERA,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };

        this.camera.getPicture(options).then(
            (imageData) => {
                this.studentPhoto = 'data:image/jpeg;base64,' + imageData;
            },
            (err) => {
                this.showToast('Erreur lors de la prise de photo : ' + err);
            }
        );
    }

    // 📂 Sélectionne une photo depuis la galerie
    selectPhoto(event: any) {
        const file = event.target.files[0];
        if (file) {
            this.photoSelected = file;

            // Créer un aperçu de l'image sélectionnée
            const reader = new FileReader();
            reader.onload = (e: any) => {
                this.studentPhoto = e.target.result as string;
            };

            reader.readAsDataURL(file);
        }
    }

    // 🚀 Envoi la photo au serveur avec `fetch`
    uploadPhoto(event: any) {
        const file = event.target.files[0]; // Récupérer le fichier sélectionné

        if (!file) {
            console.error("Aucun fichier sélectionné !");
            return;
        }

        const formData = new FormData();
        formData.append("file", file); // Le nom du champ doit être "file"

        fetch("http://ton-backend.com/api/uploadpic", {
            method: "POST",
            body: formData
        })
            .then(response => response.json())
            .then(data => console.log("Réponse du serveur :", data))
            .catch(error => console.error("Erreur lors de l'upload :", error));
    }

}
