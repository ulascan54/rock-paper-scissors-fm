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







const score_p=document.getElementById('score')

const  choiceList_div=document.getElementById('choice-list')
const choice_rock_div=document.getElementById('c-rock')
const choice_paper_div=document.getElementById('c-paper')
const choice_scissors_div=document.getElementById('c-scissors')
const choice_lizard_div=document.getElementById('c-lizard')
const choice_spock_div=document.getElementById('c-spock')

const battle_div=document.getElementById('battle')
const battle_response_div=document.querySelectorAll('.battle-response')
const user_action=document.querySelector('.action-user')
const winner=document.querySelectorAll('.who-winner')
const restrat=document.querySelectorAll('.again')

let userChoice='';

const startBattle=()=>{
    battle_div.classList.add('animate__bounceIn')
    battle_div.classList.remove('animate__bounceOut')
    choiceList_div.classList.remove('animate__bounceIn')
    choiceList_div.classList.add('animate__bounceOut')
    setTimeout(() => {
        choiceList_div.classList.add('none')
        battle_div.classList.remove('none')
    }, 500);
}

const visibleChoice=(choice)=>{
    user_action.children[1].classList.add('none')
    user_action.children[2].classList.add('none')
    user_action.children[3].classList.add('none')
    user_action.children[4].classList.add('none')
    user_action.children[5].classList.add('none')
    choice.classList.remove('none')
}

const getUserChoice=(userChoice)=>{
    if(userChoice=='rock'){
        visibleChoice(user_action.children[1])
    }
    else if(userChoice=='paper'){
        visibleChoice(user_action.children[2])
    }
    else if(userChoice=='scissors'){
        visibleChoice(user_action.children[3])
    }
    else if(userChoice=='lizard'){
        visibleChoice(user_action.children[4])
    }
    else if(userChoice=='spock'){
        visibleChoice(user_action.children[5])
    }
}

choice_rock_div.addEventListener('click',()=>{
    startBattle()
    userChoice='rock'
    getUserChoice(userChoice)
})
choice_paper_div.addEventListener('click',()=>{
    startBattle()
    userChoice='paper'
    getUserChoice(userChoice)
})
choice_scissors_div.addEventListener('click',()=>{
    startBattle()
    userChoice='scissors'
    getUserChoice(userChoice)
})
choice_lizard_div.addEventListener('click',()=>{
    startBattle()
    userChoice='lizard'
    getUserChoice(userChoice)
})
choice_spock_div.addEventListener('click',()=>{
    startBattle()
    userChoice='spock'
    getUserChoice(userChoice)
})


// restart
restrat.forEach(el => {
    el.addEventListener('click',()=>{
        battle_div.classList.remove('animate__bounceIn')
        battle_div.classList.add('animate__bounceOut')
        choiceList_div.classList.add('animate__bounceIn')
        choiceList_div.classList.remove('animate__bounceOut')
        setTimeout(() => {
            choiceList_div.classList.remove('none')
            battle_div.classList.add('none')
        }, 500);
    })
});





































