import { Injectable } from '@angular/core';
// Bring http module and headers package
import { Http, Headers } from '@angular/http';
// Bring map operation cause we are working with observables
import { map } from 'rxjs/operators';

/* Import the JWT token from angular2-jwt
import { tokenNotExpired } from 'angular2-jwt';*/

// Import the JWT service from @auth0/angular-jwt *Angular v6+ and RxJS v6+*
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  authToken: any;
  user: any;
  permisions: any;
  matriculaVerAlumno: any;
  matriculaVerProfesor: any;

  grupoAlumnos: Object = {
    nivel: String,
    grado: String,
    grupo: String,
    nombreMateria: String,
    profesor: String
  };

  constructor(
    private http: Http,
    public jwtHelper: JwtHelperService
  ) { }

  /************ ALUMNO ************/

  registerAlumno(alumno) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/alumnos/register', alumno, { headers: headers })
      .pipe(map(res => res.json()));
  }

  authenticateAlumno(alumno) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/alumnos/authenticate', alumno, { headers: headers })
      .pipe(map(res => res.json()));
  }

  alumnoLoggedIn() {
    if (localStorage.getItem('permisions') === '0')
      return !this.jwtHelper.isTokenExpired();
  }

  buscarAlumnoMatricula(matriculaAlumno) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/alumnos/getAlumno', matriculaAlumno, { headers: headers })
      .pipe(map(res => res.json()));
  }

  buscarAlumnosNombre(nombreAlumno) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/alumnos/getAlumnosNombre', nombreAlumno, { headers: headers })
      .pipe(map(res => res.json()));
  }

  buscarAlumnosGrupo(grupo) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/alumnos/getAlumnosClase', grupo, { headers: headers })
      .pipe(map(res => res.json()));
  }

  editarGrupo(grupo) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/alumnos/updateGrupo', grupo, { headers: headers })
      .pipe(map(res => res.json()));
  }

  buscarAlumnosGrupoRaw(grupo) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/alumnos/getAlumnosGrupo', grupo, { headers: headers })
      .pipe(map(res => res.json()));
  }

  eliminarAlumno(alumno) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/alumnos/delete', alumno, { headers: headers })
      .pipe(map(res => res.json()));
  }

  editarPasswordAlumno(alumno) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/alumnos/editPassword', alumno, { headers: headers })
      .pipe(map(res => res.json()));
  }

  getProfileAlumno() {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/alumnos/profile', { headers: headers })
      .pipe(map(res => res.json()));
  }

  agregarComentario(comentario) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/alumnos/addComentario', comentario, { headers: headers })
      .pipe(map(res => res.json()));
  }

  editarComentario(comentario) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/alumnos/editComentario', comentario, { headers: headers })
      .pipe(map(res => res.json()));
  }

  agregarMateria(materia) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/alumnos/addMateria', materia, { headers: headers })
      .pipe(map(res => res.json()));
  }

  cambiarCalificaciones(calificaciones) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/alumnos/updateCalificaciones', calificaciones, { headers: headers })
      .pipe(map(res => res.json()));
  }

  eliminarMateria(materia) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/alumnos/deleteMateria', materia, { headers: headers })
      .pipe(map(res => res.json()));
  }

  eliminarComentario(comentario) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/alumnos/deleteComentario', comentario, { headers: headers })
      .pipe(map(res => res.json()));
  }

  setMatriculaAlumno(matricula) {
    this.matriculaVerAlumno = matricula;
  }

  getMatriculaAlumno() {
    return this.matriculaVerAlumno;
  }

  setGrupo(grupo) {
    this.grupoAlumnos = grupo;
  }

  getGrupo() {
    return this.grupoAlumnos;
  }

  /************ PROFESOR ************/

  registerProfesor(profesor) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/profesores/register', profesor, { headers: headers })
      .pipe(map(res => res.json()));
  }

  authenticateProfesor(profesor) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/profesores/authenticate', profesor, { headers: headers })
      .pipe(map(res => res.json()));
  }

  profesorLoggedIn() {
    if (localStorage.getItem('permisions') === '1')
      return !this.jwtHelper.isTokenExpired();
  }

  editarPasswordProfesor(profesor) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/profesores/editPassword', profesor, { headers: headers })
      .pipe(map(res => res.json()));
  }

  buscarProfesorMatricula(profesor) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/profesores/getProfesor', profesor, { headers: headers })
      .pipe(map(res => res.json()));
  }

  buscarProfesoresNombre(profesor) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/profesores/getProfesoresNombre', profesor, { headers: headers })
      .pipe(map(res => res.json()));
  }

  getAllProfesores() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/profesores/getAllProfesores', { headers: headers })
      .pipe(map(res => res.json()));
  }

  getProfesoresGrupo(grupo) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/profesores/getProfesoresNombreByGroup', grupo, { headers: headers })
      .pipe(map(res => res.json()));
  }

  eliminarProfesor(profesor) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/profesores/delete', profesor, { headers: headers })
      .pipe(map(res => res.json()));
  }

  getProfileProfesor() {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/profesores/profile', { headers: headers })
      .pipe(map(res => res.json()));
  }

  addClaseProfesor(clase) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/profesores/addClase', clase, { headers: headers })
      .pipe(map(res => res.json()));
  }

  deleteClaseProfesor(clase) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/profesores/deleteClase', clase, { headers: headers })
      .pipe(map(res => res.json()));
  }

  setMatriculaVerProfesor(matricula) {
    this.matriculaVerProfesor = matricula;
  }

  getMatricualVerProfesor() {
    return this.matriculaVerProfesor;
  }

  /************ ADMIN ************/

  registerAdmin(admin) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/admin/register', admin, { headers: headers })
      .pipe(map(res => res.json()));
  }

  authenticateAdmin(admin) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/admin/authenticate', admin, { headers: headers })
      .pipe(map(res => res.json()));
  }

  editarPasswordAdmin(admin) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/admin/editPassword', admin, { headers: headers })
      .pipe(map(res => res.json()));
  }

  adminLoggedIn() {
    if (localStorage.getItem('permisions') === '2')
      return !this.jwtHelper.isTokenExpired();
  }

  getProfileAdmin() {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/admin/profile', { headers: headers })
      .pipe(map(res => res.json()));
  }

  agregarAdminComentario(comentario) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/admin/addComentario', comentario, { headers: headers })
      .pipe(map(res => res.json()));
  }

  editarAdminComentario(comentario) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/admin/editComentario', comentario, { headers: headers })
      .pipe(map(res => res.json()));
  }

  eliminarAdminComentario(comentario) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/admin/deleteComentario', comentario, { headers: headers })
      .pipe(map(res => res.json()));
  }

  getAdmins() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/admin/getAdmins', { headers: headers })
      .pipe(map(res => res.json()));
  }

  deleteAdmin(admin) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/admin/delete', admin, { headers: headers })
      .pipe(map(res => res.json()));
  }

  /************ GENERAL ************/


  storeUserData(token, user, permisions) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('permisions', permisions);
    this.authToken = token;
    this.user = user;
    this.permisions = permisions;
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn() {
    return !this.jwtHelper.isTokenExpired();
  }

  logout() {
    this.authToken = null;
    this.user = null;
    this.permisions = null;
    localStorage.clear();
  }
}
