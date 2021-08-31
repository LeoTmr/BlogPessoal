import { Tema } from "./Tema"
import { Usuario } from "./Usuario"

export class Postagens {
    public id: number 
    public titulo: number
    public texto: string
    public data: Date
    public usuario: Usuario
    public tema: Tema
}