
//variables

let name_field = document.getElementById('nameField');



// TOUR MODAL
let disabledModalBtn = document.getElementById('take_tour_btn');

document.body.onload = function(){
    setTimeout(()=>{
        disabledModalBtn.click();
    },2000)
}

//tutorial demo

let demoNames = "Ishat Noor, noor mahi, mahi, john doe, william, jane doe, a name, a second name, a third name, another name, lorem ipsum, dolor is, emet del, ferrari, someone's name, Rahim, Karim, Salam, Rafiq, jobbar";
let import_btn = document.getElementById('importBtn');

import_btn.addEventListener('click',()=>{
    name_field.value = demoNames;
})

//import demo names

//main draw

