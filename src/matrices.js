const contenedor1 = document.getElementById('container1')
const contenedor2 = document.getElementById('container2')


//solicitud de las dimenciones de la matriz
let matriz_2D = [[], []]
let matriz_3D = [[], [], []]
let matriz_2D_2 = [[], []]
let matriz_3D_2 = [[], [], []]

let dimension;

const Asignar_dimension =()=>{
    dimension =  parseInt(prompt("Ingrese la dimension de su matriz"))
}

const crear_matriz_1 = () =>{


    switch(dimension){
        case 2:

            matriz_2D = [[], []]

            
            
            //asignacion de estilos al contnedor
            contenedor1.style.gridTemplateColumns = 'repeat(2, 60px)'
            contenedor1.style.gridAutoRows = 'minmax(60px, 60px)'

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
            contenedor1.style.gridTemplateColumns = 'repeat(3, 60px)'
            contenedor1.style.gridAutoRows = 'minmax(60px, 60px)'

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
            contenedor2.style.gridTemplateColumns = 'repeat(2, 60px)'
            contenedor2.style.gridAutoRows = 'minmax(60px, 60px)'

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
            contenedor2.style.gridTemplateColumns = 'repeat(3, 60px)'
            contenedor2.style.gridAutoRows = 'minmax(60px, 60px)'

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
            
    }

}

const calcular_valores = () =>{
    let table = document.getElementById('table')
    table.style.display = 'flex'
}


//Operaciones a realizar 

//suma y resta de matrices
//producto de matrices
//determinantes
//inversa

