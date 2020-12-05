let hour = document.querySelector('.hour');
let minute = document.querySelector('.minute');
let second = document.querySelector('.second');
let greeting = document.querySelector('.greeting');
let name = document.querySelector('.name');
let focus = document.querySelector('.focus');
let day = document.querySelector('.date');
let changeImgBtn = document.querySelector('.change-img');
let blockquote = document.querySelector('blockquote');
let figcaption = document.querySelector('figcaption');
let changeQuote = document.querySelector('.change-quote');
let dayImages = selectImages();
let counter = new Date().getHours() + 1;
let humidity = document.querySelector('.humidity')
let windSpeed = document.querySelector('.wind-speed');
let weatherIcon = document.querySelector('.weather-icon');
let temperature = document.querySelector('.temperature');
let weatherDescription = document.querySelector('.weather-description');
let city = document.querySelector('.city');
document.body.style.backgroundImage = `url(${dayImages[counter - 1]})`;

// set time

function setTime() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  hour.innerHTML = `${addZero(hours)} :`;
  minute.innerHTML = `${addZero(minutes)} :`;
  second.innerHTML = `${addZero(seconds)}`;

  if (minutes === 0 && seconds === 0) {
    document.body.style.backgroundImage = `url(${dayImages[hours]})`;
  }

  setTimeout(setTime, 1000);
}

function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// set date

function setDate() {
  let date = new Date();
  let month = date.getMonth();
  let dateNumber = date.getDate();
  let weekDay = date.getDay();

  day.innerHTML = `${addWeekDay (weekDay)}, ${dateNumber} ${addMonth(month)}`;
}

function addMonth(month) {
  const allMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return allMonths[month];
}

function addWeekDay (weekDay) {
  const allWeekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return allWeekDays[weekDay];
}

// set background

function selectImages() {
  let resArr = [];
  let checkRepeatNight = [];
  let checkRepeatMorning = [];
  let checkRepeatDay = [];
  let checkRepeatEvening = [];
  for (let i=0; i < 24; i++) {
    if (i < 6) {
      let number = Math.floor(Math.random()*20 + 1);
      if (checkRepeatNight.includes(number)) {
        number = Math.floor(Math.random()*20 + 1);
        resArr.push(`./assets/images/night/${number}.jpg`);
        checkRepeatNight.push(number);
      } else {
        resArr.push(`./assets/images/night/${number}.jpg`);
        checkRepeatNight.push(number);
      }
    } else if (i < 12) {
      let number = Math.floor(Math.random()*20 + 1);
      if (checkRepeatMorning.includes(number)) {
        number = Math.floor(Math.random()*20 + 1);
        resArr.push(`./assets/images/morning/${number}.jpg`);
        checkRepeatMorning.push(number);
      } else {
        resArr.push(`./assets/images/morning/${number}.jpg`);
        checkRepeatMorning.push(number);
      }
    } else if (i < 18) {
      let number = Math.floor(Math.random()*20 + 1);
      if (checkRepeatDay.includes(number)) {
        number = Math.floor(Math.random()*20 + 1);
        resArr.push(`./assets/images/day/${number}.jpg`);
        checkRepeatDay.push(number);
      } else {
        resArr.push(`./assets/images/day/${number}.jpg`);
        checkRepeatDay.push(number);
      }
    } else if (i < 24) {
      let number = Math.floor(Math.random()*20 + 1);
      if (checkRepeatEvening.includes(number)) {
        number = Math.floor(Math.random()*20 + 1);
        resArr.push(`./assets/images/evening/${number}.jpg`);
        checkRepeatEvening.push(number);
      } else {
        resArr.push(`./assets/images/evening/${number}.jpg`);
        checkRepeatEvening.push(number);
      }
    }
  }
  return resArr;
}

function setBackground() {
  let date = new Date();
  let hour = date.getHours();

  if (hour <= 12 && hour >= 6) {
    greeting.innerHTML = 'Good morning, '
  } else if (hour < 18) {
    greeting.innerHTML = 'Good day, '
  } else if (hour >= 18) {
    greeting.innerHTML = 'Good evening, '
  }
  else if (hour >= 0 && hour < 6) {
    greeting.innerHTML = 'Good night, '
  }
  document.body.style.backgroundImage = `url(${dayImages[hour]})`;
}

