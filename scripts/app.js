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
})

weeklyBtn.addEventListener('click', function(){
    dailyBtn.className = 'day-week-month'
    weeklyBtn.className = 'day-week-month day-week-month-active'
    monthlyBtn.className = 'day-week-month'
})

monthlyBtn.addEventListener('click', function(){
    dailyBtn.className = 'day-week-month'
    weeklyBtn.className = 'day-week-month'
    monthlyBtn.className = 'day-week-month day-week-month-active'
})