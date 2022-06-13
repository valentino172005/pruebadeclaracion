const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () { 
    alert('Sabia que hibas a decir que si, Te quiero jsabdjasd<3')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover',function (){ 
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.randomY()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('top',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})