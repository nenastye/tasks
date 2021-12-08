send.addEventListener("click", fnc);
function fnc(){
    if(isNaN(parseInt(p1.value)) || isNaN(parseInt(p0.value))){
      alert('Введите верные данные');
      return;
    }
    I.value = 1 + (((parseInt(p1.value)-parseInt(p0.value))/parseInt(p0.value))*100);
}