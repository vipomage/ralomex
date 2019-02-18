import {
  AngularFireUploadTask,
  AngularFireStorage,
} from 'angularfire2/storage';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import UploadTaskSnapshot = firebase.storage.UploadTaskSnapshot;

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  task: AngularFireUploadTask;
  status: String;
  preventEdit: boolean = false;
  downloadUrl: String;
  images: String[] = [];
  private percentage: Observable<number | undefined>;
  private snapshot: Observable<UploadTaskSnapshot | undefined>;

  constructor(
    private auth: AuthService,
    private http: HttpClient,
    private storage: AngularFireStorage
  ) {}

  disableFileUpload = () => {
    this.preventEdit = !this.preventEdit;
  };

  startUpload(event: FileList) {
    this.status = 'Uploading please wait!';
    this.disableFileUpload();
    // The File object
    for (let i = 0; i < event.length; i++) {
      const file = event.item(i);

      // Client-side validation
      if (file.type.split('/')[0] !== 'image') {
        console.error('unsupported file type :( ');
        return;
      }

      // The storage path
      const date = new Date().getTime();
      const path = `images/${date}_${file.name}`;

      //Upload To StorageAsFile
      this.task = this.storage.upload(path, file);

      //Get link to uploaded file and upload it userCollection in DB
      this.task.then(data => {
        data.ref
          .getDownloadURL()
          .then(imgUrl => {
            this.downloadUrl = imgUrl;
            this.images.push(imgUrl);
            this.preventEdit = false;
          })
          .catch(e => {
            this.preventEdit = false;
            console.error(e.message);
          });
      });

      //Progress monitoring
      this.percentage = this.task.percentageChanges();
      this.snapshot = this.task.snapshotChanges();
    }
  }
}
