export class Profesor {
  public materias: string;

  constructor(
    public matricula: string,
    public nombre: string,
    public paterno: string,
    public materno: string,
    public posicion: string,
    public telefono: string,
    public correo: string,
    public contrasena: string
  ) { }

}
