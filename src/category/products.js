let box_main_mob = document.querySelector('.box_main_mob'); 
let div = document.querySelector('#products');
let span__catalog__category = document.createElement('span');
span__catalog__category.classList.add('catalog__category');
span__catalog__category.textContent = 'Каталог >> Категории товара:';
div.appendChild(span__catalog__category);
let divCategory = document.createElement('div');
divCategory.classList.add('divCategory');
box_main_mob.appendChild(divCategory);


let divCategoryProduct = '';





function getCatalog(CATALOG) {
  
  for (let i = 0; i < CATALOG.length; i++) {
    divCategoryProduct += `
      <a class="link" href="${CATALOG[i].link}">
      <div class="element">
      <span class="span__name">${CATALOG[i].name}</span><br>
      <img class="imag" src="${CATALOG[i].img}"<br>
      <button class="element__btn">Перейти</button>
      </div>
      </a>
      `;    
  }
    let categoryElement = `<div class='category__element'>
    ${divCategoryProduct}
  </div>`
  divCategory.innerHTML = categoryElement;
  

}
getCatalog(CATALOG);
















  




