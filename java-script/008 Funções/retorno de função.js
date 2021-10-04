function formtarMensagem(textoEntrada) {
    if (textoEntrada == undefined)
        return '......';

    let data = new Date();


    let hora = data.getHours();
    let min = data.getMinutes();
    let seg = data.getSeconds();

    let hora_formatada = hora + ':' + min + ':' + seg + ':' + textoEntrada;

    return hora_formatada;


}

console.log( formtarMensagem ("texto qualquer"));

console.log( formtarMensagem ());

console.log( formtarMensagem ("Outro texto qualquer\n\n"))

// Função nomeada

function formtarMensagem(textoEntrada) {
    if (textoEntrada == undefined)
        return '......';

    let data = new Date();


    let hora = data.getHours();
    let min = data.getMinutes();
    let seg = data.getSeconds();

    let hora_formatada = hora + ':' + min + ':' + seg + ':' + textoEntrada;

    return hora_formatada;


}

var fm = formtarMensagem;

console.log( fm("texto qualquer"));

console.log( fm());

console.log( formtarMensagem ("Outro texto qualquer\n\n"))


// Função anônima 

var formtarMensagem =  (textoEntrada) => {
    if (textoEntrada == undefined)
        return '......';

    let data = new Date();


    let hora = data.getHours();
    let min = data.getMinutes();
    let seg = data.getSeconds();

    let hora_formatada = hora + ':' + min + ':' + seg + ':' + textoEntrada;

    return hora_formatada;


}

console.log( formtarMensagem ("texto qualquer"));

console.log( formtarMensagem ());

console.log( formtarMensagem ("Outro texto qualquer\n\n"))
