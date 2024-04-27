let plusOne = document.getElementById('plusOne')
let guest =  document.getElementById('guestEle')
plusOne.addEventListener('click', () => {
    if(plusOne.checked){
        guest.removeAttribute('hidden')
    }else{
        guest.setAttribute('hidden','true')
    }
})