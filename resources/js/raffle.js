
//variables

let name_field = document.getElementById('nameField');
let modal = document.getElementById('tutorialModal');

let import_btn = document.getElementById('importBtn');
let show_name_btn = document.getElementById('showNames');
let roll_btn = document.getElementById('roll');
let loading_btn = document.getElementById('loading');
let get_winner = document.getElementById('getWinner');
let tourStartBtn = document.getElementById('startTourBtn');
let close_modal = document.getElementById('modalClose');

let demoNames = "Ishat Noor, noor mahi, mahi, john doe, william, jane doe, a name, a second name, a third name, another name, lorem ipsum, dolor is, emet del, ferrari, someone's name, Rahim, Karim, Salam, Rafiq, jobbar";



// TOUR MODAL

let disabledModalBtn = document.getElementById('take_tour_btn');

document.body.onload = function(){
    setTimeout(()=>{
        disabledModalBtn.click();
    },2000)
    let star_tour = ()=>{
        close_modal.click();
        console.log('a')
    }
    tourStartBtn.addEventListener('click',star_tour)
}

//tutorial demo


//import demo names
import_btn.addEventListener('click',()=>{
    name_field.value = demoNames;    
    activate();
})

//activate/deactivate buttons

    //activate
    function activate(btnArray=[show_name_btn,roll_btn]){
        btnArray.forEach(btn => {
            btn.removeAttribute('disabled');
        });
    }
    //deactivate
    function deactivate(btnArray=[show_name_btn,roll_btn]){
        btnArray.forEach(btn => {
            btn.setAttribute('disabled',true);
        });
    }

//input
    name_field.addEventListener('input',()=>{
        if(name_field.value==""){
            deactivate()
        }else{
            activate();
        }
    });

//main draw

let draw = ()=>{
    let user_input = name_field.value;

    //show loading button until draw display ends
    loading_btn.classList.remove('d-none'); 

    //seperate with comma
    let allNameArr = user_input.split(',');
    console.log(allNameArr)
    
}
roll_btn.addEventListener('click',draw);
