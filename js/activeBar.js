const btnOpen = document.querySelector('.menu i')
const bar = document.querySelector('.bar-mobile')
const btnClose = document.querySelector('.btn-closes button')
const overlays = document.createElement('div');
overlays.classList.add('overlay');
document.body.appendChild(overlays);
console.log(btnOpen , bar);
btnOpen.addEventListener('click', ()=>{
    bar.classList.toggle('active-mobile-bar')
    overlays.classList.toggle('active-overlay');
})
btnClose.addEventListener('click' , ()=>{
    bar.classList.remove('active-mobile-bar')
    overlays.classList.toggle('active-overlay');
})


