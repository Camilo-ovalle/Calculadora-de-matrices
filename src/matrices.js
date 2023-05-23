//creamos las constantes de los contenedosres de las matrices y las operaciones
const contenedor1 = document.getElementById('container1')
const contenedor2 = document.getElementById('container2')
const suma = document.getElementById('suma')
const resta = document.getElementById('resta')
const multiplicacion = document.getElementById('multiplicacion')
const determinante = document.getElementById('determinante')
const inversa = document.getElementById('inversa')
const body = document.getElementById('body')

//solicitud de las dimenciones de la matriz
let matriz_2D = [[], []]
let matriz_3D = [[], [], []]
let matriz_2D_2 = [[], []]
let matriz_3D_2 = [[], [], []]

let dimension;

const Asignar_dimension =()=>{
    dimension =  parseInt(prompt("Ingrese la dimension de su matriz"))
}

//funcion para crear la matriz
const crear_matriz_1 = () =>{


    switch(dimension){
        case 2:

            matriz_2D = [[], []]

            
            
            //asignacion de estilos al contnedor
            contenedor1.style.gridTemplateColumns = 'repeat(2, 120px)'
            contenedor1.style.gridAutoRows = 'minmax(120px, 120px)'

            //creacion y asignacion de las casillas

            let celda1_2 = document.createElement('div')
            let celda2_2 = document.createElement('div')
            let celda3_2 = document.createElement('div')  
            let celda4_2 = document.createElement('div')

            celda1_2.id = 'cell1'
            celda2_2.id = 'cell2'
            celda3_2.id = 'cell3'
            celda4_2.id = 'cell4'

            contenedor1.appendChild(celda1_2)
            contenedor1.appendChild(celda2_2)
            contenedor1.appendChild(celda3_2)
            contenedor1.appendChild(celda4_2)

            matriz_2D[0].push(parseInt(prompt("ingrese el valor A1")))
            matriz_2D[0].push(parseInt(prompt("ingrese el valor A2")))
            matriz_2D[1].push(parseInt(prompt("ingrese el valor B1")))
            matriz_2D[1].push(parseInt(prompt("ingrese el valor B2")))

            let cell1_2D = document.getElementById('cell1').innerHTML = matriz_2D[0][0]
            let cell2_2D = document.getElementById('cell2').innerHTML = matriz_2D[0][1]
            let cell4_2D = document.getElementById('cell3').innerHTML = matriz_2D[1][0]
            let cell5_2D = document.getElementById('cell4').innerHTML = matriz_2D[1][1]            
            
            break
        case 3:
            
            matriz_3D = [[], [], []]

            //asignacion de estilos al contnedor
            contenedor1.style.gridTemplateColumns = 'repeat(3, 120px)'
            contenedor1.style.gridAutoRows = 'minmax(120px, 120px)'

            //creacion y asignacion de las casillas

            let celda1_3 = document.createElement('div')
            let celda2_3 = document.createElement('div')
            let celda3_3 = document.createElement('div')  
            let celda4_3 = document.createElement('div')
            let celda5_3 = document.createElement('div')
            let celda6_3 = document.createElement('div')
            let celda7_3 = document.createElement('div')
            let celda8_3 = document.createElement('div')
            let celda9_3 = document.createElement('div')

            celda1_3.id = 'cell1'
            celda2_3.id = 'cell2'
            celda3_3.id = 'cell3'
            celda4_3.id = 'cell4'
            celda5_3.id = 'cell5'
            celda6_3.id = 'cell6'
            celda7_3.id = 'cell7'
            celda8_3.id = 'cell8'
            celda9_3.id = 'cell9'

            contenedor1.appendChild(celda1_3)
            contenedor1.appendChild(celda2_3)
            contenedor1.appendChild(celda3_3)
            contenedor1.appendChild(celda4_3)
            contenedor1.appendChild(celda5_3)
            contenedor1.appendChild(celda6_3)
            contenedor1.appendChild(celda7_3)
            contenedor1.appendChild(celda8_3)
            contenedor1.appendChild(celda9_3)

            matriz_3D[0].push(parseInt(prompt("ingrese el valor A1")))
            matriz_3D[0].push(parseInt(prompt("ingrese el valor A2")))
            matriz_3D[0].push(parseInt(prompt("ingrese el valor A3")))
            matriz_3D[1].push(parseInt(prompt("ingrese el valor B1")))
            matriz_3D[1].push(parseInt(prompt("ingrese el valor B2")))
            matriz_3D[1].push(parseInt(prompt("ingrese el valor B3")))
            matriz_3D[2].push(parseInt(prompt("ingrese el valor C1")))
            matriz_3D[2].push(parseInt(prompt("ingrese el valor C2")))
            matriz_3D[2].push(parseInt(prompt("ingrese el valor C3")))

            let cell1_3D = document.getElementById('cell1').innerHTML = matriz_3D[0][0]
            let cell2_3D = document.getElementById('cell2').innerHTML = matriz_3D[0][1]
            let cell3_3D = document.getElementById('cell3').innerHTML = matriz_3D[0][2]
            let cell4_3D = document.getElementById('cell4').innerHTML = matriz_3D[1][0]
            let cell5_3D = document.getElementById('cell5').innerHTML = matriz_3D[1][1]
            let cell6_3D = document.getElementById('cell6').innerHTML = matriz_3D[1][2]
            let cell7_3D = document.getElementById('cell7').innerHTML = matriz_3D[2][0]
            let cell8_3D = document.getElementById('cell8').innerHTML = matriz_3D[2][1]
            let cell9_3D = document.getElementById('cell9').innerHTML = matriz_3D[2][2]
            
            break
        default:
            alert("El valor ingresado no es aceptado")
            break
    
        }
}

