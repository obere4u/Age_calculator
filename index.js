const calculateAgeBtn = document.querySelector("#btn");
const inputBirthday = document.querySelector("#birthday");
const alertMsg = document.querySelector("#alert");
const displayAge = document.querySelector("#result");

function calculateAge() {
    const inputBirthdayValue = inputBirthday.value; //gets the input value

    //checks if input is empty or not
    if (inputBirthdayValue === "") {
        alertMsg.style.display = "block";
    } else {
      alertMsg.style.display = "none";
      const age = getAge(inputBirthdayValue);

      //Checks if the age is above the current year or not
      if (age >= 0) {
        displayAge.innerText = `You are ${age} ${
          age > 1 ? "years" : "year"
        } old`; // a ternary condition that checks if the age is greater than 1, added years else add year
        console.log(age);
      } else {
        displayAge.innerText = `You are a TIME TRAVELER!!!`;
      }
    }
}

function getAge(inputBirthdayValue) { //takes the input as parameter
    const birthdayDate = new Date(inputBirthdayValue); //Gets the date of the birthday from the input

    const currentDate = new Date(); // new Date() is a JS function for date (current).

    let age = currentDate.getFullYear() - birthdayDate.getFullYear(); //.getFullYear() will get only the year of both the year the person was born and the current year.

    const ageMonth = currentDate.getMonth() - birthdayDate.getMonth(); // .getMonth does almost same work as .getFullYear(), the only difference is that it gets the month

    if (ageMonth < 0 || (ageMonth === 0 && currentDate.getDate() < birthdayDate.getDate())) {
        age --; //decrease the age by one.
    }

    return age;
}

calculateAgeBtn.addEventListener("click", calculateAge);