//counter code
var button = document.getElementById('counter');
var counter = 0;
button.onclick = function () {
    
    //create a request object
    var request=new XMLhttprequest();
    
    //capture a responce and store it in a variable
    request.onreadystatechange = function()
    {
       if(request.readystate ===  XMLhttprequest.DONE)
       {
    //take some action
    if(request.status == 200)
    {
        var counter = request.responceText;
            var span = document.getElementById('count');
      span.innerHTML = counter.toString();
        
    }
       }
       //not done yet
    };
    
  //make the request
  
     request.open('GET','https://imad.hasura-app.io/counter',true);
     request.send(null);
};