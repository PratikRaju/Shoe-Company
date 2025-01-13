const btn=document.querySelector('button')
const hide=document.querySelector('#hamberger')
const close=document.querySelector('.arrow')
btn.addEventListener('click',()=>{
    if(btn.style.display=='block'){
        btn.style.display='none'
        hide.style.display='block'
    }else{
        btn.style.display='block'
        hide.style.display='none'
    }
})
close.addEventListener('click',()=>{
    if(hide.style.display=='block'){
        hide.style.display='none'
        btn.style.display='block'
    }else{
        hide.style.display='block'
        btn.style.display='none'
    }
})