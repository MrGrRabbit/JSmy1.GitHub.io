/*alert("Нажми кнопку!");
function myMove() {
  var elem = document.getElementById("myAnimation");
  var pos = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    }else {
      pos++;
      elem.style.top = pos + 'px';
      elem.style.left = pos + 'px';
    }
  }
}
*/
//Пример анимации :
corowV1.onclick = function() {
  let start = Date.now();

  let timer = setInterval(function() {
    let timePassed = Date.now() - start;

    corowV1.style.left = timePassed / 5 + 'px';

    if (timePassed > 2000) clearInterval(timer);

  }, 20);
}
