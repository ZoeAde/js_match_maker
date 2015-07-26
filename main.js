// //students
var studentArray = [];
var totalStudents = numStudents();

function numStudents () {
  var number = prompt("How many students are learning JavaScript?");
  return number;
}

function addStudents(students) {
  for (var i = 1; i <= students; i++) {
    var studentName = prompt("What is the name of student " + [i] + "?");
      // if (studentName !== 'string') {
      //   prompt("Please enter a valid name.");
      // }
    var studentPhone = prompt("What is the phone number of student " + [i] + "?(ex. XXX-XXX-XXXX)");
      // if (studentPhone.length !== 12) {
      //   prompt("Please enter a valid phone number.");
      // }
    var studentCity = prompt("What city is student " + [i] + " from?");
    studentArray.push({name: studentName, phone: studentPhone, city: studentCity});
    }
   return studentArray;
}

var allStudents = addStudents(totalStudents);

// //mentors
var mentorArray = [];
var totalMentors = numMentors();

function numMentors () {
  var number = prompt("How many mentors are teaching JavaScript?");
  return number;
}

function addMentors(mentors) {
  for (var i = 1; i <= mentors; i++) {
    var mentorName = prompt("What is the name of mentor " + [i] + "?");
    var mentorPhone = prompt("What is the phone number of mentor " + [i] + "?(ex. XXX-XXX-XXXX)");
    var mentorCity = prompt("What city is mentor " + [i] + " from?");
    mentorArray.push({name: mentorName, phone: mentorPhone, city: mentorCity});
    }
   return mentorArray;
}

var allMentors = addMentors(totalMentors);










