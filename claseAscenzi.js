/* Esta página vende el servicio de alquiler de barriles de cerveza.
El precio indicado en las variables let, es el precio de lista, a este se le suma el IVA y se le resta el descuento.  */


/* Me gustaria que mediante un prompt yo pueda ofrecerle a los clientes,
 que tipo de cerveza quiere y en que medida de barril para devolverle con el alert el precio final con IVA y descuento.
*/

const suma = (a,b) => a+b
const resta = (a,b) => a-b
const iva = x => x * 0.21
let precioCervezaHoney = 400
let precioCervezaStout = 450
let precioCervezaIpa = 450
let precioCervezaApa = 480
let precioCervezaGolden = 400
let descuento = 60

let nuevoPrecioCervezaHoney = resta (suma (precioCervezaHoney, iva(precioCervezaHoney)), descuento)

console.log (nuevoPrecioCervezaHoney);

let nuevoPrecioCervezaStout = resta (suma (precioCervezaStout, iva(precioCervezaStout)), descuento)

console.log (nuevoPrecioCervezaStout);

let nuevoPrecioCervezaIpa = resta (suma (precioCervezaIpa, iva(precioCervezaIpa)), descuento)

console.log (nuevoPrecioCervezaIpa);

let nuevoPrecioCervezaApa = resta (suma (precioCervezaApa, iva(precioCervezaApa)), descuento)

console.log (nuevoPrecioCervezaApa);

let nuevoPrecioCervezaGolden = resta (suma (precioCervezaGolden, iva(precioCervezaGolden)), descuento)

console.log (nuevoPrecioCervezaGolden);
