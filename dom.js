var getStudent = document.getElementById("students")[1];


  //     for (var i = 0; i < totalStudents; i++) {
  //       var li = document.createElement('li');
  //       li.innerHTML = studentArray[i].name;
  //       ul.appendChild(li);
  //       li.innerHTML = studentArray[i].phone;
  //       ul.appendChild(li);
  //       li.innerHTML = studentArray[i].city;
  //       ul.appendChild(li);
  //     }
  // }

function test(arrayValue) {
  console.log(studentArray);
  for (var i = 0; i < arrayValue.length; i++) {
    var h3 = document.createElement('h3');
    h3.innerHTML = "Student " + [i+1];
    document.body.appendChild(h3);
    for (key in arrayValue[i]) {
      var p = document.createElement('p');
      console.log(arrayValue[i][key])
      p.innerHTML = arrayValue[i][key];
      document.body.appendChild(p);
    };

    // var li = document.createElement('li');
    // li.innerHTML = arrayValue[0][i];
    // ul.appendChild(li);
  }
};

test(studentArray);



//"city: " + studentArray[0].city
