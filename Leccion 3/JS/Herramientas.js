console.log("Calcu");


function operacion(operacion){
    const form = document.getElementById("forma");
    let operandoA = forma["operandoA"];
    let operandoB = forma["operandoB"];
    let resultado = 0;
    
    switch(operacion){
        case 'suma':
            resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
            break;

        case 'resta':
            resultado = parseInt(operandoA.value) - parseInt(operandoB.value);
            break;

        case 'division':
            resultado = parseInt(operandoA.value) / parseInt(operandoB.value);
            break;

        case 'multiplicacion':
            resultado = parseInt(operandoA.value) *  parseInt(operandoB.value);
            break;

        case 'borrar':
            document.getElementById("resultado").innerHTML= "";
            break;

    }

    document.getElementById("resultado").innerHTML= "RESULTADO: " + resultado ;
}