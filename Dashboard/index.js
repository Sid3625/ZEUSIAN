const toggleBtn = document.querySelector(".navbar-toggler");
const navLinks = document.querySelector(".navbar-nav");

// const gridContainer = document.querySelector(".grid-container");

toggleBtn.addEventListener("click", () => {
    // navLinks.classList.toggle("active");
    let ham_icon = document.getElementById("hamburger");
    var divs= document.getElementById("content");
    var arrow=document.getElementById("arrow");

    // document.onkeyup(function(e){
    //     if(navLinks.hasClass("show")){
    //         if(e.key === "Escape"){
    //             navLinks.classList.remove("show");
    //         }
    //     }
    // });
    
    if(navLinks.classList.contains("show")){
        navLinks.classList.remove("show");
        toggleBtn.setAttribute("aria-expanded", false);
        toggleBtn.focus();
        divs.className ='dropdown-content1';
        arrow.className = "fa-solid fa-chevron-down";
        ham_icon.style.filter ="none";


    }else{ 
        navLinks.classList.add("show");
        toggleBtn.setAttribute("aria-expanded", true);
        toggleBtn.focus();
        ham_icon.style.filter = "brightness(0) invert(1)";
    }   
});



// function myfun(){
//    var divs= document.getElementById("content");
// //    divs.classList.toggle("shows");
// //    arrow.style.transform="rotate(-180deg)"


// }
// function myfun1(){
//     var divs= document.getElementById("user");
//     divs.classList.toggle("shows");
//  //    arrow.style.transform="rotate(-225deg)"
 
//  }
function arrowclick() {
    var divs= document.getElementById("content");
    var arrow=document.getElementById("arrow");
    var lista=document.getElementById("l1");
    if(divs.className==='dropdown-content1'){
        divs.className = "catalog";
        lista.className += " colorc";
        arrow.className = "fa-solid fa-chevron-up";
        
    }
    else{
        divs.className='dropdown-content1';
        arrow.className = "fa-solid fa-chevron-down";
        lista.className="navbar-item";
    }
  
}


// function show_notification(){
//     // let notifi = document.getElementById("notifications");
//     let notifi_icon = document.getElementById("n_img");
//     let notifi = document.getElementById("notify");

//     if(notifi.className === "badge blue"){
//         // notifi.className = "show_noti";
//         notifi.className = "seen";
//         notifi_icon.style.filter = "brightness(0) invert(1)";
//     }else{
//         notifi.className = "badge blue";
//         // notifi.className = "pending";
//         notifi_icon.style.filter ="none";
//     }
// }

const menuItems = document.querySelectorAll('.nav-link');

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    
    menuItems.forEach(otherItem => {
      if (otherItem !== item && otherItem.classList.contains('open')) {
        otherItem.classList.remove('open');
        hide();
        // show();
      }
    });

    item.classList.toggle('open');
  });
})

function hide(){
    var div1= document.getElementById("dropdown-contentss");
    let annou_icon = document.getElementById("a_img");
    let notifi = document.getElementById("notify1");
    var divs= document.getElementById("dropdown-contentss1");
    let notifi_icon = document.getElementById("n_img");
    let notifi1 = document.getElementById("notify");
    
    
    if(div1.classList.contains("seen")){
        div1.classList.remove("seen");
        
    
        notifi.className = "badge blue";
        // notifi.className = "pending";
        annou_icon.style.filter ="none";

    }else{
        divs.classList.remove("show");
        // divs.setAttribute('aria-expanded','false');
        
    
        notifi1.className = "badge blue";
        // notifi.className = "pending";
        notifi_icon.style.filter ="none";

    }
}



let notifi_icon = document.getElementById("n_img1");

notifi_icon.addEventListener("click", () => {

    var divs= document.getElementById("dropdown-contentss1");
    let notifi_icon = document.getElementById("n_img");
    let notifi = document.getElementById("notify");
    
    
    if(divs.classList.contains("show") ){
        divs.classList.remove("show");
        // divs.setAttribute('aria-expanded','false');
        
    
        notifi.className = "badge blue";
        // notifi.className = "pending";
        notifi_icon.style.filter ="none";

    }else{
        divs.classList.add("show");
       

        if(notifi.className === "badge blue"){
            // notifi.className = "show_noti";
            notifi.className = "seen";
            notifi_icon.style.filter = "brightness(0) invert(1)";    
        }

    }

}) 
// notifi_icon .onmouseover = function(){
//     let notifi_icon = document.getElementById("n_img");
//     let notifi = document.getElementById("notify");

