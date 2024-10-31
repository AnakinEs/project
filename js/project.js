 let tooltipElem;

    document.onclick = function(event) {
      let target = event.target;

      if (!((event.target.closest('.hint')) || (event.target.closest('.meaning')) || (event.target.closest('.tooltip')))){
        tooltipElem.remove();
        tooltipElem = '';
      }else{
        func();
      }

      function func() {
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

      let elem = document.getElementById('content');

      // let right = elem.offsetWidth - tooltipElem.offsetWidth;
      let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
      if (left < 0) left = 0; // не заезжать за левый край окна
      if (tooltipElem.right == 0) left = (elem.offsetWidth - tooltipElem.offsetWidth)-8; // не заезжать за правый край окна

      let top = coords.top - tooltipElem.offsetHeight - 5;
      if (top < 0) { // если подсказка не помещается сверху, то отображать её снизу
        top = coords.top + target.offsetHeight + 5;
      }

      tooltipElem.style.left = left + 'px';
      tooltipElem.style.top = top + 'px';
      }
      
    };

    

     

    
	
	
	
	
