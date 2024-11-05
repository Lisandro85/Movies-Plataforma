const moviesController=(req,res)=>{
    res.status(200).send("Estamos recibiendo una solicitud para obtener movies")

};

module.exports={
    moviesController,
};