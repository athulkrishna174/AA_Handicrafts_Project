let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    section.forEach(sec =>{
        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - 150;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
            });
        }
    });
}

document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });

// function loader(){
//     document.querySelector('.loader-container').classList.add('fade-out');
// }

// function fadeOut(){
//     setInterval(loader, 3000);
// }

// window.onload = fadeOut;

function isDefault(){
    const craftVal = document.querySelector('#craftName');
    if(craftVal.value == 'default'){
        craftVal.classList.add('default-craft');
    }else{
        craftVal.classList.remove('default-craft');
    }
}

const EMPTY_STRING = "";

const connectForm = document.querySelector('#connect-form'); 

function removeValidity(){
    const phnNumber = document.querySelector('#phnNumber');
    phnNumber.setCustomValidity('');
}

connectForm.addEventListener('submit', event =>{
    event.preventDefault();

    const name = document.querySelector('#name')
    const phnNumber = document.querySelector('#phnNumber');
    const craftName = document.querySelector('#craftName');
    const quantity = document.querySelector('#quantity');
    const email = document.querySelector('#email');
    const address = document.querySelector('#address');
    const message = document.querySelector('#message');

    let invalid = false;
    
    if(/^[0-9\s+\-]*$/.test(phnNumber.value)) {
        phnNumber.setCustomValidity('');   
    }else{
        phnNumber.setCustomValidity("Please fill valid number");
        invalid = true;
    }

    if (connectForm.reportValidity) {
        connectForm.reportValidity();
        if(invalid) return;
    } else {
        if(invalid) return;
    }

    let nameString = `Hai my name is ${name.value}, I have to know more about AA Handicrafts`;
    
    let craftString = EMPTY_STRING;
    if(craftName.value != null && craftName.value != EMPTY_STRING){
        if(quantity.value != null && quantity.value != EMPTY_STRING){
            craftString = ` and also want ${quantity.value} ${craftName.value}`;
        } else{
            craftString = ` and also want ${craftName.value}`;
        }     
    }

    const fullStop = `.`;
    const space = ' ';

    let contactMeString = `\r\nMy Phone: ${phnNumber.value}\r\n`;
    let emailString = EMPTY_STRING;
    let addrString = EMPTY_STRING;
    let messageString = EMPTY_STRING;

    if(email.value != null && email.value != EMPTY_STRING){
        emailString = `Email: ${email.value}\r\n`;
    }

    if(address.value != null && address.value != EMPTY_STRING){
        addrString = `Address: ${address.value}\r\n`;
    }
    if(message.value != null && message.value != EMPTY_STRING){
        messageString = `Message: ${message.value}\r\n`;
    }
       
    const content = nameString + craftString + fullStop + space + contactMeString + space + emailString + space + addrString + space + messageString;

    const num = +919544787413;

    const win = window.open(`https://wa.me/${num}?text=${content}`, '_blank');
    // alert(content);
});


function getCraftById(id){
    const crafts = {'banana': 'Banana Tree',
                    'palm': 'Palm Tree',
                    'bushel': 'Bushel'};
    return crafts[id];
}