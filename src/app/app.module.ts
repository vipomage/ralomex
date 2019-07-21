import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FireService } from './Tools/services/fire.service';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { CardsFreeModule, MDBBootstrapModule } from 'angular-bootstrap-md';
import { AngularFireModule } from 'angularfire2';
import { HttpClientModule } from '@angular/common/http';
import { AccordionModule } from 'primeng/accordion';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { PipesModule } from './Tools/pipes/pipes.module';
import { ToastrModule } from 'ngx-toastr';

import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { applicationRouting } from './app.routing';
import { FeaturesModule } from './Features/features.module';
import { SharedModule } from './Shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterModule.forRoot(applicationRouting, { enableTracing: false }),
    AngularFireModule.initializeApp(environment.firebase),
    FeaturesModule,
    SharedModule,
    MDBBootstrapModule.forRoot(),
    CardsFreeModule,
    ToastrModule.forRoot(environment.toastr),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    BrowserAnimationsModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    HttpClientModule,
    AccordionModule,
    BrowserModule,
    TableModule,
    FormsModule,
    PipesModule,
  ],
  bootstrap: [AppComponent],
  providers: [FireService],
  exports: [RouterModule],
})
export class AppModule {}
