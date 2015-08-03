var peopleType = ['Student', 'Mentor'];
var peopleArray = [];
var totalPeople;

var addPeople = function() {

  for (var i = 0; i < peopleType.length; i++) {
    var peopleTypes = peopleType[i];
    totalPeople = prompt("How many " + peopleTypes +   "s are there?");

    for (var j = 0; j < totalPeople; j++) {
      var personName = prompt("What is the name of " + peopleTypes + " " + [j+1] + "?");
        // if (studentName !== 'string') {
        //   prompt("Please enter a valid name.");
        // }
      var personPhone = prompt("What is the phone number of " + peopleTypes + " " + [j+1] + "?(ex. XXX-XXX-XXXX)");
        // if (studentPhone.length !== 12) {
        //   prompt("Please enter a valid phone number.");
        // }
      var personCity = prompt("What city is "+ peopleTypes + " " + [j+1]);
      peopleArray.push({name: personName, phone: personPhone, city: personCity});
      }
    }
    console.log(peopleArray);
   return peopleArray;
};

addPeople();
