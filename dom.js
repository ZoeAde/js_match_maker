function test(array) {
  for (var i = 0; i < array.length; i++) {
    // var h3 = document.createElement('h3');
    // h3.innerHTML = array + [i+1];
    // document.body.appendChild(h3);
    for (key in array[i]) {
      var p = document.createElement('p');
      p.innerHTML = key + ": " + array[i][key];
      document.body.appendChild(p);
    }
  }
}

test(peopleArray);


