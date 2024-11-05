const moviesService=require("../service/moviesService");

const getALLMovies= async (req,res)=>{
    try{
        const movies= await moviesService.getMovies();
        res.status(200).json(movies);
    }catch(error){
        console.log("Error al obtener las peliculas", error);
        res.status(500).json({error:error.message});
    }
};

const createMovie= async (req,res)=>{
    try{
        const movie= req.body;
        const newMovie= await moviesService.createMovie(movie);
        res.status(201).json({
        message:"Pelicula creada con EXITO",
        movie: newMovie});  
    }catch(error){
        console.log("Error al crear la pelicula", error);
        res.status(500).json({error:error.message});
    }
};

module.exports={
    getALLMovies,
    createMovie
};