//funcion para crear la segunda matriz

const crear_matriz_2 = () =>{

    switch(dimension){
        case 2:

            matriz_2D_2 = [[], []]

            //asignacion de estilos al contnedor
            contenedor2.style.gridTemplateColumns = 'repeat(2, 120px)'
            contenedor2.style.gridAutoRows = 'minmax(120px, 120px)'

            //creacion y asignacion de las casillas

            let celda1 = document.createElement('div')
            let celda2 = document.createElement('div')
            let celda3 = document.createElement('div')  
            let celda4 = document.createElement('div')

            celda1.id = 'cell11'
            celda2.id = 'cell12'
            celda3.id = 'cell13'
            celda4.id = 'cell14'

            contenedor2.appendChild(celda1)
            contenedor2.appendChild(celda2)
            contenedor2.appendChild(celda3)
            contenedor2.appendChild(celda4)

            matriz_2D_2[0].push(parseInt(prompt("ingrese el valor A1")))
            matriz_2D_2[0].push(parseInt(prompt("ingrese el valor A2")))
            matriz_2D_2[1].push(parseInt(prompt("ingrese el valor B1")))
            matriz_2D_2[1].push(parseInt(prompt("ingrese el valor B2")))

            let cell1_2D = document.getElementById('cell11').innerHTML = matriz_2D_2[0][0]
            let cell2_2D = document.getElementById('cell12').innerHTML = matriz_2D_2[0][1]
            let cell4_2D = document.getElementById('cell13').innerHTML = matriz_2D_2[1][0]
            let cell5_2D = document.getElementById('cell14').innerHTML = matriz_2D_2[1][1]            
            
            break
        case 3:
            
            matriz_3D_2 = [[], [], []]

            //asignacion de estilos al contnedor
            contenedor2.style.gridTemplateColumns = 'repeat(3, 120px)'
            contenedor2.style.gridAutoRows = 'minmax(120px, 120px)'

            //creacion y asignacion de las casillas

            let celda1_3 = document.createElement('div')
            let celda2_3 = document.createElement('div')
            let celda3_3 = document.createElement('div')  
            let celda4_3 = document.createElement('div')
            let celda5_3 = document.createElement('div')
            let celda6_3 = document.createElement('div')
            let celda7_3 = document.createElement('div')
            let celda8_3 = document.createElement('div')
            let celda9_3 = document.createElement('div')

            celda1_3.id = 'cell11'
            celda2_3.id = 'cell12'
            celda3_3.id = 'cell13'
            celda4_3.id = 'cell14'
            celda5_3.id = 'cell15'
            celda6_3.id = 'cell16'
            celda7_3.id = 'cell17'
            celda8_3.id = 'cell18'
            celda9_3.id = 'cell19'

            contenedor2.appendChild(celda1_3)
            contenedor2.appendChild(celda2_3)
            contenedor2.appendChild(celda3_3)
            contenedor2.appendChild(celda4_3)
            contenedor2.appendChild(celda5_3)
            contenedor2.appendChild(celda6_3)
            contenedor2.appendChild(celda7_3)
            contenedor2.appendChild(celda8_3)
            contenedor2.appendChild(celda9_3)

            matriz_3D_2[0].push(parseInt(prompt("ingrese el valor A1")))
            matriz_3D_2[0].push(parseInt(prompt("ingrese el valor A2")))
            matriz_3D_2[0].push(parseInt(prompt("ingrese el valor A3")))
            matriz_3D_2[1].push(parseInt(prompt("ingrese el valor B1")))
            matriz_3D_2[1].push(parseInt(prompt("ingrese el valor B2")))
            matriz_3D_2[1].push(parseInt(prompt("ingrese el valor B3")))
            matriz_3D_2[2].push(parseInt(prompt("ingrese el valor C1")))
            matriz_3D_2[2].push(parseInt(prompt("ingrese el valor C2")))
            matriz_3D_2[2].push(parseInt(prompt("ingrese el valor C3")))

            let cell1_3D = document.getElementById('cell11').innerHTML = matriz_3D_2[0][0]
            let cell2_3D = document.getElementById('cell12').innerHTML = matriz_3D_2[0][1]
            let cell3_3D = document.getElementById('cell13').innerHTML = matriz_3D_2[0][2]
            let cell4_3D = document.getElementById('cell14').innerHTML = matriz_3D_2[1][0]
            let cell5_3D = document.getElementById('cell15').innerHTML = matriz_3D_2[1][1]
            let cell6_3D = document.getElementById('cell16').innerHTML = matriz_3D_2[1][2]
            let cell7_3D = document.getElementById('cell17').innerHTML = matriz_3D_2[2][0]
            let cell8_3D = document.getElementById('cell18').innerHTML = matriz_3D_2[2][1]
            let cell9_3D = document.getElementById('cell19').innerHTML = matriz_3D_2[2][2]
            
            break
        default:
            alert("El valor ingresado no es aceptado")
            break
    
        }
}

