console.log("sanity check!")
/* 1) Ask (prompt) the user for the total number of students learning JavaScript
2) For each student, ask the user for their name, phone number, and city.
3) Create an object for each person.
4)Add each object to an array.
BONUS: add validation.
Repeat steps 1 and 2 for mentors. Create a new array of objects. You should now have two arrays - one for students, the other for mentors.
Print (alert) the total number of students, the number of mentors, and each person nicely formatted like so:

Name: Michael Herman
Phone Number: 415-514-6584
City: Boulder
*/
function numStudents () {
  var number = prompt("How Many Students Are Learning Javascript?");
  console.log(number);
  return number;
};
studentsArray = [];
//{studentName: , studentPhone: , studentCity: }

for (var i = 0; i <= numStudents; i++) {
function studentInfo () {
  var studentName = prompt("What is the name of student " + [i+1] + "?");
  console.log(studentName);
  var studentPhone = prompt("What is the phone number of student " + [i+1] + "?(ex. XXX-XXX-XXXX)");
  console.log(studentPhone);
  var studentCity = prompt("What city is student " + [i +1] + "from?");
  console.log(studentCity);
  studentsArray.push({studentName, studentPhone, studentCity});
}
};

numStudents();
studentInfo();
console.log(studentsArray);
