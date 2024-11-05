const validarMovie = (req, res, next) => {
    const { title, year, director, duration, genre, rate, poster } = req.body;
    let errores = [];

   
    if (!title || typeof title !== "string") {
        errores.push("Ingrese TITULO");
    }
    
    if (!director || typeof director !== "string") {
        errores.push("Ingrese DIRECTOR");
    } else if (!/^[a-zA-Z\s]+$/.test(director)) {
        errores.push("El campo DIRECTOR admite solo letras y espacios");
    }

    if (!year || isNaN(year)) {
        errores.push("Ingrese AÑO valido (debe ser un número)");
    } else if (year.toString().length !== 4) {
        errores.push("El AÑO debe contener cuatro dígitos");
    } else if (year < 1888 || year > new Date().getFullYear()) {
        errores.push(`El AÑO debe estar entre 1888 y el AÑO actual(${new Date().getFullYear()}).`);
    }
  
    if (!duration || typeof duration !== "string") {
        errores.push("Ingrese DURACION");
    }else if (duration.length > 9) {
        errores.push("Utilice el formato el formato 00h 00min");
    }
  
    if (!genre || !Array.isArray(genre) || genre.length === 0) {
        errores.push("Por favor, selecciona al menos un género.");
    }

    if (!rate || isNaN(rate)) {
        errores.push("Ingrese IMDB");   
    } else if (Number(rate) < 1 || Number(rate) > 10) {
        errores.push("El IMDB debe ser un número entre 1 y 10 (puede ser entero o decimal)");
    }
    
    if (!poster) {
        errores.push("Ingrese una URL");
    } else if (!/^(https?:\/\/[^\s$.?#].[^\s]*)$/.test(poster)) {
        errores.push("Ingrese una URL válida.");
    }
    
    if (errores.length > 0) {
        return res.status(400).json({ errores });
    }

    next();
};




module.exports={validarMovie};
/*     const { title, year, director, duration, genre, rate, poster } = req.body;

    if (!title || !year || !director || !duration || !genre || !rate || !poster) {
        return res.status(400).json({ error: "Campos Vacíos o Inválidos" });
    }
    next();
} */