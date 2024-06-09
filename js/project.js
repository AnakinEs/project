let tooltipElem;

document.onmouseover = function(event) {
  let target = event.target;

  // если у нас есть подсказка...
  let tooltipHtml = target.dataset.tooltip;
  if (!tooltipHtml) return;

  // ...создадим элемент для подсказки

  tooltipElem = document.createElement('div');
  tooltipElem.className = 'tooltip';
  tooltipElem.innerHTML = tooltipHtml;
  document.body.append(tooltipElem);

  // спозиционируем его сверху от аннотируемого элемента (top-center)
  let coords = target.getBoundingClientRect();
  let tooltipCoords = tooltipElem.getBoundingClientRect();

  let elem = document.getElementById('content');

 let left; 

  if(+elem.offsetWidth.toFixed(2) <= 500){
    left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
  } else {
    left = 0;
  }

  
  let right = elem.offsetWidth - tooltipCoords.right;
  
  
  if (left <= 0) left = 0; // не заезжать за левый край окна

  // if (right <= 0) left = 0; // если заезжает за правый край окна, то сдвигать на левый край
  
    
  

   

  let top = coords.top - tooltipElem.offsetHeight - 5;
  if (top < 0) { // если подсказка не помещается сверху, то отображать её снизу
    top = coords.top + target.offsetHeight + 5;
  }

  tooltipElem.style.left = left + 'px';
  tooltipElem.style.top = top + 'px';
};

document.onmouseout = function(e) {

  if (tooltipElem) {
    tooltipElem.remove();
    tooltipElem = null;
  }

};




