import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';

// Components alumno
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { AgregarAlumnoComponent } from './components/alumnos/agregar-alumno/agregar-alumno.component';
import { ListarAlumnosComponent } from './components/alumnos/listar-alumnos/listar-alumnos.component';
import { AlumnoComponent } from './components/alumnos/listar-alumnos/alumno/alumno.component';

// Components profesor
import { ProfesoresComponent } from './components/profesores/profesores.component';
import { AgregarProfesorComponent } from './components/profesores/agregar-profesor/agregar-profesor.component';
import { ListarProfesoresComponent } from './components/profesores/listar-profesores/listar-profesores.component';
import { ProfesorComponent } from './components/profesores/listar-profesores/profesor/profesor.component';

// Components admins
import { AdminsComponent } from './components/admins/admins.component';

// Services
import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';

// Libraries
import { FlashMessagesModule } from 'angular2-flash-messages';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthGuard } from './guards/auth.guard';

// Array for the routing
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'alumnos', component: AlumnosComponent, canActivate: [AuthGuard] },
  // { path: 'grupos', component: RegisterComponent },
  { path: 'profesores', component: ProfesoresComponent, canActivate: [AuthGuard] },
  // Protect the following routes if youre logged in
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    AlumnosComponent,
    AgregarAlumnoComponent,
    ListarAlumnosComponent,
    AlumnoComponent,
    ProfesoresComponent,
    AgregarProfesorComponent,
    ListarProfesoresComponent,
    ProfesorComponent,
    AdminsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot(),
    // JWT set the JWT module with the local storage token
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('id_token');
        }
      }
    })
  ],
  providers: [
    ValidateService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
