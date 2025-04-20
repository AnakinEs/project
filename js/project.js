 let tooltipElem;
 let stat = false;
 let hint;
 let meaning;

    document.onclick = function(event) {
      let target = event.target;
      
      if (event.target.closest('.hint') || event.target.closest('.meaning')){
        if(!stat) {
          if(event.target.closest('.hint')){
            hint = event.target.closest('.hint');
            hint.style.backgroundColor = 'rgb(255, 221, 127)'; // темно-желтый "#fcc934" убрал, сделал прозрачный
          }else if(event.target.closest('.meaning')){
            meaning = event.target.closest('.meaning'); 
            meaning.style.backgroundColor = '#ebccff'; // темно-фиолетовый "#e3baff" убрал, сделал прозрачный
          }
          func();
        } else {
          if(hint){
            tooltipElem.remove();
            hint.style.backgroundColor = "rgb(255, 237, 186)"; // светло-желтый
          }else if(meaning){
            tooltipElem.remove();
            meaning.style.backgroundColor = "#f2deff"; // светло-фиолетовый
          }
          
          if(event.target.closest('.hint')){
            hint = event.target.closest('.hint');
            hint.style.backgroundColor = 'rgb(255, 221, 127)'; // темно-желтый 
          }else if(event.target.closest('.meaning')){
            meaning = event.target.closest('.meaning');
            meaning.style.backgroundColor = '#ebccff'; // темно-фиолетовый "#e3baff" убрал, сделал прозрачный
          }
          
          func(); 
        }  
      }else if (!((event.target.closest('.hint')) || (event.target.closest('.meaning')) || (event.target.closest('.tooltip')))){
        if (stat){
          tooltipElem.remove();
          stat = false;
          if(hint){
            hint.style.backgroundColor = "rgb(255, 237, 186)"; // светло-желтый
            hint = null;
          }else if(meaning){
            meaning.style.backgroundColor = "#f2deff";
            meaning = null;
          }
          return;
         }
      }

      // ...создадим элемент для подсказки
      function func() {
  
        // если у нас есть подсказка...
        let tooltipHtml = target.dataset.tooltip;
        if (!tooltipHtml) return;
  
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
  
        let top = coords.top - tooltipElem.offsetHeight - 20;
        if (top < 0) { // если подсказка не помещается сверху, то отображать её снизу
          top = coords.top + target.offsetHeight + 20;
        }
        
        tooltipElem.style.left = left + 'px';
        tooltipElem.style.top = top + 'px';
        stat = true;
      }
    };

    

     

    
	
	
	
	
