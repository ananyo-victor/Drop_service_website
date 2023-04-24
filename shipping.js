function Open_billing(){
    const Billing_form = document.getElementById('Billing_form');
    Billing_form.classList.remove('hidden');
    const active = document.getElementById("Same");
    active.classList.remove("bg-gray-800");
    const passive = document.getElementById("Different");
    passive.classList.add("bg-gray-800");
}
function Activate(){
    const active = document.getElementById("Same");
    active.classList.add("bg-gray-800");
    const Billing_form = document.getElementById('Billing_form');
    Billing_form.classList.add('hidden');
    const passive = document.getElementById("Different");
    passive.classList.remove("bg-gray-800");
}
// JavaScript code to handle radio input group
const colorRadios = document.getElementsByName("Billing");

for (let i = 0; i < colorRadios.length; i++) {
  colorRadios[i].addEventListener("click", function() {
    for (let j = 0; j < colorRadios.length; j++) {
      if (colorRadios[j] !== this) {
        colorRadios[j].checked = false;
      }
    }
  });
}
