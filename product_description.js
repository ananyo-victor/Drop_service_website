    function decrement(e) {
    const btn = e.target.parentNode.parentElement.querySelector(
    'button[data-action="decrement"]'
    );
    const target = btn.nextElementSibling;
    let value = Number(target.value);
    value--;
    target.value = value;
  }

    function increment(e) {
    const btn = e.target.parentNode.parentElement.querySelector(
    'button[data-action="decrement"]'
    );
    const target = btn.nextElementSibling;
    let value = Number(target.value);
    value++;
    target.value = value;
  }

    const decrementButtons = document.querySelectorAll(
    `button[data-action="decrement"]`
    );

    const incrementButtons = document.querySelectorAll(
    `button[data-action="increment"]`
    );

  decrementButtons.forEach(btn => {
        btn.addEventListener("click", decrement);
  });

  incrementButtons.forEach(btn => {
        btn.addEventListener("click", increment);
  });
  
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