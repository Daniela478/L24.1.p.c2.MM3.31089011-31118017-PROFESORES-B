import Cl_profesor from "./Cl_profesor.js";
export default class Cl_contratado extends Cl_profesor {
    constructor (nombre, bono, horas) {
        super(nombre, bono)
        this.horas = horas;
}
montoHoras(){
    return this.horas * 10;
}
ingresoTotal() {
    return this.bono + this.montoHoras();

 }
}