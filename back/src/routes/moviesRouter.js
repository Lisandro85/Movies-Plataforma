const {Router}=require("express");
const moviesController=require("../controllers/moviesController");
const {validarMovie}=require("../middlewares/validarMovies")

const moviesRouter=Router();

moviesRouter.get("/", moviesController.getALLMovies);

moviesRouter.post("/",validarMovie,moviesController.createMovie);

module.exports=moviesRouter;