//funcion para borrar la mariz

const borrar_matriz = () =>{

    body.style.height = '100vh'

    let separador = document.getElementById('separador1')
    separador.style.padding = "20px"
    separador.innerHTML = ""
    separador.style.display = 'flex'
    separador.style.justifyContent = 'center'
    separador.style.alignItems = 'center'
    separador.style.fontSize = 'xx-large'

    let separador2 = document.getElementById('separador2')
    separador2.style.padding = "20px"
    separador2.innerHTML = ""
    separador2.style.display = 'flex'
    separador2.style.justifyContent = 'center'
    separador2.style.alignItems = 'center'
    separador2.style.fontSize = 'xx-large'

    matriz_2D = [[], []]
    matriz_3D = [[], [], []]
    matriz_2D_2 = [[], []]
    matriz_3D_2 = [[], [], []]

    let cell1_3D = document.getElementById('cell1')
    let cell2_3D = document.getElementById('cell2')
    let cell3_3D = document.getElementById('cell3')
    let cell4_3D = document.getElementById('cell4')
    let cell5_3D = document.getElementById('cell5')
    let cell6_3D = document.getElementById('cell6')
    let cell7_3D = document.getElementById('cell7')
    let cell8_3D = document.getElementById('cell8')
    let cell9_3D = document.getElementById('cell9')
    let cell11_3D = document.getElementById('cell11')
    let cell12_3D = document.getElementById('cell12')
    let cell13_3D = document.getElementById('cell13')
    let cell14_3D = document.getElementById('cell14')
    let cell15_3D = document.getElementById('cell15')
    let cell16_3D = document.getElementById('cell16')
    let cell17_3D = document.getElementById('cell17')
    let cell18_3D = document.getElementById('cell18')
    let cell19_3D = document.getElementById('cell19')

    let suma1 = document.getElementById('suma1')
    let suma2 = document.getElementById('suma2')
    let suma3 = document.getElementById('suma3')
    let suma4 = document.getElementById('suma4')
    let suma5 = document.getElementById('suma5')
    let suma6 = document.getElementById('suma6')
    let suma7 = document.getElementById('suma7')
    let suma8 = document.getElementById('suma8')
    let suma9 = document.getElementById('suma9')
    
    let resta1 = document.getElementById('resta1')
    let resta2 = document.getElementById('resta2')
    let resta3 = document.getElementById('resta3')
    let resta4 = document.getElementById('resta4')
    let resta5 = document.getElementById('resta5')
    let resta6 = document.getElementById('resta6')
    let resta7 = document.getElementById('resta7')
    let resta8 = document.getElementById('resta8')
    let resta9 = document.getElementById('resta9')
    
    let multi1 = document.getElementById('multi1')
    let multi2 = document.getElementById('multi2') 
    let multi3 = document.getElementById('multi3')
    let multi4 = document.getElementById('multi4')
    let multi5 = document.getElementById('multi5')
    let multi6 = document.getElementById('multi6')
    let multi7 = document.getElementById('multi7')
    let multi8 = document.getElementById('multi8')
    let multi9 = document.getElementById('multi9')

    let det = document.getElementById('determinante1')
    let det2 = document.getElementById('determinante2')

    switch(dimension){
        case 2:
            contenedor1.removeChild(cell1_3D)
            contenedor1.removeChild(cell2_3D)
            contenedor1.removeChild(cell3_3D)
            contenedor1.removeChild(cell4_3D)
            contenedor2.removeChild(cell11_3D)
            contenedor2.removeChild(cell12_3D)
            contenedor2.removeChild(cell13_3D)
            contenedor2.removeChild(cell14_3D)
            
            suma.removeChild(suma1)
            suma.removeChild(suma2)
            suma.removeChild(suma3)
            suma.removeChild(suma4)

            resta.removeChild(resta1)
            resta.removeChild(resta2)
            resta.removeChild(resta3)
            resta.removeChild(resta4)

            multiplicacion.removeChild(multi1)
            multiplicacion.removeChild(multi2)
            multiplicacion.removeChild(multi3)
            multiplicacion.removeChild(multi4)

            determinante.removeChild(det)
            determinante.removeChild(det2)


        break
        case 3:
            contenedor1.removeChild(cell1_3D)
            contenedor1.removeChild(cell2_3D)
            contenedor1.removeChild(cell3_3D)
            contenedor1.removeChild(cell4_3D)
            contenedor1.removeChild(cell5_3D)
            contenedor1.removeChild(cell6_3D)
            contenedor1.removeChild(cell7_3D)
            contenedor1.removeChild(cell8_3D)
            contenedor1.removeChild(cell9_3D)
            contenedor2.removeChild(cell11_3D)
            contenedor2.removeChild(cell12_3D)
            contenedor2.removeChild(cell13_3D)
            contenedor2.removeChild(cell14_3D)
            contenedor2.removeChild(cell15_3D)
            contenedor2.removeChild(cell16_3D)
            contenedor2.removeChild(cell17_3D)
            contenedor2.removeChild(cell18_3D)
            contenedor2.removeChild(cell19_3D)

            suma.removeChild(suma1)
            suma.removeChild(suma2)
            suma.removeChild(suma3)
            suma.removeChild(suma4)
            suma.removeChild(suma5)
            suma.removeChild(suma6)
            suma.removeChild(suma7)
            suma.removeChild(suma8)
            suma.removeChild(suma9)
            
            resta.removeChild(resta1)
            resta.removeChild(resta2)
            resta.removeChild(resta3)
            resta.removeChild(resta4)
            resta.removeChild(resta5)
            resta.removeChild(resta6)
            resta.removeChild(resta7)
            resta.removeChild(resta8)
            resta.removeChild(resta9)

            multiplicacion.removeChild(multi1)
            multiplicacion.removeChild(multi2)
            multiplicacion.removeChild(multi3)
            multiplicacion.removeChild(multi4)
            multiplicacion.removeChild(multi5)
            multiplicacion.removeChild(multi6)
            multiplicacion.removeChild(multi7)
            multiplicacion.removeChild(multi8)
            multiplicacion.removeChild(multi9)

            determinante.removeChild(det)
            determinante.removeChild(det2)

        break
            
    }

}

