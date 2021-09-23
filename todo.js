function myFunction() {
  var myInput = document.getElementById("myInput").value;
  var ul = document.getElementById("myUL");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(myInput));
  ul.appendChild(li);
    if (myInput === '') {
    alert("You must write something!");
  }
}