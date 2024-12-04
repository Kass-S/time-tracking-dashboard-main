let dailyBtn = document.getElementById('dailyBtn');
let weeklyBtn = document.getElementById('weeklyBtn');
let monthlyBtn = document.getElementById('monthlyBtn');

let workCurrent = document.getElementById('workCurrent');
let workPrevious = document.getElementById('workPrevious');

let playCurrent = document.getElementById('playCurrent');
let playPrevious =document.getElementById('playPrevious');

let studyCurrent = document.getElementById('studyCurrent');
let studyPrevious = document.getElementById('studyPrevious');

let exerciseCurrent = document.getElementById('exerciseCurrent');
let exercisePrevious = document.getElementById('exercisePrevious');

let socialCurrent = document.getElementById('socialCurrent');
let socialPrevious = document.getElementById('socialPrevious');

let selfcareCurrent = document.getElementById('selfcareCurrent');
let selfcarePrevious = document.getElementById('selfcarePrevious');


dailyBtn.addEventListener('click', function(){
    dailyBtn.className = 'day-week-month day-week-month-active'
    weeklyBtn.className = 'day-week-month'
    monthlyBtn.className = 'day-week-month'
    dailyTime()
})

weeklyBtn.addEventListener('click', function(){
    dailyBtn.className = 'day-week-month'
    weeklyBtn.className = 'day-week-month day-week-month-active'
    monthlyBtn.className = 'day-week-month'
    weeklyTime()
})

monthlyBtn.addEventListener('click', function(){
    dailyBtn.className = 'day-week-month'
    weeklyBtn.className = 'day-week-month'
    monthlyBtn.className = 'day-week-month day-week-month-active'
    monthlyTime()
})

function dailyTime(){
    fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        workCurrent.innerText = data[0].timeframes.daily.current + "hrs";
        workPrevious.innerText = ` Yesterday - ${data[0].timeframes.daily.current} hrs`;

        playCurrent.innerText = data[1].timeframes.daily.current + "hrs";
        playPrevious.innerText = ` Yesterday - ${data[1].timeframes.daily.current} hrs`;

        studyCurrent.innerText = data[2].timeframes.daily.current + "hrs";
        studyPrevious.innerText = ` Yesterday - ${data[2].timeframes.daily.current} hrs`;

        exerciseCurrent.innerText = data[3].timeframes.daily.current + "hrs";
        exercisePrevious.innerText = ` Yesterday - ${data[3].timeframes.daily.current} hrs`;

        socialCurrent.innerText = data[4].timeframes.daily.current + "hrs";
        socialPrevious.innerText = ` Yesterday - ${data[4].timeframes.daily.current} hrs`;

        selfcareCurrent.innerText = data[5].timeframes.daily.current + "hrs";
        selfcarePrevious.innerText = ` Yesterday - ${data[5].timeframes.daily.current} hrs`;
    })
}

function weeklyTime(){
    fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        console.log(data[0].timeframes.weekly); 
        console.log(data[1].timeframes.weekly);
        console.log(data[2].timeframes.weekly);
        console.log(data[3].timeframes.weekly);
        console.log(data[4].timeframes.weekly);
        console.log(data[5].timeframes.weekly);
    })
}

function monthlyTime(){
    fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        console.log(data[0].timeframes.monthly); 
        console.log(data[1].timeframes.monthly);
        console.log(data[2].timeframes.monthly);
        console.log(data[3].timeframes.monthly);
        console.log(data[4].timeframes.monthly);
        console.log(data[5].timeframes.monthly);
    })
}