const app=require("./src/server");
const dbCon=require("./src/config/dbCon");

dbCon()

.then( res=>{

    app.listen(3000,()=>{
        console.log("servidor escuchando en puerto 3000");
    });
})
.catch((err)=>{
    console.log("Error al intentar conectar con la DB",err);
});






