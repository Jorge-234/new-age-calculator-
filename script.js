'use strict';

const dayMessage = document.querySelector('.msg-day');
const monthMessage = document.querySelector('.msg-month');
const yearMessage = document.querySelector('.msg-years');
const yearNumber = document.getElementById('year-number');
const monthNumber = document.getElementById('month-number');
const dayNumber = document.getElementById('day-number');
const label = document.getElementById('label1');
const labelTwo = document.getElementById('label2');
const labelThree = document.getElementById('label3');

const calcAge = document.querySelector(".arrow-icon").addEventListener('click', function () {
    const day = Number(dayNumber.value);
    const month = Number(monthNumber.value);
    const year = Number(yearNumber.value);

    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1;
    const currentDay = today.getDate();

    let valid = true;

    // Validate day
    if (!day) {
        dayMessage.textContent = 'This field is required';
        label.style.color = 'red';
        dayNumber.style.border = "2px solid red";
        valid = false;
    } else if (day < 1 || day > 31) {
        dayMessage.textContent = 'Must be a valid day';
        label.style.color = 'red';
        dayNumber.style.border = "2px solid red";
        valid = false;
    } else {
        dayMessage.textContent = '';
        label.style.color = '';
        dayNumber.style.border = "";
        valid = true;
    }

    // Validate month
    if (!month) {
        monthMessage.textContent = 'This field is required';
        labelTwo.style.color = 'red';
        monthNumber.style.border = "2px solid red";
        valid = false;
    } else if (month < 1 || month > 12) {
        monthMessage.textContent = 'Must be a valid month';
        labelTwo.style.color = 'red';
        monthNumber.style.border = "2px solid red";
        valid = false;
    } else {
        monthMessage.textContent = '';
        labelTwo.style.color = '';
        monthNumber.style.border = "";
        valid = true;
    }

    // Validate year
    if (!year) {
        yearMessage.textContent = 'This field is required';
        labelThree.style.color = 'red';
        yearNumber.style.border = "2px solid red";
        valid = false;
    } else if (year > currentYear || year < 1900) {  // Assuming year should be reasonable, like not before 1900
        yearMessage.textContent = 'Must be the in the past';
        labelThree.style.color = 'red';
        yearNumber.style.border = "2px solid red";
        valid = false;
    } else {
        yearMessage.textContent = '';
        labelThree.style.color = '';
        yearNumber.style.border = "";
    }

    // If inputs are valid, calculate the age
    if (valid) {
        let ageYears = currentYear - year;
        let ageMonths = currentMonth - month;
        let ageDays = currentDay - day;

        if (ageMonths < 0) {
            ageYears--;
            ageMonths += 12;
        }

        if (ageDays < 0) {
            ageMonths--;
            const daysInPrevMonth = new Date(currentYear, currentMonth - 1, 0).getDate();
            ageDays += daysInPrevMonth;
        }

        document.querySelector('.generated').textContent = ageYears;
        document.querySelector('.generate').textContent = ageMonths;
        document.querySelector('.generat').textContent = ageDays;
    }
});










