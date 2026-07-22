var fullNameinput = document.getElementById("fullname");
var phoneInput = document.getElementById("phonenumber");
var adressInput = document.getElementById("exampleInputaddress");
var selectInput = document.getElementById("selectinput");
var notesInput = document.getElementById("notesTextarea");
var favoritesInput = document.getElementById("favoriteCheck");
var emergencyInput = document.getElementById("emergencyCheck");
var firstLetter = document.getElementById("letter");
var emailInput = document.getElementById("exampleInputEmail1");
var searchINput = document.getElementById("exampleDataList");
var photoInput = document.getElementById("img-btn1");



phoneInput.addEventListener("change",function(){

var file=phoneInput.files[i]

})









var informationlist = []
if (localStorage.getItem("information") !== null) {

    informationlist = JSON.parse(localStorage.getItem("information"))

display()
}
function addinfo() {
   
    
 if(fullNameinput.classList.contains("is-valid") && emailInput.classList.contains("is-valid") && phoneInput.classList.contains("is-valid")){
       var information = {
        letter: fullNameinput.value[0] + fullNameinput.value[1],
        name: fullNameinput.value,
        phone: String(phoneInput.value),
        email: emailInput.value,
        adress: adressInput.value,
        select: selectInput.value,
        notes: notesInput.value,
        favorites: favoritesInput.checked,
        emergency: emergencyInput.checked,
      

    }

    informationlist.push(information)
    localStorage.setItem("information", JSON.stringify(informationlist))
    display()
return true
 }else{

    Swal.fire({
  icon: "error",
  title: "invalid name",
  text: "Name should contain only letters and spaces (2-50 characters)!",
});
return false
 }
}


function display() {
    var temp = "";
    for (var i = 0; i < informationlist.length; i++) {

var emergencyTag;
if(informationlist[i].emergency === true){
    emergencyTag = `<span class=" py-0 px-0 heart-pulse"><i class="fa-solid fa-heart-pulse fa-s p-0 "></i> Emergency</span>`
} else {
    emergencyTag = ""
}

        var starClass;
        var starColorStyle;
        if (informationlist[i].favorites === true) {
            starClass = "fa-solid"
            starColorStyle = "#FEBD11"
        } else {
            starClass = "fa-regular"
            starColorStyle = "#797F94"
        }

        var starBadgeDisplay;
        if (informationlist[i].favorites === true) {
            starBadgeDisplay = "flex"

        } else {

            starBadgeDisplay = "none"
        }
        var pulseBadgeDisplay;
        if (informationlist[i].emergency === true) {
            pulseBadgeDisplay = "flex"

        } else {
            pulseBadgeDisplay = "none"
        }
        var heartClass;
        var heartColorStyle;
        if (informationlist[i].emergency === true) {
            heartClass = "fa-solid fa-heart-pulse"
            heartColorStyle = "#FF2056"
        } else {
            heartClass = "fa-regular fa-heart"
            heartColorStyle = "#797F94"
        }

        var groupTag;
        if (informationlist[i].select === "select a groub") {
            groupTag = ""
        } else {
            groupTag = informationlist[i].select
        }
if(informationlist.length===0){
    document.getElementById("nocontact").style.display="flex"
}else{
     document.getElementById("nocontact").style.display="none"
}
        temp += `
<div class="contact-details  rounded-4 bg-white ">
              <div class=" d-flex bg-white mt-2">
                <div class="style position-relative m-2 bg-white ">
<span class=" position-absolute span0" style="display: ${starBadgeDisplay}"><i class="fa-solid fa-star fa-xs "></i></span>
                ${informationlist[i].letter}
                <span class=" position-absolute span1" style="display:${pulseBadgeDisplay}"><i class="fa-solid fa-heart-pulse fa-xs"></i></span>
                </div>
                <div class="mt-2 bg-white">
                  <h6 class="p-0 m-0">${informationlist[i].name}</h6>
                  <i class="fa-solid fa-phone blue-phone me-2 "></i><span class="n-color">${informationlist[i].phone}</span>
                </div>
              </div>
              <div class="d-flex flex-column bg-white">
                <div class="mt-3"> <i class="fa-solid fa-envelope me-1 ms-2"></i><span class="n-color">${informationlist[i].email}</span>
                </div>
                <div class="mt-3"> <i class="fa-solid fa-location-dot me-1 ms-2"></i><span
                    class="n-color">${informationlist[i].adress}</span></div>
<div class="d-flex">
              
                <p class="mt-3 ms-2 ${groupTag}">${groupTag}</p>
                ${emergencyTag}
                 </div>
                <div>
                
                     <hr class="mb-0" >
                  <div class="icons d-flex justify-content-between align-items-center pt-2 ">
                    <div  class="ms-2 mt-2">
                 <a href="tel:${informationlist[i].phone}">
    <i class="fa-solid fa-phone green-phone me-3 mb-3"></i>
                </a>
                 <a href="mailto:${informationlist[i].email}">
                  <i class="fa-solid fa-envelope mb-3"></i>
                  </a>
                    </div>
                    <div class="">
                      <i class="fa-regular fa-star b-star grey0 ${starClass}  " style="color: ${starColorStyle}" onclick="toggleFavorite(${i})"></i>
                      <i class=" grey0  ${heartClass} "   style="color: ${heartColorStyle}" onclick="toggleemergency(${i})" ></i>
                      <i class="fa-solid fa-pen grey0 "  onclick="editinfo(${i}) " data-bs-toggle="modal" data-bs-target="#my-modal"></i>
                      <i class="fa-solid fa-trash grey0  " onclick="deleteinfo(${i})" ></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>`


        displayFavorites()
        displayemergancy()


    }
    var favCount = 0;
    for (var i = 0; i < informationlist.length; i++) {
        if (informationlist[i].favorites === true) {
            favCount++
        }
    }




    document.getElementById("form-info").innerHTML = temp
    document.getElementById("favCount").innerHTML = favCount
    document.getElementById("favCount0").innerHTML = informationlist.length
    document.getElementById("organizecontact").innerHTML = informationlist.length



    var emergCount = 0;
    for (var i = 0; i < informationlist.length; i++) {
        if (informationlist[i].emergency === true) {
            emergCount++
        }
    }

    document.getElementById("form-info").innerHTML = temp
    document.getElementById("favCount").innerHTML = favCount
    document.getElementById("favCount0").innerHTML = informationlist.length
    document.getElementById("emergCount").innerHTML = emergCount


}

