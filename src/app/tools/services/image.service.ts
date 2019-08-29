import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import UploadTaskSnapshot = firebase.storage.UploadTaskSnapshot;
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  public task: AngularFireUploadTask;
  public status: string;
  public preventEdit: boolean = false;
  downloadUrl: string;
  images: string[] = [];
  private percentage: Observable<number | undefined>;
  private snapshot: Observable<UploadTaskSnapshot | undefined>;

  constructor(
    private auth: AuthService,
    private http: HttpClient,
    private storage: AngularFireStorage
  ) {}

  disableFileUpload = (): void => {
    this.preventEdit = !this.preventEdit;
  };

  async uploadSingle(files: FileList, path: string = 'images'): Promise<string> {
    const image = files.item(0);
    let imageUrl: string;

    if (image.type.split('/')[0] !== 'image') {
      throw new TypeError('Unsupported File Type!');
    }

    const imageName = `${new Date().getTime()}_${image.name}`;
    this.task = this.storage.upload(`${path}/${imageName}`, image);

    imageUrl = await this.task.then(async data => {
      return await data.ref.getDownloadURL();
    });

    return imageUrl;
  }

  startUpload = (event: FileList) => {
    this.status = 'Uploading please wait!';
    this.disableFileUpload();
    // The File object
    for (let i = 0; i < event.length; i++) {
      const file = event.item(i);

      // Client-side validation
      if (file.type.split('/')[0] !== 'image') {
        this.preventEdit = false;
        throw new TypeError('Unsupported File Type!');
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
  };

  prepToUploadSingle = (event: FileList, location) => {
    const file = event.item(0);
    this.preventEdit = true;
    if (file.type.split('/')[0] !== 'image') {
      this.preventEdit = false;
      throw new TypeError('Unsupported File Type!');
    }
    const date = new Date().getTime();
    const path = `${location}/${date}_${file.name}`;
    return this.storage.upload(path, file);
  };
}
