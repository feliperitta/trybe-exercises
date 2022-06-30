const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');
const liItems = document.querySelectorAll('.container > li');

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
for(let item of liItems){
  item.addEventListener('click', mouseClick);
}

function mouseClick(clickedElement){
  for(let item of liItems){
    if(clickedElement.target === item){
      item.classList.add('tech');
    } else {
      item.classList.remove('tech');
    }
  }
}
// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
input.addEventListener('input', function(event) {
  for(let item of liItems){
    if(item.className.includes('tech')){
      item.innerText = event.target.value;
    }
  }
});
// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?
myWebpage.addEventListener('dblclick', function (event) {
  window.open('https://feliperitta.github.io/', '_blank');
});
// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
// Math.floor(Math.random() * 10);
let randomR = 0;
let randomG = 0;
let randomB = 0;

myWebpage.addEventListener('mouseover', function (event) {
  randomR = Math.floor(Math.random() * 256);
  randomG = Math.floor(Math.random() * 256);
  randomB = Math.floor(Math.random() * 256);
  event.target.style.color = "rgb(" + randomR + "," + randomG + "," + randomB +")";
});

myWebpage.addEventListener('mouseleave', function (event) {
  event.target.style.color = "#fff";
});