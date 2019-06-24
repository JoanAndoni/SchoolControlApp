import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  escuela: any;
  editComunicado: boolean = false;
  comunicadoEdit: any;
  fecha: any;
  texto: String;
  titulo: String;
  comunicado: String;

  constructor(
    private authService: AuthService,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
    this.authService.getEscuela().subscribe(data => {
      if (data.success) {
        this.escuela = data.escuela;
      } else {
        this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
      }
    });

  }

  agregarComunicado() {
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

    const comunicado = {
      titulo: this.titulo,
      fecha: this.fecha,
      texto: this.comunicado
    }

    this.authService.agregarComunicado(comunicado).subscribe(data => {
      if (data.success) {
        this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
        this.titulo = null;
        this.comunicado = null;
      } else {
        this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
      }
      window.scroll(0, 0);
      this.ngOnInit();
    });
  }

  editarComunicado(titulo, texto) {
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

    this.editComunicado = true;
    this.comunicadoEdit = {
      titulo: titulo,
      fecha: this.fecha,
      texto: texto
    }
  }

  eliminarComunicado(titulo) {
    const comunicado = {
      titulo: titulo
    }
    this.authService.eliminarComunicado(comunicado).subscribe(data => {
      if (data.success) {
        this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
      } else {
        this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
      }
      window.scroll(0, 0);
      this.ngOnInit();
    });
  }

  cancelComunicadoEdit() {
    this.comunicadoEdit = null;
    this.editComunicado = false;
  }

  nowEditComunicado() {
    const comunicado = {
      fecha: this.comunicadoEdit.fecha,
      titulo: this.comunicadoEdit.titulo,
      texto: this.comunicadoEdit.texto
    }
    this.authService.editarComunicado(comunicado).subscribe(data => {
      if (data.success) {
        this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
      } else {
        this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
      }
      this.ngOnInit();
      window.scroll(0, 0);
      this.comunicadoEdit = null;
    });
    this.editComunicado = false;
  }

}
