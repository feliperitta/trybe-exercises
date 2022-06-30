const weekDaysList = document.querySelector('.week-days');
const fridayDaysNumbers = [];
const myTasksDiv = document.querySelector('.my-tasks');
const taskColor = '#0f0';

function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
}

// ...6, 10
function createDaysOfDecember() {
  const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const taskDiv = document.querySelector('.task');
  let createdDayLi;
  let countDay = 0;
  for(let index in decemberDaysList){
    createdDayLi = document.createElement('li');
    createdDayLi.className = 'day';
    createdDayLi.innerText = decemberDaysList[index];
    if(countDay === 5){
      createdDayLi.classList.add('friday');
      fridayDaysNumbers.push(decemberDaysList[index]);
    }
    if(decemberDaysList[index] === 24 || decemberDaysList[index] === 25 || decemberDaysList[index] === 31){
      createdDayLi.classList.add('holiday');
    }
    createdDayLi.addEventListener('mouseover', function(eventDay){
      eventDay.target.style.fontWeight  = '900';
    });
    createdDayLi.addEventListener('mouseleave', function(eventDay){
      eventDay.target.style.fontWeight = 'initial';
    });
    weekDaysList.appendChild(createdDayLi);   
    if(countDay < 6){
      countDay++;
    } else {
      countDay = 0;
    }
  }
}

// 2, 3
const containerButton = document.querySelector('.buttons-container');
function createHolidayButton(buttonName) {
  const createdButton = document.createElement('button');
  const holidayDays = document.querySelectorAll('.holiday');
  createdButton.id = 'btn-holiday';
  createdButton.innerText = buttonName;
  createdButton.addEventListener('click', function(){
    if(!createdButton.className.includes('holidayClicked')){
      createdButton.classList.add('holidayClicked')
      for(let day of holidayDays){
        day.style.backgroundColor = "rgb(227,222,173)";
      }
    } else{
      createdButton.classList.remove('holidayClicked');
      for(let day of holidayDays){
        day.style.backgroundColor = "rgb(238,238,238)";
      }
    }
  });
  containerButton.appendChild(createdButton);
}

// 4, 5
function createFridayButton(buttonName) {
  const createdButton = document.createElement('button');
  const fridayDays = document.querySelectorAll('.friday');
  let countDay = 0;
  createdButton.innerText = buttonName;
  createdButton.id = 'btn-holiday';
  createdButton.addEventListener('click', function(){
    if(!createdButton.className.includes('fridayClicked')){
      createdButton.classList.add('fridayClicked');
      countDay = 0;
      for(let day of fridayDays){
        if(countDay % 2 === 0){
          day.innerText = "Ednaldo";
        }else{
          day.innerText = "Pereira";
        }
        countDay++;
      }
    } else{
      createdButton.classList.remove('fridayClicked');
      countDay = 0;
      for(let day of fridayDays){
        day.innerText = fridayDaysNumbers[countDay];
        countDay++;
      }
    }
  });
  containerButton.appendChild(createdButton);
}

function createTask(taskName) {
  
  const createdTask = document.createElement('span');
  createdTask.innerText = taskName;
  myTasksDiv.appendChild(createdTask);
  
}

//8, 9
function createSubtitle(divColor){
  const createdDiv = document.createElement('div');
  createdDiv.innerHTML = "";
  createdDiv.style.backgroundColor = divColor;
  createdDiv.classList.add('task');
  createdDiv.addEventListener('click', function(event){
    if(!event.target.className.includes('selected')){
      event.target.classList.add('selected');
    }else{
      event.target.classList.remove('selected');
    }
  });
  myTasksDiv.appendChild(createdDiv);
}

function changeDayColor() {
  const monthDays = document.querySelectorAll('.day');
  const divTask = document.querySelector('.task');
  for(let day of monthDays){
    day.addEventListener('click', function(){
      if(divTask.className.includes('selected')){
        if(!day.className.includes('changed')){
          day.style.color = taskColor;
          day.classList.add('changed');
        }else{
          day.classList.remove('changed');
          day.style.color = 'rgb(119,119,119)';
        }
      }
    });
  }
}

function commitments() {
  const taskList = document.querySelector('.task-list');
  const taskInput = document.querySelector('#task-input');
  const buttonInput = document.querySelector('#btn-add');
  buttonInput.addEventListener('click', function () {
    if(taskInput.value.length <= 0){
      alert('Erro.');
    }else{
      let createdCommitment = document.createElement('li');
      createdCommitment.innerText = taskInput.value;
      createdCommitment.classList.add('commitment');
      taskList.appendChild(createdCommitment);
      taskInput.value = '';
    }
  });
  taskInput.addEventListener('keydown', (event) => {
    if(event.key === 'Enter'){
      if(taskInput.value.length <= 0){
        alert('Erro.');
      }else{
        let createdCommitment = document.createElement('li');
        createdCommitment.innerText = taskInput.value;
        createdCommitment.classList.add('commitment');
        taskList.appendChild(createdCommitment);
        taskInput.value = '';
      }
    }
  });
}

weekDaysList.id = 'days';

createDaysOfTheWeek();
createDaysOfDecember();
createHolidayButton('Feriados');
createFridayButton('Sexta-feira');
createTask('Cozinhar');
createSubtitle(taskColor);
changeDayColor();
commitments();