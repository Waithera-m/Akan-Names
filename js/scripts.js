// validate users' input
function validateForm() {
  document.getElementById("output").innerHTML;
  var sname = document.getElementById("sname").value;
  var gender = document.getElementById("gender").value;
  var bDay = document.getElementById("birthday").value;
  var month = document.getElementById("month").value;
  var birthYear = document.getElementById("birthyear").value;
  var year = document.getElementById("birthyear").value
  if (sname == null || sname == "") {
    alert("Please Enter Your Name");
    return false;
  } else if (gender == "0") {
    alert("Please select your gender");
    return false;
  } else if (bDay == null || bDay == "") {
    alert("Please enter the day you were born");
    return false;
  } else if (month == "0") {
    alert("Please select your birth month");
    return false;
  } else if (birthYear == "" || birthYear == null) {
    alert("Please enter the year you were born");
    return false;
  } else if (month == "0") {
    alert("Please select your birth month");
    return false;
  } else if (year <= 1582) {
    alert("The year you have entered is invalid");
    return false;
  }
  if (bDay > 31) {
    alert("A month cannot have more than 31 days");
    return false;
  }
  if (month === "2" && bDay > 28 && !leapYear(year)) {
    alert("Invalid date");
    return false;
  }
  getAkanName(sname);
}
function leapYear(year) {
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}
// // Calculate day born
function getAkanName(sname) {
  var birthYear = parseInt(document.getElementById("birthyear").value);
  var bDay = parseInt(document.getElementById("birthday").value);
  var month = parseInt(document.getElementById("month").value);
  var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  var cc = parseInt(document.getElementById("birthyear").value.slice(0, 2));
  var yy = parseInt(document.getElementById("birthyear").value.slice(2, 4));
  var dd = parseInt(document.getElementById("birthday").value);
  var mm = parseInt(document.getElementById("month").value);
  var dayOfTheWeek = parseInt(((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7;
  var gender = parseInt(document.getElementById("gender").value);
  console.log([dayOfTheWeek,weekDays[dayOfTheWeek] ])
  if (gender == 1) {
    if (weekDays[dayOfTheWeek] === "Sunday") {
      document.getElementById("output").innerHTML = "You were born on Sunday. Your Akan name is " + maleNames[0] + " " + sname;
    }
    else if (weekDays[dayOfTheWeek] === "Monday") {
      document.getElementById("output").innerHTML = "You were born on Monday. Your Akan name is " + maleNames[1] + " " + sname;
    }
    else if (weekDays[dayOfTheWeek] === "Tuesday") {
      document.getElementById("output").innerHTML = "You were born on Tuesday. Your Akan name is " + maleNames[2] + " " + sname;
    }
    else if (weekDays[dayOfTheWeek] === "Wednesday") {
      document.getElementById("output").innerHTML = "You were born on Wednesday. Your Akan name is " + maleNames[3] + " " + sname;
    }
    else if (weekDays[dayOfTheWeek] === "Thursday") {
      document.getElementById("output").innerHTML = "You were born on Thursday. Your Akan name is " + maleNames[4] + " " + sname;
    }
    else if (weekDays[dayOfTheWeek] === "Friday") {
      document.getElementById("output").innerHTML = "You were born on Friday. Your Akan name is " + maleNames[5] + " " + sname;
    }
    else {
      document.getElementById("output").innerHTML = "You were born on Saturday. Your Akan name is " + maleNames[6] + " " + sname;
    }
  }
  if (gender === 2) {
    if (weekDays[dayOfTheWeek] === "Sunday") {
      document.getElementById("output").innerHTML = "You were born on Sunday. Your Akan name is " + femaleNames[0] + " " + sname;
    }
    else if (weekDays[dayOfTheWeek] === "Monday") {
      document.getElementById("output").innerHTML = "You were born on Monnday. Your Akan name is " + femaleNames[1] + " " + sname;
    }
    else if (weekDays[dayOfTheWeek] === "Tuesday") {
      document.getElementById("output").innerHTML = "You were born on Tuesday. Your Akan name is " + femaleNames[2] + " " + sname;
    }
    else if (weekDays[dayOfTheWeek] === "Wednesday") {
      document.getElementById("output").innerHTML = "You were born on Wednesday. Your Akan name is " + femaleNames[3] + " " + sname;
    }
    else if (weekDays[dayOfTheWeek] === "Thursday") {
      document.getElementById("output").innerHTML = "You were born on Thursday. Your Akan name is " + femaleNames[4] + " " + sname;
    }
    else if (weekDays[dayOfTheWeek] === "Friday") {
      document.getElementById("output").innerHTML = "You were born on Friday. Your Akan name is " + femaleNames[5] + " " + sname;
    }
    else {
      document.getElementById("output").innerHTML = "You were born on Saturday. Your Akan name is " + femaleNames[6] + " " + sname;
    }
  }
}

// Clear form and textarea
function clearForm() {
  document.getElementById("form").reset();
}
function clearResults() {
  document.getElementById("output").reset();
}

