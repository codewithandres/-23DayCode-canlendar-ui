
const isLeapYear = (year) => {

    return (

        (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) ||
        (year % 100 === 0 && year % 400 === 0)
    );
};

const getFebDay = (year) => isLeapYear(year) ? 29 : 28;

const moonth_name = ['Junary', 'Februry', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Novenber', 'December'];

let mooth_piker = document.querySelector('#month-piker');

const calendar = document.querySelector('.calendar');
const dayTextFormate = document.querySelector('.day-text-formate');
const timeFormate = document.querySelector('.time-formate');
const dateFormate = document.querySelector('.date-formate');

mooth_piker.addEventListener('click', () => {

    mooth_list.classList.remove('hideonce');
    mooth_list.classList.remove('hide');
    mooth_list.classList.add('show');

    dayTextFormate.classList.remove('showtime');
    dayTextFormate.add('hidetime');

    timeFormate.classList.remove('showtime');
    timeFormate.classList.add('hideTime');

    dateFormate.classList.remove('showtime');
    dateFormate.classList.add('hideTime')
});

const generateCalendar = (mooth, year) => {

    let calendar_days = document.querySelector('.calendar-days');
    calendar_days.innerHTML = '';
    let calendar_header_year = document.querySelector('#year');
    let days_of_mooth = [31, getFebDay(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    let currentDate = new Date();

    mooth_piker.innerHTML = moonth_name[mooth];
    calendar_header_year.innerHTML = year;

    let fris_day = new Date(year, mooth);

    for (let i = 0; i <= days_of_mooth[mooth] + fris_day.getDay() - 1; i++) {

        let day = document.createElement('div');

        if (i >= fris_day.getDay()) {

            day.innerHTML = i - fris_day.getDay() + 1;

            if (i - fris_day.getDay() + 1 === currentDate.getDate() && year === currentDate.getFullYear() && mooth === currentDate.getMonth()) {

                day.classList.add('current-date');
            };
        };
        calendar_days.appendChild(day);
    };
};

let mooth_list = calendar.querySelector('.mooth-list');

moonth_name.map((e, index) => {

    let moonth = document.createElement('div');

    moonth.innerHTML = ` <div> ${e} </div> `;
    mooth_list.append(moonth);

    moonth.addEventListener('click', () => {

        currentMoonth.value = index;
        generateCalendar(currentMoonth.value, currentYear.value);
        mooth_list.classList.replace('show', 'hide');

        dayTextFormate.classList.remove('hidetime');
        dayTextFormate.classList.add('showtime');

        timeFormate.classList.remove('hidetime');
        timeFormate.classList.add('showtime');

        dateFormate.classList.remove('hidetime');
        dateFormate.classList.add('showtime')
    });
});

(function () {
    mooth_list.classList.add('hideonce');
})();

document.querySelector('#pre-year').addEventListener('click', () => {
    --currentYear.value;
    generateCalendar(currentMoonth.value, currentYear.value);
});

document.querySelector('#next-year').addEventListener('click', () => {
    ++currentYear.value;
    generateCalendar(currentMoonth.value, currentYear.value);
});

let currentDate = new Date();
let currentMoonth = { value: currentDate.getMonth() };
let currentYear = { value: currentDate.getFullYear() };

generateCalendar(currentMoonth.value, currentYear.value);