function displayFavorites() {
    var temp = "";

    for (var i = 0; i < informationlist.length; i++) {
        var starBadgeDisplay;
        if (informationlist[i].favorites === true) {
            starBadgeDisplay = "flex"
        } else {
            starBadgeDisplay = "none"
        }

        var pulseBadgeDisplay;
        if (informationlist[i].emergency === true) {
            pulseBadgeDisplay = "flex"
        } else {
            pulseBadgeDisplay = "none"
        }

        if (informationlist[i].favorites === true) {
            temp += `<div class="container">
              <div class="row">
                <div class=" col-12 col-m-6 fav-color">
             <div class="d-flex justify-content-between align-items-center" >
           <div class="style m-2 bg-white">
    ${informationlist[i].letter}
</div>
                <div class="me-auto d-flex flex-column justify-content-center align-items-start">
                  <h6 class="p-0 m-0">${informationlist[i].name}</h6>
                  <span class="p-0 m-0">${informationlist[i].phone}</span>
                </div>
                 <div class="mt-2 ">
                <a href="tel:${informationlist[i].phone}">
    <i class="fa-solid fa-phone green-phone me-2"></i>
</a>
                </div>
                </div>
                </div>
                </div>
              </div>`
        }
    }

    if(temp === ""){
        temp = `<p class="text-center mt-3 pt-3 grey-color">No favorites yet</p>`
    }

    document.getElementById("favoritesList").innerHTML = temp
    document.getElementById("emergencyList").innerHTML = temp
}
function displayemergancy() {
    var temp = "";

    for (var i = 0; i < informationlist.length; i++) {
        var starBadgeDisplay;
        if (informationlist[i].emergency === true) {
            starBadgeDisplay = "flex"
        } else {
            starBadgeDisplay = "none"
        }

        var pulseBadgeDisplay;
        if (informationlist[i].emergency === true) {
            pulseBadgeDisplay = "flex"
        } else {
            pulseBadgeDisplay = "none"
        }

        if (informationlist[i].emergency === true) {
            temp += `<div class="container">
              <div class="row">
                <div class=" col-12 col-m-6 fav-color">
             <div class="d-flex justify-content-between align-items-center" >
           <div class="style position-relative m-2 bg-white">
  
    ${informationlist[i].letter}
   
</div>
                <div class="me-auto d-flex flex-column justify-content-center align-items-start">
                  <h6 class="p-0 m-0">${informationlist[i].name}</h6>
                  <span class="p-0 m-0">${informationlist[i].phone}</span>
                </div>
                 <div class="mt-2 ">
                 
                  
                 <a href="tel:${informationlist[i].phone}">
    <i class="fa-solid fa-phone green-phone me-2"></i>
</a>
                </div>
                </div>
                </div>
                </div>
              </div>`
        }
    } if(temp === ""){
        temp = `<p class="text-center mt-3 pt-3 grey-color">No emergency contacts</p>`
    }

    document.getElementById("emergencyList").innerHTML = temp
}


