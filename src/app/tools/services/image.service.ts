import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';

import UploadTaskSnapshot = firebase.storage.UploadTaskSnapshot;
import { Reference } from '@angular/fire/storage/interfaces';
declare var ImageCompressor: any;

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  compressor = new ImageCompressor();
  private percentage: Observable<number | undefined>;
  private snapshot: Observable<UploadTaskSnapshot | undefined>;
  task: AngularFireUploadTask;
  status: string;
  preventEdit: boolean = false;
  downloadUrl: string;
  images: string[] = [];
  progress: number = 0;

  constructor(private auth: AuthService, private http: HttpClient, private storage: AngularFireStorage) {}

  disableFileUpload(): void {
    this.preventEdit = !this.preventEdit;
  }

  async uploadSingle(files: FileList, path: string = 'images'): Promise<string> {
    if (!files) return null;

    const image = files.item(0);
    const compressedFiles = await this.compressFiles(files);

    if (image.type.split('/')[0] !== 'image') {
      throw new TypeError('Unsupported File Type!');
    }
  
    const imageName = `${new Date().toJSON()}`;
    const task = this.storage.upload(`${path}/${imageName}`, compressedFiles[0]);
    task.percentageChanges().subscribe((percentage: number) => (this.progress = percentage));
    return await this.getDownloadUrl(task);
  }

  async uploadMultiple(
    files: FileList,
    path: string = 'images',
    deleteOld?: string | string[]
  ): Promise<string[]> {
    if (!files) return null;
    if (deleteOld) this.deleteImages(deleteOld);
    
    const uploadedImagesUrl = [];
    const compressedFiles = await this.compressFiles(files);

    for (let i = 0; i < compressedFiles.length; i++) {
      const image = compressedFiles[i];

      if (image.type.split('/')[0] !== 'image') {
        throw new TypeError('Unsupported File Type!');
      }
      const imageName = `${new Date().toJSON()}_${i}`;
      const task = this.storage.upload(`${path}/${imageName}`, image);
      task.percentageChanges().subscribe((percentage: number) => (this.progress = percentage));
      const imageUrl = await this.getDownloadUrl(task);

      uploadedImagesUrl.push(imageUrl);
    }
    
    return uploadedImagesUrl;
  }

  async getDownloadUrl(task: AngularFireUploadTask) {
    return await task.then(async data => {
      return await data.ref.getDownloadURL();
    });
  }

  async compressFiles(files: FileList): Promise<Blob[]> {
    const promises: Promise<Blob>[] = [];

    for (let i = 0; i < files.length; ++i) {
      const file = files[i];
      promises.push(this.compressor.compress(file, { quality: 0.8 }));
    }

    return await Promise.all(promises).then((convertedFiles: Blob[]) => convertedFiles);
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

  async deleteImages(imageUrls: string | string[]): Promise<any> {
    const promises: Promise<any>[] = [];
    if (Array.isArray(imageUrls)) {
      imageUrls.map(imageUrl => {
        promises.push(this.storage.storage.refFromURL(imageUrl).delete());
      });
    } else {
      promises.push(this.storage.storage.refFromURL(imageUrls).delete());
    }

    return await Promise.all(promises);
  }
}
