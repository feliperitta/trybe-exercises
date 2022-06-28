const headerElement = document.querySelector('#header-container');
console.log(headerElement[0]);

headerElement.style.backgroundColor = '#00b069';

const emergencyElement = document.querySelector('.emergency-tasks');
emergencyElement.style.backgroundColor = '#ff9f84';

const emergencyElementH3 = document.querySelectorAll('.emergency-tasks h3')
for(let h3 of emergencyElementH3){
  h3.style.backgroundColor = '#a500f3'
}

const noEmergencyElement = document.querySelector('.no-emergency-tasks')
noEmergencyElement.style.backgroundColor = '#f9db5e';

const noEmergencyElementH3 = document.querySelectorAll('.no-emergency-tasks h3')
for(let h3 of noEmergencyElementH3){
  h3.style.backgroundColor = '#000'
}

const footerElement = document.querySelector('#footer-container');
footerElement.style.backgroundColor = "#003533";

