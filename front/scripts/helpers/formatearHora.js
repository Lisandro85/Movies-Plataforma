const formatearHora=(hora)=>{
    let duracionFormateada = '';

    if (hora) {
        const [horas, minutos] = hora.split(':'); 

        if (horas && horas !== '00') {
            duracionFormateada += parseInt(horas) + "h"; 
        }
        if (minutos && minutos !== '00') {
            duracionFormateada += (duracionFormateada ? ' ' : '') + parseInt(minutos) + "min";
        }
    }
    return duracionFormateada;
};

module.exports={formatearHora};