//     if(notifi.className === "badge blue"){
//         // notifi.className = "show_noti";
//         notifi.className = "seen";
//         notifi_icon.style.filter = "brightness(0) invert(1)";    
//     }

// }
// notifi_icon.onmouseout = function(){
//         let notifi_icon = document.getElementById("n_img");
//         let notifi = document.getElementById("notify");
    
//         notifi.className = "badge blue";
//         // notifi.className = "pending";
//         notifi_icon.style.filter ="none";
       
// }


let annou_icon = document.getElementById("a_img1");

annou_icon.addEventListener("click", () => {

    var div1= document.getElementById("dropdown-contentss");
    let annou_icon = document.getElementById("a_img");
    let notifi = document.getElementById("notify1");
    
    
    if(div1.classList.contains("seen")){
        div1.classList.remove("seen");
        
    
        notifi.className = "badge blue";
        // notifi.className = "pending";
        annou_icon.style.filter ="none";

    }else{
        div1.classList.add("seen");
       

    if(notifi.className === "badge blue"){
        // notifi.className = "show_noti";
        notifi.className = "seen";
        annou_icon.style.filter = "brightness(0) invert(1)";    
    }

    }

}) 

// let annou_icon = document.getElementById("a_img1");



// annou_icon .onmouseover = function(){
//     let annou_icon=document.getElementById("a_img");
//     let notifi = document.getElementById("notify1");

//     if(notifi.className === "badge blue"){
//         // notifi.className = "show_noti";
//         notifi.className = "seen";
//         annou_icon.style.filter = "brightness(0) invert(1)";
//     }

// }
// annou_icon.onmouseout = function(){
//         let annou_icon=document.getElementById("a_img");
//         let notifi = document.getElementById("notify1");
    
//         notifi.className = "badge blue";
//         // notifi.className = "pending";
//         annou_icon.style.filter ="none";
// }



let parentElement  = document.getElementById("parent");

fetch("course.json")
.then(function (response) {
    return response.json();
  })
.then(function (data){
    // const response = fetch("http://localhost:8000/cards");
    // const data = response.json();

    let expired = document.createElement("div");
    expired.classList.add("expired");
    expired.innerHTML = "EXPIRED";

    data.forEach((card) => {
        let div = document.createElement("div");
        div.classList.add("card");

        let new_card = `
                <div class="card-body">
                    ${card.favourite ? `<img src="./assets/icons/favourite.svg" class="favourite" alt="favouriteicon" />` : ""}
                    <img src=${card.image} class="displayImg" alt="cardImage" />
                    <div class="card-desc">
                        <div class="card-name">${card.desc.title}</div>
                        <div class="card-text">${card.desc.subject}
                            <span class="hr">Grade ${card.desc.grade[0]}</span> 
                            <span class="green">+${card.desc.grade.length - 1}</span>
                        </div>
                        <div class="card-text">
                            <span class="bold">${card.desc.syllabus.units}</span> units 
                            <span class="bold">${card.desc.syllabus.lessons}</span> lessons
                            <span class="bold">${card.desc.syllabus.topics}</span> topics                           
                        </div>
                        <div class="select">
                            <select name="class">
                                ${card.desc.options.map((option) => {
                                    return `<option value=""> ${option} </option>`;
                                })}
                            </select>
                        </div>
                        <div class="card-text">${card.desc.students} Students
                            ${
                                card.desc.dates
                                    ? `<span class="hr">${card.desc.dates.start} - ${card.desc.dates.end}</span>`
                                    : ""
                            }
                        </div>
                    </div>
                </div>
                <div class="card-footer">
                    <a href="#" ${!card.footer[0] ? `class= 'disabled'` : ""}>
                        <img src="./assets/icons/preview.svg" alt="previewicon" />
                    </a>
                    <a href="#" ${!card.footer[1] ? `class= 'disabled'` : ""}>
                        <img src="./assets/icons/manage_course.svg" alt="courseicon" />
                    </a>
                    <a href="#" ${!card.footer[2] ? `class= 'disabled'` : ""}>
                        <img src="./assets/icons/grade_submissions.svg" alt="ubmissionsicon" />
                    </a>
                    <a href="#" ${!card.footer[3] ? `class= 'disabled'` : ""}>
                        <img src="./assets/icons/reports.svg" alt="reportsicon" />
                    </a>
                </div>
        `;

        div.innerHTML = new_card;
        if (card.expired) {
            div.appendChild(expired);
        }

        parentElement.appendChild(div);
    });
});



