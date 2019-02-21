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

  buscarAlumnoMatricula(alumno) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/alumnos/getAlumno', alumno, { headers: headers })
      .pipe(map(res => res.json()));
  }

  buscarAlumnosNombre(alumno) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/alumnos/getAlumnosNombre', alumno, { headers: headers })
      .pipe(map(res => res.json()));
  }

  eliminarAlumno(alumno) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/alumnos/delete', alumno, { headers: headers })
      .pipe(map(res => res.json()));
  }

  setMatriculaVerAlumno(matricula) {
    this.matriculaVerAlumno = matricula;
  }

  getMatricualVerAlumno() {
    return this.matriculaVerAlumno;
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

  eliminarProfesor(profesor) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/profesores/delete', profesor, { headers: headers })
      .pipe(map(res => res.json()));
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

  adminLoggedIn() {
    if (localStorage.getItem('permisions') === '2')
      return !this.jwtHelper.isTokenExpired();
  }

  /************ GENERAL ************/

  getProfile() {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/users/profile', { headers: headers })
      .pipe(map(res => res.json()));
  }

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