var savecontact = document.getElementById("save")
savecontact.addEventListener("click", function () {

    savebtn()

})

function search(){
    var temp = "";

    var searchvalue =searchINput.value.toLowerCase()

    for(var i=0;i< informationlist.length;i++){
        if(informationlist[i].name.toLowerCase().startsWith(searchvalue) || String(informationlist[i].phone).startsWith(searchvalue)){
              var starClass;
            var starColorStyle;
            if(informationlist[i].favorites === true){
                starClass = "fa-solid"
                starColorStyle = "#FEBD11"
            } else {
                starClass = "fa-regular"
                starColorStyle = "#797F94"
            }

            var heartClass;
            var heartColorStyle;
            if(informationlist[i].emergency === true){
                heartClass = "fa-solid fa-heart-pulse"
                heartColorStyle = "#FF2056"
            } else {
                heartClass = "fa-regular fa-heart"
                heartColorStyle = "#797F94"
            }

            var groupTag;
            if(informationlist[i].select === "select a groub"){
                groupTag = ""
            } else {
                groupTag = informationlist[i].select
            }
              var starBadgeDisplay;
        if (informationlist[i].favorites === true) {
            starBadgeDisplay = "flex"
        } else {
            starBadgeDisplay = "none"
        }
        
           var pulseBadgeDisplay;
        if (informationlist[i].emergency === true) {
            pulseBadgeDisplay = "flex"
        } else {
            pulseBadgeDisplay = "none"
        }
   
     temp += `
<div class="contact-details  rounded-4 bg-white ">
              <div class=" d-flex bg-white mt-2">
                <div class="style position-relative m-2 bg-white ">
<span class=" position-absolute span0" style="display: ${starBadgeDisplay}"><i class="fa-solid fa-star fa-xs "></i></span>
                ${informationlist[i].letter}
                <span class=" position-absolute span1" style="display:${pulseBadgeDisplay}"><i class="fa-solid fa-heart-pulse fa-xs"></i></span>
                </div>
                <div class="mt-2 bg-white">
                  <h6 class="p-0 m-0">${informationlist[i].name}</h6>
                  <i class="fa-solid fa-phone blue-phone me-2 "></i><span class="n-color">${informationlist[i].phone}</span>
                </div>
              </div>
              <div class="d-flex flex-column bg-white">
                <div class="mt-3"> <i class="fa-solid fa-envelope me-1 ms-2"></i><span class="n-color">${informationlist[i].email}</span>
                </div>
                <div class="mt-3"> <i class="fa-solid fa-location-dot me-1 ms-2"></i><span
                    class="n-color">${informationlist[i].adress}</span></div>
<div class="d-flex">
              
                <p class="mt-3 ms-2 ${groupTag}">${groupTag}</p>
                 </div>
                <div>
                     <hr class="mb-0" >
                  <div class="icons d-flex justify-content-between align-items-center pt-2 ">
                    <div  class="ms-2 mt-2">
                      <i class="fa-solid fa-phone green-phone me-3 mb-3  "></i>
                      <i class="fa-solid fa-envelope mb-3"></i>
                    </div>
                    <div class="">
                      <i class="fa-regular fa-star b-star grey0 ${starClass}  " style="color: ${starColorStyle}" onclick="toggleFavorite(${i})"></i>
                      <i class=" grey0  ${heartClass} "   style="color: ${heartColorStyle}" onclick="toggleemergency(${i})" ></i>
                      <i class="fa-solid fa-pen grey0 "  onclick="editinfo(${i}) " data-bs-toggle="modal" data-bs-target="#my-modal"></i>
                      <i class="fa-solid fa-trash grey0  " onclick="deleteinfo(${i})" ></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>`

 }
}
       document.getElementById("form-info").innerHTML= temp

}





