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
  var day=document.getElementById("birthday");
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
  var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
}

