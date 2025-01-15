const btn=document.querySelector('button')
const hide=document.querySelector('.ancico')
btn.addEventListener('click',()=>{
    btn.classList.toggle('button')
    hide.classList.toggle('anchor')
})

