import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../services/auth.service';

// Import of the module for the flash messages
import { FlashMessagesService } from 'angular2-flash-messages';

import { Router } from '@angular/router';

@Component({
  selector: 'app-list-comentarios',
  templateUrl: './list-comentarios.component.html',
  styleUrls: ['./list-comentarios.component.css']
})
export class ListComentariosComponent implements OnInit {
  user: Object;
  fecha: any;
  texto: String;
  editComentario: boolean;
  comentarioEdit: any;

  constructor(
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.editComentario = false;
    this.authService.getProfileAdmin().subscribe(profile => {
      this.user = profile.admin;
    },
      err => {
        console.log(err);
        return false;
      });
  }

  eliminarComentario(matricula, titulo) {
    const comentario = {
      matricula: matricula,
      titulo: titulo
    }
    this.authService.eliminarAdminComentario(comentario).subscribe(data => {
      if (data.success) {
        this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
      } else {
        this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
      }
      this.ngOnInit();
    });
  }

  editarComentario(matricula, profesor, materia, titulo, texto) {
    this.editComentario = true;
    this.comentarioEdit = {
      matricula: matricula,
      titulo: titulo,
      texto: texto,
      profesor: profesor,
      materia: materia
    }
  }

  cancelarPost() {
    this.editComentario = false;
  }

  editarPost() {
    const comentario = {
      matricula: this.comentarioEdit.matricula,
      titulo: this.comentarioEdit.titulo,
      texto: this.comentarioEdit.texto
    }
    this.authService.editarAdminComentario(comentario).subscribe(data => {
      if (data.success) {
        this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
      } else {
        this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
      }
      this.ngOnInit();
      this.comentarioEdit = null;
    });
    this.editComentario = false;
  }

  autorizarComentario(matricula, profesor, nombreMateria, titulo, texto) {
    var today: any = new Date();
    var dd: any = today.getDate();
    var mm: any = today.getMonth() + 1;
    var yyyy: any = today.getFullYear();
    if (dd < 10)
      dd = '0' + dd;
    if (mm < 10)
      mm = '0' + mm;
    today = mm + '/' + dd + '/' + yyyy;
    this.fecha = today;

    const comentario = {
      matricula: matricula,
      profesor: profesor,
      materia: nombreMateria,
      fecha: this.fecha,
      titulo: titulo,
      texto: texto
    }

    this.authService.agregarComentario(comentario).subscribe(data => {
      if (data.success) {
        this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
        const comentarioEliminar = {
          matricula: matricula,
          titulo: titulo
        }
        this.authService.eliminarAdminComentario(comentarioEliminar).subscribe(data => {
          if (data.success) {
            // this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
          } else {
            this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
          }
          this.ngOnInit();
        });
      } else {
        this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
      }
      this.ngOnInit();
    });
  }
}