//Funcion para calcular las matrices
const calcular_matrices = () =>{

    body.style.height = 'auto'
    
    let separador = document.getElementById('separador1')
    separador.style.padding = "20px"
    separador.innerHTML = "Resultado de la suma, resta y multiplicación de matrices"
    separador.style.display = 'flex'
    separador.style.justifyContent = 'center'
    separador.style.alignItems = 'center'
    separador.style.fontSize = 'xx-large'

    let separador2 = document.getElementById('separador2')
    separador2.style.padding = "20px"
    separador2.innerHTML = "Resultado de la determinante de las matrizes"
    separador2.style.display = 'flex'
    separador2.style.justifyContent = 'center'
    separador2.style.alignItems = 'center'
    separador2.style.fontSize = 'xx-large'

    switch(dimension){
        case 2:

            suma.style.gridTemplateColumns = "repeat(2, 120px)"
            suma.style.gridAutoRows =  "minmax(120px, 120px)"

            resta.style.gridTemplateColumns = "repeat(2, 120px)"
            resta.style.gridAutoRows =  "minmax(120px, 120px)"

            multiplicacion.style.gridTemplateColumns = "repeat(2, 120px)"
            multiplicacion.style.gridAutoRows =  "minmax(120px, 120px)"
            
            determinante.style.display = 'flex'
            determinante.style.flexDirection = 'row'
            determinante.style.justifyContent = 'center'
            determinante.style.alignItems = 'center'
            

            let celda1_2 = document.createElement('div')
            let celda2_2 = document.createElement('div')
            let celda3_2 = document.createElement('div')  
            let celda4_2 = document.createElement('div')
            
            let celda5_2 = document.createElement('div')
            let celda6_2 = document.createElement('div')
            let celda7_2 = document.createElement('div')  
            let celda8_2 = document.createElement('div')

            let celda9_2 = document.createElement('div')
            let celda10_2 = document.createElement('div')
            let celda11_2 = document.createElement('div')  
            let celda12_2 = document.createElement('div')

            let celda13_2 = document.createElement('div')
            let celda14_2 = document.createElement('div')

            celda1_2.id = 'suma1'
            celda2_2.id = 'suma2'
            celda3_2.id = 'suma3'
            celda4_2.id = 'suma4'

            celda5_2.id = 'resta1'
            celda6_2.id = 'resta2'
            celda7_2.id = 'resta3'
            celda8_2.id = 'resta4'

            celda9_2.id =  'multi1'
            celda10_2.id = 'multi2'
            celda11_2.id = 'multi3'
            celda12_2.id = 'multi4'

            celda13_2.id = 'determinante1'
            celda14_2.id = 'determinante2'

            suma.appendChild(celda1_2)
            suma.appendChild(celda2_2)
            suma.appendChild(celda3_2)
            suma.appendChild(celda4_2)

            resta.appendChild(celda5_2)
            resta.appendChild(celda6_2)
            resta.appendChild(celda7_2)
            resta.appendChild(celda8_2)

            multiplicacion.appendChild(celda9_2)
            multiplicacion.appendChild(celda10_2)
            multiplicacion.appendChild(celda11_2)
            multiplicacion.appendChild(celda12_2)

            determinante.appendChild(celda13_2)
            determinante.appendChild(celda14_2)

            let valor1_matriz_1_2D = document.getElementById('cell1')
            let valor2_matriz_1_2D = document.getElementById('cell2')
            let valor3_matriz_1_2D = document.getElementById('cell3')
            let valor4_matriz_1_2D = document.getElementById('cell4')

            let valor1_matriz_2_2D = document.getElementById('cell11')
            let valor2_matriz_2_2D = document.getElementById('cell12')
            let valor3_matriz_2_2D = document.getElementById('cell13')
            let valor4_matriz_2_2D = document.getElementById('cell14') 

            let A1 = Number(valor1_matriz_1_2D.innerHTML) + Number(valor1_matriz_2_2D.innerHTML);
            let A2 = Number(valor2_matriz_1_2D.innerHTML) + Number(valor2_matriz_2_2D.innerHTML);
            let A3 = Number(valor3_matriz_1_2D.innerHTML) + Number(valor3_matriz_2_2D.innerHTML);
            let A4 = Number(valor4_matriz_1_2D.innerHTML) + Number(valor4_matriz_2_2D.innerHTML);

            let A5 = Number(valor1_matriz_1_2D.innerHTML) - Number(valor1_matriz_2_2D.innerHTML);
            let A6 = Number(valor2_matriz_1_2D.innerHTML) - Number(valor2_matriz_2_2D.innerHTML);
            let A7 = Number(valor3_matriz_1_2D.innerHTML) - Number(valor3_matriz_2_2D.innerHTML);
            let A8 = Number(valor4_matriz_1_2D.innerHTML) - Number(valor4_matriz_2_2D.innerHTML);

            let A9 = (Number(valor1_matriz_1_2D.innerHTML) * Number(valor1_matriz_2_2D.innerHTML)) + (Number(valor2_matriz_1_2D.innerHTML) * Number(valor3_matriz_2_2D.innerHTML));

            let A10 = (Number(valor1_matriz_1_2D.innerHTML) * Number(valor2_matriz_2_2D.innerHTML)) + (Number(valor2_matriz_1_2D.innerHTML) * Number(valor4_matriz_2_2D.innerHTML));

            let A11 = (Number(valor3_matriz_1_2D.innerHTML) * Number(valor1_matriz_2_2D.innerHTML)) + (Number(valor4_matriz_1_2D.innerHTML) * Number(valor3_matriz_2_2D.innerHTML));

            let A12 = (Number(valor3_matriz_1_2D.innerHTML) * Number(valor2_matriz_2_2D.innerHTML)) + (Number(valor4_matriz_1_2D.innerHTML) * Number(valor4_matriz_2_2D.innerHTML));

            let A13 = (Number(valor1_matriz_1_2D.innerHTML) * Number(valor4_matriz_1_2D.innerHTML)) - (Number(valor2_matriz_1_2D.innerHTML) * Number(valor3_matriz_1_2D.innerHTML));

            let A14 = (Number(valor1_matriz_2_2D.innerHTML) * Number(valor4_matriz_2_2D.innerHTML)) - (Number(valor2_matriz_2_2D.innerHTML) * Number(valor3_matriz_2_2D.innerHTML));

            document.getElementById('suma1').innerHTML = A1
            document.getElementById('suma2').innerHTML = A2
            document.getElementById('suma3').innerHTML = A3
            document.getElementById('suma4').innerHTML = A4 
            
            document.getElementById('resta1').innerHTML = A5
            document.getElementById('resta2').innerHTML = A6
            document.getElementById('resta3').innerHTML = A7
            document.getElementById('resta4').innerHTML = A8
            
            document.getElementById('multi1').innerHTML = A9
            document.getElementById('multi2').innerHTML = A10 
            document.getElementById('multi3').innerHTML = A11
            document.getElementById('multi4').innerHTML = A12

            document.getElementById('determinante1').innerHTML = A13
            document.getElementById('determinante2').innerHTML = A14

            break;

        case 3:

            suma.style.gridTemplateColumns = "repeat(3, 120px)"
            suma.style.gridAutoRows =  "minmax(120px, 120px)"

            resta.style.gridTemplateColumns = "repeat(3, 120px)"
            resta.style.gridAutoRows =  "minmax(120px, 120px)"

            multiplicacion.style.gridTemplateColumns = "repeat(3, 120px)"
            multiplicacion.style.gridAutoRows =  "minmax(120px, 120px)"

            determinante.style.display = 'flex'
            determinante.style.flexDirection = 'row'
            determinante.style.justifyContent = 'center'
            determinante.style.alignItems = 'center'

            let celda1_3 = document.createElement('div')
            let celda2_3 = document.createElement('div')
            let celda3_3 = document.createElement('div')  
            let celda4_3 = document.createElement('div')
            let celda5_3 = document.createElement('div')
            let celda6_3 = document.createElement('div')
            let celda7_3 = document.createElement('div')
            let celda8_3 = document.createElement('div')
            let celda9_3 = document.createElement('div')
            
            let celda10_3 = document.createElement('div')
            let celda11_3 = document.createElement('div')
            let celda12_3 = document.createElement('div')  
            let celda13_3 = document.createElement('div')
            let celda14_3 = document.createElement('div')
            let celda15_3 = document.createElement('div')
            let celda16_3 = document.createElement('div')
            let celda17_3 = document.createElement('div')
            let celda18_3 = document.createElement('div')

            let celda19_3= document.createElement('div')
            let celda20_3 = document.createElement('div')
            let celda21_3 = document.createElement('div')  
            let celda22_3 = document.createElement('div')
            let celda23_3 = document.createElement('div')
            let celda24_3 = document.createElement('div')
            let celda25_3 = document.createElement('div')
            let celda26_3 = document.createElement('div')
            let celda27_3 = document.createElement('div')

            let celda28_3 = document.createElement('div')
            let celda29_3 = document.createElement('div')

            celda1_3.id = 'suma1'
            celda2_3.id = 'suma2'
            celda3_3.id = 'suma3'
            celda4_3.id = 'suma4'
            celda5_3.id = 'suma5'
            celda6_3.id = 'suma6'
            celda7_3.id = 'suma7'
            celda8_3.id = 'suma8'
            celda9_3.id = 'suma9'

            celda10_3.id = 'resta1'
            celda11_3.id = 'resta2'
            celda12_3.id = 'resta3'
            celda13_3.id = 'resta4'
            celda14_3.id = 'resta5'
            celda15_3.id = 'resta6'
            celda16_3.id = 'resta7'
            celda17_3.id = 'resta8'
            celda18_3.id = 'resta9'

            celda19_3.id = 'multi1'
            celda20_3.id = 'multi2'
            celda21_3.id = 'multi3'
            celda22_3.id = 'multi4'
            celda23_3.id = 'multi5'
            celda24_3.id = 'multi6'
            celda25_3.id = 'multi7'
            celda26_3.id = 'multi8'
            celda27_3.id = 'multi9'

            celda28_3.id = 'determinante1'
            celda29_3.id = 'determinante2'


            suma.appendChild(celda1_3)
            suma.appendChild(celda2_3)
            suma.appendChild(celda3_3)
            suma.appendChild(celda4_3)
            suma.appendChild(celda5_3)
            suma.appendChild(celda6_3)
            suma.appendChild(celda7_3)
            suma.appendChild(celda8_3)
            suma.appendChild(celda9_3)

            resta.appendChild(celda10_3)
            resta.appendChild(celda11_3)
            resta.appendChild(celda12_3)
            resta.appendChild(celda13_3)
            resta.appendChild(celda14_3)
            resta.appendChild(celda15_3)
            resta.appendChild(celda16_3)
            resta.appendChild(celda17_3)
            resta.appendChild(celda18_3)

            multiplicacion.appendChild(celda19_3)
            multiplicacion.appendChild(celda20_3)
            multiplicacion.appendChild(celda21_3)
            multiplicacion.appendChild(celda22_3)
            multiplicacion.appendChild(celda23_3)
            multiplicacion.appendChild(celda24_3)
            multiplicacion.appendChild(celda25_3)
            multiplicacion.appendChild(celda26_3)
            multiplicacion.appendChild(celda27_3)

            determinante.appendChild(celda28_3)
            determinante.appendChild(celda29_3)

            let valor1_matriz1_3D = document.getElementById('cell1')
            let valor2_matriz1_3D = document.getElementById('cell2')
            let valor3_matriz1_3D = document.getElementById('cell3')
            let valor4_matriz1_3D = document.getElementById('cell4')
            let valor5_matriz1_3D = document.getElementById('cell5')
            let valor6_matriz1_3D = document.getElementById('cell6')
            let valor7_matriz1_3D = document.getElementById('cell7')
            let valor8_matriz1_3D = document.getElementById('cell8')
            let valor9_matriz1_3D = document.getElementById('cell9')

            let valor1_matriz_2_3D = document.getElementById('cell11')
            let valor2_matriz_2_3D = document.getElementById('cell12')
            let valor3_matriz_2_3D = document.getElementById('cell13')
            let valor4_matriz_2_3D = document.getElementById('cell14')
            let valor5_matriz_2_3D = document.getElementById('cell15')
            let valor6_matriz_2_3D = document.getElementById('cell16')
            let valor7_matriz_2_3D = document.getElementById('cell17')
            let valor8_matriz_2_3D = document.getElementById('cell18')
            let valor9_matriz_2_3D = document.getElementById('cell19')

            let B1 = Number(valor1_matriz1_3D.innerHTML) + Number(valor1_matriz_2_3D.innerHTML)
            let B2 = Number(valor2_matriz1_3D.innerHTML) + Number(valor2_matriz_2_3D.innerHTML)
            let B3 = Number(valor3_matriz1_3D.innerHTML) + Number(valor3_matriz_2_3D.innerHTML)
            let B4 = Number(valor4_matriz1_3D.innerHTML) + Number(valor4_matriz_2_3D.innerHTML)
            let B5 = Number(valor5_matriz1_3D.innerHTML) + Number(valor5_matriz_2_3D.innerHTML)
            let B6 = Number(valor6_matriz1_3D.innerHTML) + Number(valor6_matriz_2_3D.innerHTML)
            let B7 = Number(valor7_matriz1_3D.innerHTML) + Number(valor7_matriz_2_3D.innerHTML)
            let B8 = Number(valor8_matriz1_3D.innerHTML) + Number(valor8_matriz_2_3D.innerHTML)
            let B9 = Number(valor9_matriz1_3D.innerHTML) + Number(valor9_matriz_2_3D.innerHTML)
            
            let C1 = Number(valor1_matriz1_3D.innerHTML) - Number(valor1_matriz_2_3D.innerHTML)
            let C2 = Number(valor2_matriz1_3D.innerHTML) - Number(valor2_matriz_2_3D.innerHTML)
            let C3 = Number(valor3_matriz1_3D.innerHTML) - Number(valor3_matriz_2_3D.innerHTML)
            let C4 = Number(valor4_matriz1_3D.innerHTML) - Number(valor4_matriz_2_3D.innerHTML)
            let C5 = Number(valor5_matriz1_3D.innerHTML) - Number(valor5_matriz_2_3D.innerHTML)
            let C6 = Number(valor6_matriz1_3D.innerHTML) - Number(valor6_matriz_2_3D.innerHTML)
            let C7 = Number(valor7_matriz1_3D.innerHTML) - Number(valor7_matriz_2_3D.innerHTML)
            let C8 = Number(valor8_matriz1_3D.innerHTML) - Number(valor8_matriz_2_3D.innerHTML)
            let C9 = Number(valor9_matriz1_3D.innerHTML) - Number(valor9_matriz_2_3D.innerHTML)

            let D1 = (Number(valor1_matriz1_3D.innerHTML) * Number(valor1_matriz_2_3D.innerHTML)) + (Number(valor2_matriz1_3D.innerHTML) * Number(valor4_matriz_2_3D.innerHTML)) + (Number(valor3_matriz1_3D.innerHTML) * Number(valor7_matriz_2_3D.innerHTML))
            
            let D2 = (Number(valor1_matriz1_3D.innerHTML) * Number(valor2_matriz_2_3D.innerHTML)) + (Number(valor2_matriz1_3D.innerHTML) * Number(valor5_matriz_2_3D.innerHTML)) + (Number(valor3_matriz1_3D.innerHTML) * Number(valor8_matriz_2_3D.innerHTML))

            let D3 = (Number(valor1_matriz1_3D.innerHTML) * Number(valor3_matriz_2_3D.innerHTML)) + (Number(valor2_matriz1_3D.innerHTML) * Number(valor6_matriz_2_3D.innerHTML)) + (Number(valor3_matriz1_3D.innerHTML) * Number(valor9_matriz_2_3D.innerHTML))

            let D4 = (Number(valor4_matriz1_3D.innerHTML) * Number(valor1_matriz_2_3D.innerHTML)) + (Number(valor5_matriz1_3D.innerHTML) * Number(valor4_matriz_2_3D.innerHTML)) + (Number(valor6_matriz1_3D.innerHTML) * Number(valor7_matriz_2_3D.innerHTML))

            let D5 = (Number(valor4_matriz1_3D.innerHTML) * Number(valor2_matriz_2_3D.innerHTML)) + (Number(valor5_matriz1_3D.innerHTML) * Number(valor5_matriz_2_3D.innerHTML)) + (Number(valor6_matriz1_3D.innerHTML) * Number(valor8_matriz_2_3D.innerHTML))

            let D6 = (Number(valor4_matriz1_3D.innerHTML) * Number(valor3_matriz_2_3D.innerHTML)) + (Number(valor5_matriz1_3D.innerHTML) * Number(valor6_matriz_2_3D.innerHTML)) +( Number(valor6_matriz1_3D.innerHTML) * Number(valor9_matriz_2_3D.innerHTML))

            let D7 = (Number(valor7_matriz1_3D.innerHTML) * Number(valor1_matriz_2_3D.innerHTML)) + (Number(valor8_matriz1_3D.innerHTML) * Number(valor4_matriz_2_3D.innerHTML)) + (Number(valor9_matriz1_3D.innerHTML) * Number(valor7_matriz_2_3D.innerHTML))

            let D8 = (Number(valor7_matriz1_3D.innerHTML) * Number(valor2_matriz_2_3D.innerHTML)) + (Number(valor8_matriz1_3D.innerHTML) * Number(valor5_matriz_2_3D.innerHTML)) +( Number(valor9_matriz1_3D.innerHTML) * Number(valor8_matriz_2_3D.innerHTML))

            let D9 = (Number(valor7_matriz1_3D.innerHTML) * Number(valor3_matriz_2_3D.innerHTML)) + (Number(valor8_matriz1_3D.innerHTML) * Number(valor6_matriz_2_3D.innerHTML)) + (Number(valor9_matriz1_3D.innerHTML) * Number(valor9_matriz_2_3D.innerHTML))

            let E1 = (Number(valor1_matriz1_3D.innerHTML) * Number(valor5_matriz1_3D.innerHTML) * Number(valor9_matriz1_3D.innerHTML)) + (Number(valor2_matriz1_3D.innerHTML) * Number(valor6_matriz1_3D.innerHTML) * Number(valor7_matriz1_3D.innerHTML)) + (Number(valor3_matriz1_3D.innerHTML) * Number(valor4_matriz1_3D.innerHTML) * Number(valor8_matriz1_3D.innerHTML)) - Number(valor7_matriz1_3D.innerHTML) * Number(valor5_matriz1_3D.innerHTML) * Number(valor3_matriz1_3D.innerHTML) - Number(valor8_matriz1_3D.innerHTML) * Number(valor6_matriz1_3D.innerHTML) * Number(valor1_matriz1_3D.innerHTML) - Number(valor9_matriz1_3D.innerHTML) * Number(valor4_matriz1_3D.innerHTML) * Number(valor2_matriz1_3D.innerHTML)

            let E2 = (Number(valor1_matriz_2_3D.innerHTML) * Number(valor5_matriz_2_3D.innerHTML) * Number(valor9_matriz_2_3D.innerHTML)) + (Number(valor2_matriz_2_3D.innerHTML) * Number(valor6_matriz_2_3D.innerHTML) * Number(valor7_matriz_2_3D.innerHTML)) + (Number(valor3_matriz_2_3D.innerHTML) * Number(valor4_matriz_2_3D.innerHTML) * Number(valor8_matriz_2_3D.innerHTML)) - Number(valor7_matriz_2_3D.innerHTML) * Number(valor5_matriz_2_3D.innerHTML) * Number(valor3_matriz_2_3D.innerHTML) - Number(valor8_matriz_2_3D.innerHTML) * Number(valor6_matriz_2_3D.innerHTML) * Number(valor1_matriz_2_3D.innerHTML) - Number(valor9_matriz_2_3D.innerHTML) * Number(valor4_matriz_2_3D.innerHTML) * Number(valor2_matriz_2_3D.innerHTML)

            document.getElementById('suma1').innerHTML = B1
            document.getElementById('suma2').innerHTML = B2
            document.getElementById('suma3').innerHTML = B3
            document.getElementById('suma4').innerHTML = B4
            document.getElementById('suma5').innerHTML = B5
            document.getElementById('suma6').innerHTML = B6
            document.getElementById('suma7').innerHTML = B7
            document.getElementById('suma8').innerHTML = B8
            document.getElementById('suma9').innerHTML = B9

            document.getElementById('resta1').innerHTML = C1
            document.getElementById('resta2').innerHTML = C2
            document.getElementById('resta3').innerHTML = C3
            document.getElementById('resta4').innerHTML = C4
            document.getElementById('resta5').innerHTML = C5
            document.getElementById('resta6').innerHTML = C6
            document.getElementById('resta7').innerHTML = C7
            document.getElementById('resta8').innerHTML = C8
            document.getElementById('resta9').innerHTML = C9

            document.getElementById('multi1').innerHTML = D1
            document.getElementById('multi2').innerHTML = D2
            document.getElementById('multi3').innerHTML = D3
            document.getElementById('multi4').innerHTML = D4
            document.getElementById('multi5').innerHTML = D5
            document.getElementById('multi6').innerHTML = D6
            document.getElementById('multi7').innerHTML = D7
            document.getElementById('multi8').innerHTML = D8
            document.getElementById('multi9').innerHTML = D9

            document.getElementById('determinante1').innerHTML = E1
            document.getElementById('determinante2').innerHTML = E2
            
            break;
    }

}


//Operaciones a realizar 

//suma y resta de matrices
//producto de matrices
//determinantes
//inversa

