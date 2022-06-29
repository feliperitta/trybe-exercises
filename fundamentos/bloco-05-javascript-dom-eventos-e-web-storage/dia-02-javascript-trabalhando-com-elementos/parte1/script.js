// 1
let a1 = document.querySelector('#elementoOndeVoceEsta');
//console.log(a1)
// 2
a1.parentElement.style.color = '#f0f';
// 3
document.querySelector('#primeiroFilhoDoFilho').innerHTML = "xablau";
// 4
const elementPai = document.querySelector('#pai');
//console.log(elementPai.firstElementChild);
// 5
//console.log(a1.previousElementSibling);
// 6
//console.log(a1.nextSibling);
// 7
//console.log(a1.nextElementSibling);
// 8
//console.log(elementPai.lastElementChild.previousElementSibling);

// Parte 2
// 1
const createdSiblind = document.createElement('section');
elementPai.appendChild(createdSiblind);
// 2
a1.appendChild(createdSiblind);
// 3
const priFiDoFiElement = document.querySelector('#primeiroFilhoDoFilho');
priFiDoFiElement.appendChild(createdSiblind);
// 4
//console.log(priFiDoFiElement.firstElementChild.parentNode.parentNode.nextElementSibling);
// Parte 3
const elementPaiDoPai = elementPai.parentNode;
const todasSections = document.querySelectorAll('section');
//console.log(todasSections)
let sectionParent;
for(let elemento of todasSections){
  sectionParent = elemento.parentNode;
  if((elemento.id.includes('pai') != true) && (elemento.id.includes('elementoOndeVoceEsta') != true) && (elemento.id.includes('primeiroFilhoDoFilho') != true)){
    //sectionParent.removeChild(elemento);
    elemento.remove();
  }  
}