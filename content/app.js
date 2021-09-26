const score_p=document.getElementById('score')

const modalBtn=document.getElementById('modal-button')
const modal=document.getElementById('modal')
const modalClose=document.querySelectorAll('.modalClose')

// MODAL
modalBtn.addEventListener('click',()=>{
    modal.classList.remove('animate__fadeOut')
    modal.classList.add('animate__fadeIn')
    modal.classList.remove('none')
})
modalClose.forEach(el => {
    el.addEventListener('click',()=>{
        modal.classList.remove('animate__fadeIn')
        modal.classList.add('animate__fadeOut')
        setTimeout(() => {
            modal.classList.add('none')
        }, 800);
    })
    
});

