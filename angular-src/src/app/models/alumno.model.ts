export class Alumno {
  constructor(
    public matricula: string,
    public curp: string,
    public nombre: string,
    public paterno: string,
    public materno: string,
    public nivel: string,
    public grado: number,
    public grupo: string,
    public fechaNacimiento: string,
    public contrasena: string
  ) { }

}
