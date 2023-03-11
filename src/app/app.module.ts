import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FaceStudentsComponent } from './face-students/face-students.component';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { InscriptionComponent } from './inscription/inscription.component';


@NgModule({
  declarations: [
    AppComponent,
    FaceStudentsComponent,
    PdfViewerComponent,
    InscriptionComponent,
  ],
  imports: [
    BrowserModule, PdfViewerModule, 
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    RouterModule.forRoot([
      { path: 'Notreprojet', component: PdfViewerComponent },
      { path: 'Accueil', component: FaceStudentsComponent },
      { path: 'inscription', component: InscriptionComponent },
      { path: 'connection' },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
