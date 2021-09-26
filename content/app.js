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
const battle_response_div=document.querySelectorAll('.b-response')
const user_action=document.querySelector('.action-user')
const comp_action=document.querySelector('.action-comp')
const winner=document.querySelectorAll('.who-winner')
const restrat=document.querySelectorAll('.again')

let userChoice='';
let comp_random=1;

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

const compRandomReset=(selected)=>{
    comp_action.children[1].classList.add('none')
    comp_action.children[2].classList.add('none')
    comp_action.children[3].classList.add('none')
    comp_action.children[4].classList.add('none')
    comp_action.children[5].classList.add('none')
    selected.classList.remove('none')
}

let randomComp=()=>{
        if(comp_random==1){
            compRandomReset(comp_action.children[comp_random])
            comp_random++
        }
        else if(comp_random==2){
            compRandomReset(comp_action.children[comp_random])
            comp_random++
        }
        else if(comp_random==3){
            compRandomReset(comp_action.children[comp_random])
            comp_random++
        }
        else if(comp_random==4){
            compRandomReset(comp_action.children[comp_random])
            comp_random++
        }
        else{
            compRandomReset(comp_action.children[comp_random])
            comp_random=1
        }
}


const visibleChoice=(choice)=>{
    user_action.children[1].classList.add('none')
    user_action.children[2].classList.add('none')
    user_action.children[3].classList.add('none')
    user_action.children[4].classList.add('none')
    user_action.children[5].classList.add('none')
    choice.classList.remove('none')
}

const getComputerChoice= ()=>{
    const choices=['rock','paper','scissors','lizard','spock']
    const choice= choices[Math.floor(Math.random()*5)]
    console.log(choice);
    if(choice=='rock'){
        compRandomReset(comp_action.children[1])
    }
    else if(choice=='paper'){
        compRandomReset(comp_action.children[2])
    }
    else if(choice=='scissors'){
        compRandomReset(comp_action.children[3])
    }
    else if(choice=='lizard'){
        compRandomReset(comp_action.children[4])
    }
    else if(choice=='spock'){
        compRandomReset(comp_action.children[5])
    }
    return choice
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
    game()
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


const game=()=>{
    let random_comp = setInterval(randomComp, 500);
    let compChoice=null
    setTimeout(() => {
        clearInterval(random_comp)
        compChoice=getComputerChoice()
    }, 5000);
}



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





































