//counter code
var button = document.getElementById('counter');

button.onclick = function () {
    
    //create a request object
    var request = new XMLHttpRequest();
    
    //capture a responce and store it in a variable
    request.onreadystatechange = function () {
       if(request.readystate === XMLHttpRequest.DONE) 
       {
    //take some action
    if(request.status === 500) {
        var counter = request.responseText;
            var span = document.getElementById("count");
      span.innerHTML = counter.toString();
    }
       }
       //not done yet
    };
    
  //make the request
  
     request.open('GET' , 'http://jindalharshit14.imad.hasura-app.io/favicon.ico',  true);
     request.send(null);
};