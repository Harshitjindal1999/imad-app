var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articleone = {
    title: ' Article one | harshit jindal',
    heading: 'Article one',
    date: 'Aug 3, 2017 6:25 pm',
    content: 
           `<p>
            This s the content of my first article .i known how it is work but i will do because prof. hasura tell me ^^. This s the content of my first article .i known how it is work but i will do because prof. hasura tell me ^^. This s the content of my first article .i known how it is work but i will do because prof. hasura tell me ^^.
                </p>
                 <p>
            This s the content of my first article .i known how it is work but i will do because prof. hasura tell me ^^. This s the content of my first article .i known how it is work but i will do because prof. hasura tell me ^^. This s the content of my first article .i known how it is work but i will do because prof. hasura tell me ^^.
                </p>
                 <p>
            This s the content of my first article .i known how it is work but i will do because prof. hasura tell me ^^. This s the content of my first article .i known how it is work but i will do because prof. hasura tell me ^^. This s the content of my first article .i known how it is work but i will do because prof. hasura tell me ^^.
                </p>`
};

function createtemplate (data)  {
    var title=data.title;
    var heading=data.heading;
     var date=data.date;
    var content=data.content;
    
var htmltemplate =
`<html>
    <head>
    <title>
       ${title}
    </title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
        <div>
            <a href="\">Home</a>
        </div>
       <hr />
        <h3>
            ${heading}
        </h3>
        <div>
            ${date}
        </div>
               <div>
                 ${content}
                </div></div>
        <hr />
    </body>
    </html>` 
    ;
    return htmltemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/Article-one', function (req, res) {
  res.send(createtemplate(article-one));
});

app.get('/Article-two', function (req, res) {
 res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/Article-three', function (req, res) {
 res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
