let point = document.querySelectorAll('.point');
let img_slide = document.querySelectorAll('.img_slide');
let img_btn_left = document.querySelector('.img_btn_left');
let img_btn_right = document.querySelector('.img_btn_right');


img_slide[0].classList.add('activeImage');
point[0].classList.add('color');

let count = 0;

for (let i = 0; i < point.length; i++) {
    point[i].addEventListener('click', () => {
        for (let j = 0; j < img_slide.length; j++) {
            point[j].classList.remove('color');
            img_slide[j].classList.remove('activeImage');
        }
        count = i;
        img_slide[count].classList.add('activeImage');
        point[count].classList.add('color');
    
    })
}

img_btn_left.addEventListener('click', () => {
    for (i = 0; i < img_slide.length; i++) {
        point[i].classList.remove('color');
        img_slide[i].classList.remove('activeImage');
    }
    count--;
    if (count < 0) {
        count = img_slide.length - 1;
    }
    img_slide[count].classList.add('activeImage');
    point[count].classList.add('color');
})

img_btn_right.addEventListener('click', () => {
    for (i = 0; i < img_slide.length; i++) {
        point[i].classList.remove('color');
        img_slide[i].classList.remove('activeImage');
    }
    count++;
    if (count >= img_slide.length) {
        count = 0;
    }
    img_slide[count].classList.add('activeImage');
    point[count].classList.add('color');
})


function timeSlide() {
    for (i = 0; i < img_slide.length; i++) {
        point[i].classList.remove('color');
        img_slide[i].classList.remove('activeImage');
    }
    count++;
    if (count >= img_slide.length) {
        count = 0;
    }
    img_slide[count].classList.add('activeImage');
    point[count].classList.add('color');
}

let second = 1000 * 6;
let timeImege = setInterval(() => timeSlide(), second);



// переменные выподающего меню
const btn_menu = document.getElementById('btn_menu');
const menu_list = document.getElementById('menu_list');

// выподающее меню
btn_menu.addEventListener("click", () => { 
    document.body.style.overflow = 'hidden'; 
    if (menu_list.classList.contains('onList') == true) {
        menu_list.classList.remove('onList');
    } 
    else {
        
        menu_list.classList.add('onList');
    }
})
btn_menu.addEventListener("click", () => { 
    document.body.style.overflow = 'hidden'; 
    if (menu_list.classList.contains('onList') == true) {
        document.body.style.overflow = 'hidden';
    } 
    else {
        document.body.style.overflow = '';
    }
})
// переменные главная
const link_main_mob = document.createElement('a');
// link_catalog_mob.style.textDecoration = 'none';
link_main_mob.href = "index.html";
menu_list.appendChild(link_main_mob); 
const mainSpan = document.createElement('span');
mainSpan.classList.add('menu_list_main');
link_main_mob.appendChild(mainSpan);

// переменные каталог
const link_catalog_mob = document.createElement('a');
// link_catalog_mob.style.textDecoration = 'none';
link_catalog_mob.href = "catalog.html";
menu_list.appendChild(link_catalog_mob);
const catalogSpan = document.createElement('span');
catalogSpan.classList.add('menu_list_catalog');
link_catalog_mob.appendChild(catalogSpan);
// переменные о нас
const link_about_mob = document.createElement('a');
// link_about_mob.style.textDecoration = 'none';
link_about_mob.href = "about.html";
menu_list.appendChild(link_about_mob);
const aboutSpan = document.createElement('span');
aboutSpan.classList.add('menu_list_about');
link_about_mob.appendChild(aboutSpan);
// переменные доставка
const link_delivery_mob = document.createElement('a');
link_delivery_mob.href = 'delivery.html';
menu_list.appendChild(link_delivery_mob);
const deliverySpan = document.createElement('span');
deliverySpan.classList.add('menu_list_delivery');
link_delivery_mob.appendChild(deliverySpan);
// переменные контакты
const link_contacts_mob = document.createElement('a');
link_contacts_mob.href = 'contacts.html';
menu_list.appendChild(link_contacts_mob);
const contactsSpan = document.createElement('span');
contactsSpan.classList.add('menu_list_contacts');
link_contacts_mob.appendChild(contactsSpan);
// переменные новости
const link_news_mob = document.createElement('a');
link_news_mob.href =  'news.html';
menu_list.appendChild(link_news_mob);
const newsSpan = document.createElement('span');
newsSpan.classList.add('menu_list_news');
link_news_mob.appendChild(newsSpan);
// переменные сотрудничество
const link_cooperation_mob = document.createElement('a');
link_cooperation_mob.href = 'cooperation.html';
menu_list.appendChild(link_cooperation_mob);
const cooperationSpan = document.createElement('span');
cooperationSpan.classList.add('menu_list_cooperation');
link_cooperation_mob.appendChild(cooperationSpan);
// переменные акции
const link_stocks_mob = document.createElement('a');
link_stocks_mob.href = 'stocks.html';
menu_list.appendChild(link_stocks_mob);
const stocksSpan = document.createElement('span');
stocksSpan.classList.add('menu_list_stocks');
link_stocks_mob.appendChild(stocksSpan);


// создание меню  
btn_menu.addEventListener('click', () => {  
    if (catalogSpan.textContent.includes('КАТАЛОГ') == false &&
aboutSpan.textContent.includes('О НАС') == false && 
deliverySpan.textContent.includes('ДОСТАВКА') == false &&
contactsSpan.textContent.includes('КОНТАКТЫ') == false &&
newsSpan.textContent.includes('НОВОСТИ') == false &&
cooperationSpan.textContent.includes('ЮРИДИЧЕСКИМ ЛИЦАМ') == false &&
stocksSpan.textContent.includes('АКЦИИ') == false &&
mainSpan.textContent.includes('ГЛАВНАЯ') == false) {
    mainSpan.textContent = 'ГЛАВНАЯ',
    catalogSpan.textContent = 'КАТАЛОГ',
    aboutSpan.textContent = 'О НАС',
    deliverySpan.textContent = 'ДОСТАВКА',
    contactsSpan.textContent = 'КОНТАКТЫ',
    newsSpan.textContent = 'НОВОСТИ',
    cooperationSpan.textContent = 'ЮРИДИЧЕСКИМ ЛИЦАМ'           
    stocksSpan.textContent = 'АКЦИИ';            
    } 
    else {
        mainSpan.textContent = '',
        catalogSpan.textContent = '',
        aboutSpan.textContent = '',
        deliverySpan.textContent = '',
        contactsSpan.textContent = '',
        newsSpan.textContent = '',
        cooperationSpan.textContent = '',
        stocksSpan.textContent = '';
    }
}) 


    
   













