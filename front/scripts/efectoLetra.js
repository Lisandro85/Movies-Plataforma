const efectoLetra=()=>{
    const textContents = document.querySelectorAll('.text-content');
    textContents.forEach(textContent => {
    const words = textContent.innerText.split(' ').filter(word => word.trim() !== '');
    textContent.innerHTML = words.map(word => `<span class="scale-effect">${word}</span>`).join(' ');
    });
};
module.exports={efectoLetra};
