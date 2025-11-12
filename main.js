const flores = [

    {
        id : 1,
        nombre: "rosa",
        precio: 1200
    },

    { 
        id: 2,
        nombre: "tulipan",
        precio: 1500
    },

    {
        id: 3,
        nombre: "fresia",
        precio: 800
    },

    {   
        id:4,
        nombre: "margarita",
        precio: 1100
    },

    {   
        id: 5,
        nombre: "clavel",
        precio: 1000
    }
];

const mediadocena = (num1) => num1 * 6;
const unadocena = (num1) => num1 * 12;
const quitar = (num1, num2) => num1 - num2;
 
let total = 0;
let subtotal= 0;
let pedidos = []; 

continuar = true;
let saludo = alert ("Bienvenido/a a Flores del Mar. Donde decir te amo nunca fue tan facil")
do {
    let eleccion = prompt ("Por favor, seleccione la opcion deseada: \n1)Media docena \n2)Una Docena \n3)Quitar un producto \n4)Ver total y salir ")

    switch (eleccion) {

        case "1":

        let media = prompt ("Por favor, seleccione las flores de su ramo: \n1)Rosas $1200 \n2)Tulipanes $1500 \n3)Fresias $800 \n4)Margaritas $1100 \n5)Claveles $1000");
        switch (media) {
                case "1":
                subtotal = mediadocena (flores[0].precio)
                total+= subtotal;
                console.log ("El precio de su ramo de media docena de Rosas es de $"+subtotal)
                break;

                case "2":
                subtotal = mediadocena (flores[1].precio)
                total+= subtotal;
                console.log ("El precio de su ramo de media docena de Tulipanes es de $"+subtotal)
                break;

                case "3":
                subtotal = mediadocena (flores[2].precio)
                total+= subtotal;
                console.log ("El precio de su ramo de media docena de Fresias es de $"+subtotal)
                break;

                case "4":
                subtotal = mediadocena (flores[3].precio)
                total+= subtotal;
                console.log ("El precio de su ramo de media docena de Margaritas es de $"+subtotal)
                break;

                case "5":
                subtotal = mediadocena (flores[4].precio)
                total+= subtotal;
                console.log ("El precio de su ramo de media docena de Claveles es de $"+subtotal)
                break;

                default:
                alert ("No es una opcion valida")
                break;
                }
                break;


        case "2":

        let docena = prompt ("Por favor, seleccione las flores de su ramo: \n1)Rosas $1200 \n2)Tulipanes $1500 \n3)Fresias $800 \n4)Margaritas $1100 \n5)Claveles $1000");
        switch (docena) {
                case "1":
                subtotal = unadocena (flores[0].precio)
                total+= subtotal;
                console.log ("El precio de su ramo de una docena de Rosas es de $"+subtotal)
                break;

                case "2":
                subtotal = unadocena (flores[1].precio)
                total+= subtotal;
                console.log ("El precio de su ramo de una docena de Tulipanes es de $"+subtotal)
                break;

                case "3":
                subtotal = unadocena (flores[2].precio)
                total+= subtotal;
                console.log ("El precio de su ramo de una docena de Fresias es de $"+subtotal)
                break;

                case "4":
                subtotal = unadocena (flores[3].precio)
                total+= subtotal;
                console.log ("El precio de su ramo de una docena de Margaritas es de $"+subtotal)
                break;

                case "5":
                subtotal = unadocena (flores[4].precio)
                total+= subtotal;
                console.log ("El precio de su ramo de una docena de Claveles es de $"+subtotal)
                break;

                default:
                alert ("No es una opcion valida")
                break;
        }
        break;

        case "3":
            
            break;

        case "4":
            console.log("Muchas gracias por habernos visitado. Su total fue de $" + total);
            continuar = false;
            break;

        default:
            alert ("No es una opcion valida!")
    }

}
while (continuar);


