const modalBtn=document.getElementById('modal-button')
const modal=document.getElementById('modal')
const modalClose=document.getElementById('modalClose')

// MODAL
modalBtn.addEventListener('click',()=>{
    modal.classList.remove('animate__fadeOut')
    modal.classList.add('animate__fadeIn')
    modal.classList.remove('hidden')
})
modalClose.addEventListener('click',()=>{
    modal.classList.remove('animate__fadeIn')
    modal.classList.add('animate__fadeOut')
    setTimeout(() => {
        modal.classList.add('hidden')
    }, 800);
})