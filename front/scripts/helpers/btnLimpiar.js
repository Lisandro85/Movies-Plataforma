const btnLimpiar=(btn,formulario)=>{
    if (!btn || !formulario) return;
    btn.addEventListener("click",(event)=>{
    formulario.reset()      
});
};
module.exports={btnLimpiar};