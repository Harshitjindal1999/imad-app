//counter code
var button = document.getElementById('counter');
var counter = 0;
button.onclick = function () {
    //make a request to the counter endpoint
    
    //capture a responce and store it in a variable
    
    //render a variable in a correct span
    counter = counter + 1;
      var span = document.getElementById('count');
      span.innerHTML = counter.toString();
};