function watchImages() {
  if (counter < dayImages.length && counter > (new Date().getHours())) {
    document.body.style.backgroundImage = `url(${dayImages[counter]})`;
    counter++;
  } else if (counter === dayImages.length) {
    counter = 0;
    document.body.style.backgroundImage = `url(${dayImages[counter]})`;
    counter++;
  } else if (counter === (new Date().getHours())) {
    document.body.style.backgroundImage = `url(${dayImages[counter]})`;
    counter++;
  } else {
    document.body.style.backgroundImage = `url(${dayImages[counter]})`;
    counter++;
  }
  changeImgBtn.disabled = true;
  setTimeout(function() { changeImgBtn.disabled = false }, 1000);
}

function preCacheImages() {
  for(i = 0; i < dayImages.length; i++){
    let url = dayImages[i];
    let img = new Image();
    img.src = url;
  };
};

// name

function getName() {
  let enteredName = localStorage.getItem('name');
  if (enteredName === null) {
    name.innerHTML = '[Enter Name]';
  }
  else {
    name.innerHTML = enteredName;
  }
}

function saveName(enteredText) {
  let enteredName = localStorage.getItem('name');
  if (enteredName === null && enteredText == '') {
    name.innerHTML = '[Enter Name]';
  } else if (enteredName !== null && enteredText == '') {
    name.innerText = localStorage.getItem('name');
  }
  else if (enteredText !== '') {
    name.innerText = localStorage.setItem('name', enteredText);
    name.innerHTML = enteredText;
  }
  
}
function setName(e) {
  if (e.type === 'keypress') {
    if (e.which == 13 || e.keyCode == 13) {
      let enteredText = e.target.innerText.trim();
      saveName(enteredText);
      name.blur();
    }
  } else {
    let enteredName = e.target.innerText.trim();
    saveName(enteredName);
    name.blur();
  }
}

name.addEventListener('mousedown', () => {
  name.innerText = '';
});

// focus

function getFocus() {
  let enteredFocus = localStorage.getItem('focus');
  if (enteredFocus === null) {
    focus.innerHTML = '[Enter focus]';
  }
  else {
    focus.innerHTML = enteredFocus;
  }
}

function saveFocus(enteredText) {
  let enteredFocus = localStorage.getItem('focus');
  if (enteredFocus === null && enteredText == '') {
    focus.innerHTML = '[Enter Focus]';
  } else if (enteredFocus !== null && enteredText == '') {
    focus.innerText = localStorage.getItem('focus');
  }
  else if (enteredText !== '') {
    focus.innerText = localStorage.setItem('focus', enteredText);
    focus.innerHTML = enteredText;
  }
  
}
function setFocus(e) {
  if (e.type === 'keypress') {
    if (e.which == 13 || e.keyCode == 13) {
      let enteredText = e.target.innerText.trim();
      saveFocus(enteredText);
      focus.blur();
    }
  } else {
    let enteredFocus = e.target.innerText.trim();
    saveFocus(enteredFocus);
    focus.blur();
  }
}

focus.addEventListener('mousedown', () => {
  focus.innerText = '';
});

// get quote

async function getQuote() {  
  const url = `https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en`;
  const res = await fetch(url);
  const data = await res.json(); 
  blockquote.textContent = data.quoteText;
  figcaption.textContent = data.quoteAuthor;
}

// get weather

async function getWeather() { 
  if (city.textContent.trim() !== '') {
    localStorage.setItem('city', city.textContent.trim());
  }
  else {
    let savedCity = localStorage.getItem('city');
    if (savedCity !== null) {
    city.innerHTML = savedCity;
    } else {
    city.innerHTML = 'Minsk';
    }
  }
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.textContent}&lang=en&appid=a72ed87dd677316025d8364baaa8de0e&units=metric`;
  const res = await fetch(url);
  const data = await res.json();
  if (data.cod == 404) {
    localStorage.removeItem('city', city.textContent.trim());
    city.innerHTML = 'city not found';
  } else {
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${data.main.temp.toFixed(0)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    windSpeed.textContent = `wind speed ${data.wind.speed}м/с`;
    humidity.textContent = `humidity ${data.main.humidity}%`;
  }
}

city.addEventListener('mousedown', () => {
  city.innerText = '';
});

function setCity(event) {
  if (event.code === 'Enter' || event.type === 'blur') {
    getWeather();
    city.blur();
  }
}

// events

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

changeImgBtn. addEventListener('click', watchImages);

document.addEventListener('DOMContentLoaded', getQuote);
changeQuote.addEventListener('click', getQuote);

document.addEventListener('DOMContentLoaded', getWeather);
city.addEventListener('keypress', setCity);
city.addEventListener('blur', setCity);

document.addEventListener('DOMContentLoaded', preCacheImages);

// run functions

setTime();
setDate();
setBackground();
getName();
getFocus();
getWeather();
