
//variables

let name_field = document.getElementById('nameField');
let modal = document.getElementById('tutorialModal');
let winners_Field = document.getElementById('winner-container');
let win1 = document.getElementById('win1');
let win2 = document.getElementById('win2');
let win3 = document.getElementById('win3');

let import_btn = document.getElementById('importBtn');
let show_name_btn = document.getElementById('showNames');
let roll_btn = document.getElementById('roll');
let loading_btn = document.getElementById('loading');
let get_winner = document.getElementById('getWinner');
let tourStartBtn = document.getElementById('startTourBtn');
let close_modal = document.getElementById('modalClose');
let alert_close = document.getElementById('alert_close');

let demoNames = "Ishat Noor, noor mahi, mahi, john doe, william, jane doe, a name, a second name, a third name, another name, lorem ipsum, dolor is, emet del, ferrari, someone's name, Rahim, Karim, Salam, Rafiq, jobbar";

// TOUR MODAL

    document.body.onload = function(){

        let disabledModalBtn = document.getElementById('take_tour_btn');
        setTimeout(()=>{

            disabledModalBtn.click();
        },2000)
        let star_tour = ()=>{

            close_modal.click();
            window.scrollTo(0,0);
            alert_close.classList.remove('d-none');

        }
        tourStartBtn.addEventListener('click',star_tour)
    }

//Bootstrap components initialization

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
    });


//import demo names

    import_btn.addEventListener('click',()=>{
        name_field.value = demoNames;    
        activate();
    });

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

function getOrgArray(){
    
    let user_input = name_field.value;
    
    let allNameArr = user_input.split(',');

    //primary filter

    const filteredArr = allNameArr.filter(check);

    function check(str) {
    return  str!=' ';

    }
     
    return filteredArr;
}

let draw = (final_arr)=>{
    
    loading_btn.classList.remove('d-none');
    get_winner.classList.add('d-none');

    let rand = Math.floor(Math.random()*(final_arr.length))
    
    // let winner = final_arr[rand];
    

    let dis = document.getElementById('displayRes');
    let len = final_arr.length;

    for(var j = 0; j<=len; j++){
        let dis = document.getElementById('displayRes');
    
        (function (j,count){

            
            setTimeout(()=>{
                let rand = Math.floor(Math.random()*(final_arr.length));
                let winner =final_arr[rand]
                dis.innerHTML = winner;

                if(count === len - 1){
                    if(!win1.innerHTML){
                        win1.innerHTML = final_arr[rand];
                    }
                }
                
            },j)
            
            
        })(j*150,j)
    }
    loading_btn.classList.add('d-none')
    get_winner.classList.remove('d-none')

}

function shwo_names(){
   let arr = getOrgArray();
   let ul = document.querySelector('.list-group');
   let name_details = document.querySelector('.name_details');
   let fixed_prefix = `<li class="list-group-item bg-primary text-white" aria-current="true">See Names Here</li>`

   ul.innerHTML=fixed_prefix;

   arr.forEach((item)=>{
       let li = document.createElement('li')
           li.classList.add('list-group-item')
       li.innerHTML = `
       <span>${item}</span>
       <span class="float-end">
       <button class="btn btn-success btn-sm text-white mx-2 edit">
           <i class="fa-solid fa-pen-to-square"></i>
       </button>
       <button class="btn btn-sm btn-danger text-white mx-2 remove">
           <i class="fa-solid fa-xmark"></i>                                   </button>
       </span>
       `;
       ul.insertAdjacentElement('beforeend',li)
   })
   name_details.appendChild(ul);

   var userEdits = false;
   let removeNameBtn = document.querySelectorAll('.remove');
   let editNameBtn = document.querySelectorAll('.edit');

   editNameBtn.forEach(btn=>{
        btn.addEventListener('click',()=>{
            let $name =  btn.parentElement.previousElementSibling;
            $name.setAttribute('contentEditable',true);
            $name.classList.add('active-name-edit');
            $name.addEventListener('keyup',()=>{
                
                userEdits = true;
                takeAction(userEdits);
            });
    });
   });

   removeNameBtn.forEach(btn=>{
       btn.addEventListener('click',()=>{
            btn.parentElement.parentElement.remove();
            userEdits = true;
            takeAction(userEdits);
       });
   });
   console.log(userEdits)

   function takeAction(user_edits){

    console.log(user_edits);

       if(user_edits){
            //show alert if user edits
            let myAlert = document.querySelector('.toast');
            let bsAlert = new bootstrap. Toast (myAlert);
            bsAlert.show();

           ul.firstChild.innerHTML= `<span>See Names Here</span>
           <button class="btn btn-sm btn-light float-end" style='cursor:pointer;'>Save & Roll</button>`
       }else{

       }
   }


    
}


//shuffle array for perfection

function shuffleArr(){
    const arr = getOrgArray();
    let currentIndex = arr.length,  randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // And swap it with the current element.
      [arr[currentIndex], arr[randomIndex]] = [
        arr[randomIndex], arr[currentIndex]];
    }
    draw(arr);
}



roll_btn.addEventListener('click',shuffleArr);
show_name_btn.addEventListener('click',shwo_names)