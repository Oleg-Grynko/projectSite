let section1 = document.querySelector('#section1');

let divContainer = document.createElement('div');
divContainer.classList.add('container');

let descript = document.createElement('div');
descript.classList.add('desc');

document.body.prepend(section1, divContainer, descript);

let divRow = document.createElement('div');
divRow.classList.add('row');
divContainer.append(divRow);

let  blockGlobalCatalog = document.createElement('div');
blockGlobalCatalog.id = 'blockGlobalCatalog';
blockGlobalCatalog.classList.add('d-sm-none');
divRow.append(blockGlobalCatalog);


let ar;
function getEclair(arr) {
  
  let sumElementEclair = '';
  for (let i = 0; i < arr.length; i++) {
    sumElementEclair += `
      <div class="element__catalog">
        <span class="element__name">${arr[i].name}</span>
        <img class="element__img" src="${arr[i].img}">
        <span class="element__prise">Цена: ${arr[i].price} BYN</span>
        <button class="btn">Подробнее</button> 
      </div>
     `;

    

  }
  

  blockGlobalCatalog.innerHTML = sumElementEclair;

}

 function getColor() {
    const colors = '#49A16C';
    }