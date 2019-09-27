import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { FireService } from './tools/services/fire.service';
import { environment } from '../environments/environment';
import { config } from './tools/services/config.service';
import { CardsFreeModule, MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PipesModule } from './tools/pipes/pipes.module';
import { ToastrModule } from 'ngx-toastr';

import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { applicationRouting } from './app.routing';
import { FeaturesModule } from './Features/features.module';
import { SharedModule } from './Shared/shared.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MatDialogModule } from '@angular/material';

@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterModule.forRoot(applicationRouting, {
      useHash: true,
      enableTracing: false,
      scrollPositionRestoration: 'top',
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => new TranslateHttpLoader(http),
        deps: [HttpClient],
      },
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    BrowserAnimationsModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    MatDialogModule,
    FeaturesModule,
    SharedModule,
    MDBBootstrapModule.forRoot(),
    CardsFreeModule,
    ToastrModule.forRoot(config.toastr),
    HttpClientModule,
    BrowserModule,
    FormsModule,
    PipesModule,
  ],
  bootstrap: [AppComponent],
  providers: [FireService, { provide: LocationStrategy, useClass: HashLocationStrategy }],
  exports: [RouterModule],
})
export class AppModule {}
