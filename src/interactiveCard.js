/*Displays-divs*/

let cvc = document.querySelector(".cvc");
let numberCardFront = document.querySelector(".number-card-front span");
let nameCardFront = document.querySelector(".name-card-front");
let monthExpiration = document.querySelector(
  ".expiration-date-card-front span:first-child"
);
let yearExpiration = document.querySelector(
  ".expiration-date-card-front span:last-child"
);

/*Inputs*/
let cvcInput = document.querySelector("#cvc-input");
let cardNumber = document.querySelector("#card-number");
let cardholderName = document.querySelector("#cardholder-name");
let expirationDateCardMonth = document.querySelector(
  "#expiration-date-card-month"
);
let expirationDateCardYear = document.querySelector(
  "#expiration-date-card-year"
);

/*Dropdowns*/

createMonthOptions();
createYearOptions();

function createMonthOptions() {
  for (let i = 0; i < 12; i++) {
    let option = document.createElement("option");
    let value = i + 1;
    if (value < 10) {
      value = "0" + value;
    }
    option.value = value;
    option.text = value;
    expirationDateCardMonth.appendChild(option);
  }
}

function createYearOptions() {
  let year = new Date().getFullYear();
  year = year % 100;
  for (let i = 0; i < 10; i++) {
    let option = document.createElement("option");
    let value = year + i;
    option.value = value;
    option.text = value;
    expirationDateCardYear.appendChild(option);
  }
}

/*Event Listener */

cvcInput.addEventListener("keyup", function () {
  cvcInputValue = cvcInput.value;
  let errorMessage = document.querySelector("#cvc-message");
  if (isNaN(+cvcInputValue) || cvcInputValue.trim() != cvcInputValue) {
    errorMessage.style.display = "block";
    return;
  }
  errorMessage.style.display = "none";

  if (cvcInput.value == "") {
    cvc.innerText = "000";
    return;
  }
  cvc.innerText = cvcInput.value;
});

cardNumber.addEventListener("keyup", function (e) {
  let cardNumberValue = cardNumber.value;
  let cardNumberTransformed = "";
  let errorMessage = document.querySelector("#card-number-message");
  if (isNaN(+cardNumberValue) || cardNumberValue.trim() != cardNumberValue) {
    errorMessage.style.display = "block";
    return;
  }
  errorMessage.style.display = "none";
  for (let i = 0; i < cardNumberValue.length; i++) {
    if (i % 4 === 0) {
      cardNumberTransformed += ` ${cardNumberValue[i]}`;
    } else {
      cardNumberTransformed += cardNumberValue[i];
    }
  }
  if (cardNumberValue.length == 0) {
    cardNumberTransformed = "0000 0000 0000 0000";
  }
  numberCardFront.innerText = cardNumberTransformed;
});

cardholderName.addEventListener("keyup", function () {
  let validationString = /^[a-zA-Z]+[a-zA-Z ]+$/;
  console.log(
    validationString.test(cardholderName.value),
    cardholderName.value
  );
  if (validationString.test(cardholderName.value)) {
    nameCardFront.innerText = cardholderName.value;
  }
});

expirationDateCardMonth.addEventListener("change", function () {
  displayExpirationDateMessage(expirationDateCardMonth);
  if (expirationDateCardMonth.value == "") {
    monthExpiration.innerText = "00";
    return;
  }
  monthExpiration.innerText = expirationDateCardMonth.value;
});

expirationDateCardYear.addEventListener("change", function () {
  displayExpirationDateMessage(expirationDateCardYear);
  if (expirationDateCardYear.value == "") {
    yearExpiration.innerText = "00";
    return;
  }
  yearExpiration.innerText = expirationDateCardYear.value;
});

function displayExpirationDateMessage(expirationDate) {
  let errorMessage = document.querySelector("#expiration-date-message");
  console.log(expirationDate.value == "");
  if (expirationDate.value == "") {
    errorMessage.style.display = "block";
  } else {
    errorMessage.style.display = "none";
  }
}

/*  if (e.code == "Backspace") {
  deleteNumbers();
} else {
  addNumbers(cardNumber);
}
function deleteNumbers(cardNumber) {
  if (buffer[buffer.length - 1] == " ") {
    buffer = buffer.substring(0, buffer.length - 2);
  } else {
    buffer = buffer.substring(0, buffer.length - 1);
  }
  console.log(buffer);

  if (buffer.replaceAll(" ", "") == "") {
    numberCardFront.innerText = "0000 0000 0000 0000";
  } else {
    numberCardFront.innerText = buffer;
  }
}

function addNumbers(cardNumber) {
  if (
    Number.isNaN(+cardNumber.value.slice(-1)) ||
    cardNumber.value.slice(-1) == " "
  ) {
    cardNumber.value = cardNumber.value.substring(
      0,
      cardNumber.value.length - 1
    );
  } else {
    if (buffer.replaceAll(" ", "").length < 16) {
      if (buffer.replaceAll(" ", "").length % 4 != 0) {
        buffer = buffer + cardNumber.value.slice(-1);
      } else {
        buffer = buffer + " " + cardNumber.value.slice(-1);
      }
      numberCardFront.innerText = buffer;
    }
  }
}
*/
