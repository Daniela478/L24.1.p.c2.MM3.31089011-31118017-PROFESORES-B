/* PROFESORES-B
En la Universidad se le paga a cada profesores un bono, sin embargo si es personal fijo tiene
un sueldo y si es contratado tiene cantidad de horas, donde cada una se paga a $10. Considere
que a todos los profesores se les pide su nombre, y las clases Cl_fijo y Cl_contratado heredan
de la clase Cl_profesor.
Haga un programa que haga uso de la misma clase Cl_profesor del ejercicio anterior, lea los
datos de un profesor contratado y reporte su ingreso total. */

import Cl_contratado from "./Cl_contratado.js";

let cont1 = new Cl_contratado ("Rafael", 30, 15);
let cont2 = new Cl_contratado ("Felicia", 30, 20);


let salida = document.getElementById("salida");

salida.innerHTML= `
Nombre del profesor contratado: ${cont1.nombre}
<br>Monto del bono: ${cont1.bono}$
<br>Cantidad de horas: ${cont1.horas}
<br>Ingreso total del profesor: ${cont1.ingresoTotal()}$
<br><br>
<br>Nombre del profesor contratado: ${cont2.nombre}
<br>Monto del bono:${cont2.bono}$
<br>Monto del horas:${cont2.horas}
<br>Ingreso total del profesor ${cont2.ingresoTotal()}`+"$";