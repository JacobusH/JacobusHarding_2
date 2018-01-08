// Modules
import { AngularFireModule } from 'angularfire2';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MLXTrackerComponent } from './components/mlx-tracker/mlx-tracker.component';

// Services
import { MLXService } from 'app/services/_index';
import { FormUploadComponent } from './components/mlx-tracker/form-upload/form-upload.component';
import { AngularFirestoreModule } from 'angularfire2/firestore';

// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyABNERwuAKg143b79gQWFlZaNR80P_-JbM",
  authDomain: "jacobusharding-4b3f2.firebaseapp.com",
  databaseURL: "https://jacobusharding-4b3f2.firebaseio.com",
  projectId: "jacobusharding-4b3f2",
  storageBucket: "jacobusharding-4b3f2.appspot.com",
  messagingSenderId: "425533756503"
};


const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'admin', canActivate: [AdminGuard], component: AdministrationComponent, children: [
  //   { path: "messages", component: AdminContactMessagesComponent},
  //   { path: "chat", component: LiveChatManagerComponent},
  //   { path: "faq", component: AdminFaqComponent},
  //   { path: "media", component: AdminMediaComponent},
  //   { path: "resources", component: AdminResourcesComponent},
  //   { path: "signups", component: AdminSignUpsComponent},
  //   { path: "testimonials", component: AdminTestimonialsComponent},
  //   { path: "teachers", component: AdminTeachersComponent},
  //   { path: "users", component: AdminUsersComponent},
  // ] },
  // { path: 'about', component: AboutComponent },
  // { path: 'announcements', component: AnnouncementsComponent },
  // { path: 'contact', component: ContactComponent },
  // { path: 'faq', component: FaqComponent },
  // { path: 'gallery', component: GalleryComponent },
  // { path: 'gallery/image/:id', component: ImageGalleryDetailComponent },
  { path: 'home', component: HomeComponent },
  // { path: 'home/:id', component: HomeComponent },
  // { path: 'learntoplay', component: LearntoplayComponent },
  // { path: 'learntoplay/:id', component: LearntoplayComponent },
  // { path: 'playground', component: PlaygroundComponent },
  // { path: 'login', component: LoginComponent },
  // { path: 'profile', component: ProfileComponent },
  // { path: 'resources', component: ResourcesComponent },
  // { path: 'register', component: RegisterComponent },
  // { path: 'teachers', component: TeachersComponent },
  // { path: 'teachers/:id', component: TeacherDetailComponent },
  //   // children: [
  //   //   { path: '', redirectTo: 'overview', pathMatch: 'full' },
  //     // { path: 'overview', component: Overview },
  //     // { path: 'specs', component: Specs }
  //   // ]
  // },
  // { path: 'testimonials', component: TestimonialsComponent },
  // { path: 'testing/youtube', component: YoutubeComponent },
  // { path: 'testing/upload', component: UploadComponent },
  // { path: 'testing/tree', component: TreeComponent },
  // { path: 'contact/thanks', component: ThanksComponent },
  // { path: '**', component: PageNotFoundComponent }
  
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MLXTrackerComponent,
    FormUploadComponent
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [
    MLXService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
