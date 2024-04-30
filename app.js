const colorBtn = document.querySelector('button');
const rgb = document.querySelector('#rgb');
colorBtn.addEventListener('click', function(){
    document.body.style.backgroundColor = 'olive';
    const r = Math.floor(Math.random() * 255) + 1;
    const g = Math.floor(Math.random() * 255) + 1;
    const b = Math.floor(Math.random() * 255) + 1;
    const newColor = `rgb(${r}, ${g}, ${b})`
    document.body.style.backgroundColor = newColor;
    rgb.innerText = `(${r}, ${g}, ${b})`
    
});

