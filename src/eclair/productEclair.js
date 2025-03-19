let section1 = document.getElementById('section1')

let divContainer = document.createElement('div');
divContainer.classList.add('container');

let descript = document.createElement('div');
descript.classList.add('desc');


document.body.prepend(section1, section2, divContainer, descript, sectionLast);

let divRow = document.createElement('div');
divRow.classList.add('row');
divContainer.append(divRow);

let  blockGlobalCatalog = document.createElement('div');
blockGlobalCatalog.id = 'blockGlobalCatalog';
blockGlobalCatalog.classList.add('d-sm-none');
divRow.append(blockGlobalCatalog);

let descr = '';
let indexDesc = 0;
let indexDivBlock = 0;
let indexNameDesc = 0;
let indexMassa = 0;
let summaD = 0;
let indexPrice = 0;
let indexSumma = 0;
function getEclair(arr) { 
  
  let sumElement = '';
  for (let i = 0; i < arr.length; i++) {
    indexDesc++; 
    indexDivBlock++;
    indexNameDesc++;
    indexMassa++;
    indexPrice++;
    indexSumma++;
    sumElement += `
      <div class="element__catalog" onclick="fun(id1Block${indexDivBlock}, id2NameDesc${indexNameDesc}, id3DescImg${indexDesc}, id${arr[i].id}, id4Sum${indexSumma}, id5Massa${indexMassa}, id6IndPrice${indexPrice})">
        <span class="element__name">${arr[i].name}</span>
        <img class="element__img" src="${arr[i].img}">
        <span id="id6IndPrice${indexPrice}" class="element__prise">Цена за кг: ${arr[i].price} BYN</span>
        <div id="id1Block${indexDivBlock}" class="block__desc d-none">
          <div id="idClose"><img id="imgClose" src="images/icons/closeImg.png" width="30px"></div>
          <div class="wrapper">
            <span id="id2NameDesc${indexNameDesc}" class="nameDesc d-none">${arr[i].nameDesc}</span>  
            <img id="id3DescImg${indexDesc}" src="${arr[i].img2}" class="imgTwo d-none">
            <span id="id${arr[i].id}" class="descText d-none">${arr[i].description}</span>
            <span id="id5Massa${indexMassa}" class="massaDesc d-none">Вес упаковки: ${arr[i].massa} кг</span>
            <span id ="id4Sum${indexSumma}" class="summaDesc d-none">Стоимость упаковки: ${totalPrice(eclairCatalog[i].massa, eclairCatalog[i].price)} BYN</span>
          </div>  
        </div>  
      </div>
     `;  
     
     
  }
   
  blockGlobalCatalog.innerHTML = sumElement ;
  
}


function fun(id1, id2, id3, id, id4, id5, id6) {
  
  if (id.classList.contains('d-none') && id1.classList.contains('d-none') && id2.classList.contains('d-none') && id3.classList.contains('d-none') && id4.classList.contains('d-none') && id5.classList.contains('d-none')) {
   document.body.style.overflow = 'hidden';
   id.classList.remove('d-none');
   id1.classList.remove('d-none');
   id2.classList.remove('d-none');
   id3.classList.remove('d-none');
   id4.classList.remove('d-none');
   id5.classList.remove('d-none');
   
  }
    else {
      document.body.style.overflow = '';
      id.classList.add('d-none');
      id1.classList.add('d-none'); 
      id2.classList.add('d-none'); 
      id3.classList.add('d-none'); 
      id4.classList.add('d-none'); 
      id5.classList.add('d-none'); 
      

    }
   
}

function totalPrice(el1, el2) {
  
  let summ = el1  * el2 ;
  return summ.toFixed(2);
}

totalPrice(eclairCatalog[`${indexMassa}`].massa, eclairCatalog[`${indexPrice}`].price);

  
getEclair(eclairCatalog);













  