// var nav = document.getElementById('.navbar-nav1');
// navLinks.addEventListener('toggle', function (event) {

// 	// Only run if the dropdown is open
// 	if (!event.target.open) return;

// 	// Get all other open dropdowns and close them
// 	var dropdowns = nav.querySelectorAll('.navi[open]');
// 	Array.prototype.forEach.call(dropdowns, function (navbar) {
// 		if (navbar=== event.target) return;
// 		navbar.removeAttribute('open');
// 	});

// }, true);

// window.onclick=function(event){
//     if(!event.target.matches(".nav-link")){
//       var removeshow= document.getElementById("content");
//       if(removeshow.classList.contains("shows")){
//         removeshow.classList.contains("shows")
        
//       }

//     }
// }

// async function getCards() {
//     const response = await fetch("http://localhost:8000/cards");
//     const data = await response.json();

//     let expired = document.createElement("div");
//     expired.classList.add("expired");
//     expired.innerHTML = "EXPIRED";

//     data.forEach((card) => {
//         let div = document.createElement("div");
//         div.classList.add("card");

//         let new_card = `
//                 <div class="card-body">
//                     ${card.favourite ? `<img src="./assets/icons/favourite.svg" class="favourite" />` : ""}
//                     <img src=${card.image} class="displayImg" />
//                     <div class="card-desc">
//                         <div class="card-name">${card.desc.title}</div>
//                         <div class="card-text">${card.desc.subject}
//                             <span class="hr">Grade ${card.desc.grade[0]}</span> 
//                             <span class="green">+${card.desc.grade.length - 1}</span>
//                         </div>
//                         <div class="card-text">
//                             <span class="bold">${card.desc.syllabus.units}</span> units 
//                             <span class="bold">${card.desc.syllabus.lessons}</span> lessons
//                             <span class="bold">${card.desc.syllabus.topics}</span> topics                           
//                         </div>
//                         <div class="select">
//                             <select name="class">
//                                 ${card.desc.options.map((option) => {
//                                     return `<option value=""> ${option} </option>`;
//                                 })}
//                             </select>
//                         </div>
//                         <div class="card-text">${card.desc.students} Students
//                             ${
//                                 card.desc.dates
//                                     ? `<span class="hr">${card.desc.dates.start} - ${card.desc.dates.end}</span>`
//                                     : ""
//                             }
//                         </div>
//                     </div>
//                 </div>
//                 <div class="card-footer">
//                     <a href="#" ${!card.footer[0] ? `class= 'disabled'` : ""}>
//                         <img src="./assets/icons/preview.svg" />
//                     </a>
//                     <a href="#" ${!card.footer[1] ? `class= 'disabled'` : ""}>
//                         <img src="./assets/icons/manage_course.svg" />
//                     </a>
//                     <a href="#" ${!card.footer[2] ? `class= 'disabled'` : ""}>
//                         <img src="./assets/icons/grade_submissions.svg" />
//                     </a>
//                     <a href="#" ${!card.footer[3] ? `class= 'disabled'` : ""}>
//                         <img src="./assets/icons/reports.svg" />
//                     </a>
//                 </div>
//         `;

//         div.innerHTML = new_card;
//         if (card.expired) {
//             div.appendChild(expired);
//         }

//         gridContainer.appendChild(div);
//     });
// }

// getCards();


