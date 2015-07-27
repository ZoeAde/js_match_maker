var getStudent = document.getElementById("students")[1];


for (var i = 0; i < totalStudents; i++) {
    var ul = document.createElement('ul');
    document.body.appendChild(ul);
    test(name);
    test(phone);
    test(city);
  }



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
  for (var i = 0; i < totalStudents; i++) {
    var li = document.createElement('li');
    li.innerHTML = studentArray[i].arrayValue;
    ul.appendChild(li);
}
};

//"city: " + studentArray[0].city
