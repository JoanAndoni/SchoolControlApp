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

  constructor(
    private http: Http,
    public jwtHelper: JwtHelperService
  ) { }

  registerAlumno(alumno) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/alumnos/register', alumno, { headers: headers })
      .pipe(map(res => res.json()));
  }

  registerProfesor(profesor) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/profesores/register', profesor, { headers: headers })
      .pipe(map(res => res.json()));
  }

  authenticateAlumno(alumno) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/alumnos/authenticate', alumno, { headers: headers })
      .pipe(map(res => res.json()));
  }

  authenticateProfesor(profesor) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/profesores/authenticate', profesor, { headers: headers })
      .pipe(map(res => res.json()));
  }

  authenticateAdmin(admin) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/admin/authenticate', admin, { headers: headers })
      .pipe(map(res => res.json()));
  }

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

  adminLoggedIn() {
    if (localStorage.getItem('permisions') === '2')
      return !this.jwtHelper.isTokenExpired();
  }

  profesorLoggedIn() {
    if (localStorage.getItem('permisions') === '1')
      return !this.jwtHelper.isTokenExpired();
  }

  alumnoLoggedIn() {
    if (localStorage.getItem('permisions') === '0')
      return !this.jwtHelper.isTokenExpired();
  }

  logout() {
    this.authToken = null;
    this.user = null;
    this.permisions = null;
    localStorage.clear();
  }
}
