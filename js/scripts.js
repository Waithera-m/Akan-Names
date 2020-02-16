// validate users' input
function validName(){
  var sname=document.getElementById("sname").value;
  if (sname==null || sname=""){
    alert("Please Enter Your Name");
    return false;
  }; 

function birthYear(){
  var birthYear=document.getElementById("birthyear").value;
  if (birthYear==" " || birthYear=-null){
    alert("Please enter the year you were born");
    return false;
}
}
function bMonth(){
  var month=document.getElementById("month").value;
  if (month == "0"){
    alert("Please select your birth month");
    return false;
  }
}
function selectGender(){
  var gender = document.getElementById("gender").value;
  if (gender=="0"){
    alert("Please select your gender");
    return false;
  }
}
function birthDay(){
  var bDay=document.getElementById("birthday");
  if (day=="0" && day==null) {
    alert("Please enter the day you were born");
    return false;
  }
}
function validBirthYear(){
  var year = document.getElementById("birthyear")
  if (year <= 1582){
    alert("The year you have entered is invalid");
    return false;
  }
}
fuction validDay () {
  var months=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  var monthBorn = parseInt(document.getElementById("month").value);
  var dateBorn = parseInt(document.getElementById("birthday").value);
  var yearB0rn = parseInt(document.getElementById("birthyear")).value);
  if (monthBorn === 2 && birthDay > 28 && yearBorn%100 = 0 && yearBorn% !== 0){
    alert("Invalid date");
    return false;
  }
  else if (dateborn > 31){
    alert("A month cannot have more than 31 days");
    return false;
  }
}
function getAkanName(){
  var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursaday", "Friday", "Saturday"];
  var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]; 
  var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  var cc = parseInt(document.getElementById("birthyear").value.slice(0,2));
  var yy = parseInt(document.getElementById("birthyear").value.slice(2, 4));
  var dd = parseInt(document.getElementById("birthday").value);
  var mm = parseInt(document.getElementById("month").value);
  var dayOfTheWeek = (((CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )%7;
  var gender = parseInt(document.getElementById("gender").value);
  if (gender == 2){
    if (dayOfTheWeek === "Sunday") {
      document.getElementById("output").value = "You were born on Sunday. Your Akan name is " + maleNames[0];
      return true;
    }
    else if (dayOfTheWeek === "Monday"){
      document.getElementById("output").value = "You were born on Monday. Your Akan name is " + maleNames[1];
      return true;
    }
    else if (dayOfTheWeek === "Tuesday"){
      document.getElementById("output").value = "You were born on Tuesday. Your Akan name is " + maleNames[2];
      return true;
    }
    else if (dayOfTheWeek === "Wednesday"){
      document.getElementById("output").value = "You were born on Wednesday. Your Akan name is " + maleNames[3];
      return true;
    }
    else if (dayOfTheWeek === "Thursday"){
      document.getElementById("output").value = "You were born on Thursday. Your Akan name is " + maleNames[4];
      return true;
    }
    else if (dayOfTheWeek === "Friday"){
      document.getElementById("output").value = "You were born on Friday. Your Akan name is " + maleNames[5];
      return true;
    }
    else {
      document.getElementById("output").value = "You were born on Saturday. Your Akan name is " + maleNames[6];
      return true;
    }
  }
  if (gender === 3){
    if (dayOfTheWeek === "Sunday") {
      document.getElementById("output").value = "You were born on Sunday. Your Akan name is " + femaleNames[0];
      return true;
    }
    else if (dayOfTheWeek === "Monday") {
      document.getElementById("output").value = "You were born on Monnday. Your Akan name is " + femaleNames[1];
      return true;
    }
    else if (dayOfTheWeek === "Tuesday") {
      document.getElementById("output").value = "You were born on Tuesday. Your Akan name is " + femaleNames[2];
      return true;
    }
    else if (dayOfTheWeek === "Wednesday") {
      document.getElementById("output").value = "You were born on Wednesday. Your Akan name is " + femaleNames[3];
      return true;
    }
    else if (dayOfTheWeek === "Thursday") {
      document.getElementById("output").value = "You were born on Thursday. Your Akan name is " + femaleNames[4];
      return true;
    }
    else if (dayOfTheWeek === "Friday") {
      document.getElementById("output").value = "You were born on Friday. Your Akan name is " + femaleNames[5];
      return true;
    }
    else {
      document.getElementById("output").value = "You were born on Saturday. Your Akan name is " + femaleNames[6];
      return true;
    }
  }
}
function clearForm(){
  document.getElementById("card").reset();
}
function clearResults(){
  document.getElementById("answer").reset();
}

