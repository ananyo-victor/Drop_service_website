function Open_billing(){
    const Billing_form = document.getElementById('Billing_form');
    Billing_form.classList.toggle('hidden');
    const active = document.getElementById("Same");
    active.classList.remove("bg-gray-700");
}
function Activate(){
    const active = document.getElementById("Same");
    active.classList.add("bg-gray-700");
    const Billing_form = document.getElementById('Billing_form');
    Billing_form.classList.remove("bg-gray-700");
}