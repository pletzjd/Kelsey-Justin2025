let plusOne = document.getElementById('plusOne')
let guest =  document.getElementById('guestEle')
plusOne.addEventListener('click', () => {
    if(plusOne.checked){
        guest.removeAttribute('hidden')
    }else{
        guest.setAttribute('hidden','true')
    }
})

const form = document.getElementById('rsvpForm');
form.addEventListener("submit", function(e) {
  e.preventDefault();
  const data = new FormData(form);
  const action = e.target.action;
  fetch(action, {
    method: 'POST',
    body: data,
  })
  .then(() => {
    alert("Success!");
    form.reset()
  })
});