function savebtn() {
    if (currentindex == null) {
      var success=  addinfo()
      if(success === true){
          Swal.fire({
            title: "Added!",
            icon: "success",
            draggable: true
        });

          var modalElement = document.getElementById("my-modal");
            var modalInstance = bootstrap.Modal.getInstance(modalElement);
            modalInstance.hide();
            clear()
      }
      
    } else {

        updateinfo()
        Swal.fire({
            title: "Updated!",
            icon: "success",
            draggable: true
        });
        currentindex = null
    }

    var modalElement = document.getElementById("my-modal");
    var modalInstance = bootstrap.Modal.getInstance(modalElement);
    modalInstance.hide();
    display()
   
    clear()
}

function toggleFavorite(index) {
    informationlist[index].favorites = !informationlist[index].favorites

    localStorage.setItem("information", JSON.stringify(informationlist))
    display()

}
function toggleemergency(index) {
    informationlist[index].emergency = !informationlist[index].emergency

    localStorage.setItem("information", JSON.stringify(informationlist))
    display()

}

function deleteinfo(index) {
    informationlist.splice(index, 1)
    Swal.fire({
        title: "Delete Contact?",
        text: "Are you sure you want to delete  this? This action cannot be undone.!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#606773",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) Swal.fire({
            title: "Deleted!",
            text: "contact has been deleted.",
            icon: "success"
        });
    });
    localStorage.setItem("information", JSON.stringify(informationlist))
    display()
}
function clear() {
    fullNameinput.value = null
    phoneInput.value = null
    emailInput.value = null
    adressInput.value = null
    selectInput.value = null
    notesInput.value = null
    favoritesInput.checked = false
    emergencyInput.checked = false
    fullNameinput.classList.remove("is-valid", "is-invalid"),
     phoneInput.classList.remove("is-valid", "is-invalid"),
      emailInput.classList.remove("is-valid", "is-invalid"),
       adressInput.classList.remove("is-valid", "is-invalid"),
        selectInput.classList.remove("is-valid", "is-invalid"),
         notesInput.classList.remove("is-valid", "is-invalid")
}





var currentindex = null;

function editinfo(index) {
    currentindex = index
    fullNameinput.value = informationlist[index].name
    phoneInput.value = informationlist[index].phone
    emailInput.value = informationlist[index].email
    adressInput.value = informationlist[index].adress
    selectInput.value = informationlist[index].select
    notesInput.value = informationlist[index].notes
    favoritesInput.checked = informationlist[index].favorites
    emergencyInput.checked = informationlist[index].emergency

}
function updateinfo() {
    informationlist[currentindex].name = fullNameinput.value;
    informationlist[currentindex].phone = Number(phoneInput.value),
        informationlist[currentindex].email = emailInput.value,
        informationlist[currentindex].adress = adressInput.value,
        informationlist[currentindex].select = selectInput.value,
        informationlist[currentindex].notes = notesInput.value,
        informationlist[currentindex].favorites = favoritesInput.checked,
        informationlist[currentindex].emergency = emergencyInput.checked,
        localStorage.setItem("information", JSON.stringify(informationlist))
    display()
}
function validate(element){
var regex ={

fullname:/^[a-zA-Z ]{2,15}$/i,
phonenumber:/^01(0|2|5|1)[0-9]{8}$/,
exampleInputEmail1:/^[a-zA-Z0-9.]{2,20}@(yahoo|outlook|gmail)\.com$/,
exampleInputaddress:/^[a-zA-Z0-9 ]{5,100}$/,
notesTextarea:/^[a-zA-Z0-9 .,#"'!? ]{0,256}$/,
}
if(regex[element.id].test(element.value)){

element.classList.add("is-valid");
element.classList.remove("is-invalid");
element.nextElementSibling.classList.add("d-none")
}else{
element.classList.add("is-invalid");
element.classList.remove("is-valid");
element.nextElementSibling.classList.remove("d-none")
}
}