import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
import { VerAlumnoComponent } from './components/alumnos/ver-alumno/ver-alumno.component';
import { EditarAlumnoComponent } from './components/alumnos/editar-alumno/editar-alumno.component';

// Components profesor
import { ProfesoresComponent } from './components/profesores/profesores.component';
import { AgregarProfesorComponent } from './components/profesores/agregar-profesor/agregar-profesor.component';
import { ListarProfesoresComponent } from './components/profesores/listar-profesores/listar-profesores.component';
import { ClasesComponent } from './components/profesores/clases/clases.component';

// Components admins
import { AdminsComponent } from './components/admins/admins.component';
import { ListarAdminsComponent } from './components/admins/listar-admins/listar-admins.component';
import { AgregarAdminComponent } from './components/admins/agregar-admin/agregar-admin.component';
import { ListComentariosComponent } from './components/admins/list-comentarios/list-comentarios.component';

// Grupos
import { VerAlumnosGrupoComponent } from './components/grupos/ver-alumnos-grupo/ver-alumnos-grupo.component';

// Services
import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';

// Libraries
import { FlashMessagesModule } from 'angular2-flash-messages';
import { JwtModule } from '@auth0/angular-jwt';

// Guards
import { AuthGuard } from './guards/auth.guard';
import { NotAuthGuard } from './guards/notAuth.guard';
import { AlumnoGuard } from './guards/alumno.guard';
import { AlumnoAdminGuard } from './guards/alumnoAdmin.guard';
import { ProfesorGuard } from './guards/profesor.guard';
import { ProfesorAdminGuard } from './guards/profesorAdmin.guard';
import { AdminGuard } from './guards/admin.guard';

// Array for the routing
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent, canActivate: [NotAuthGuard] },
  { path: 'alumnos', component: AlumnosComponent, canActivate: [AdminGuard] },
  { path: 'verAlumno', component: VerAlumnoComponent, canActivate: [AlumnoAdminGuard] },
  { path: 'editarAlumno', component: EditarAlumnoComponent, canActivate: [ProfesorGuard] },
  { path: 'profesores', component: ProfesoresComponent, canActivate: [AdminGuard] },
  { path: 'clases', component: ClasesComponent, canActivate: [ProfesorAdminGuard] },
  { path: 'grupo', component: VerAlumnosGrupoComponent, canActivate: [ProfesorAdminGuard] },
  { path: 'admins', component: AdminsComponent, canActivate: [AdminGuard] },
  { path: 'comentarios', component: ListComentariosComponent, canActivate: [AdminGuard] },
  // Protect the following routes if youre logged in
  { path: 'dashboard', component: DashboardComponent, canActivate: [AdminGuard] },
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
    ProfesoresComponent,
    AgregarProfesorComponent,
    ListarProfesoresComponent,
    AdminsComponent,
    AgregarAdminComponent,
    VerAlumnoComponent,
    ListarAdminsComponent,
    ClasesComponent,
    VerAlumnosGrupoComponent,
    EditarAlumnoComponent,
    ListComentariosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot(),
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
    AuthGuard,
    NotAuthGuard,
    AlumnoGuard,
    AlumnoAdminGuard,
    ProfesorGuard,
    ProfesorAdminGuard,
    AdminGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
