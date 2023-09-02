  
  function increment(e) {
    var input = document.getElementById(e);
    input.value = parseInt(input.value) + 1;
  }
  
  function decrement(e) {
    var input = document.getElementById(e);
    if (parseInt(input.value) > 0) {
      input.value = parseInt(input.value) - 1;
    }
  }
  
function remove(e){
  const btn = document.getElementById(e);
  btn.classList.add('hidden');
}

function side_right(){
    const icon = document.getElementById('right-sidebar');
    icon.classList.toggle('translate-x-full');
    icon.classList.toggle('-translate-x-0');
}
function side_left(){
  const icon = document.getElementById('left-sidebar');
  icon.classList.toggle('-translate-x-full');
    icon.classList.toggle('translate-x-0');
}