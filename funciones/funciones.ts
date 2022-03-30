// function
function nombreDeFuncion(parametro1, parametro2) {
    return parametro1 + parametro2
}

const result = nombreDeFuncion(2, 3)

// arrow functions 
const reult2 = param1 => param1 + 10;

// no tiene Scope: No hay alcance
const withoutScope = (param1, param2) => {
    // this. <== No Existe
}