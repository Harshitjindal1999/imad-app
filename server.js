var express = require('express');
var morgan = require('morgan');
var path = require('path');
var pool = require('pg').pool;

var config={
  user: 'jindalharshit14',
  host: 'db.imad.hasura-app.io',
  database: 'jindalharshit14',
  password: 'process.emv.DB_PASSWORD',
  port: 5432,
};

var app = express();
app.use(morgan('combined'));


var articles = {
'article-one': {
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
},
'article-two': {
     title: ' Article two | harshit jindal',
    heading: 'Article two',
    date: 'Aug 4, 2017 6:55 pm',
    content: 
           `<p>
            This s the content of my two article .i known how it is work but i will do because prof. hasura tell me ^^. This s the content of my first article .i known how it is work but i will do because prof. hasura tell me ^^. This s the content of my first article .i known how it is work but i will do because prof. hasura tell me ^^.
                </p>
                 <p>
            This s the content of my two article .i known how it is work but i will do because prof. hasura tell me ^^. This s the content of my first article .i known how it is work but i will do because prof. hasura tell me ^^. This s the content of my first article .i known how it is work but i will do because prof. hasura tell me ^^.
                </p>
                 <p>
            This s the content of my first article .i known how it is work but i will do because prof. hasura tell me ^^. This s the content of my first article .i known how it is work but i will do because prof. hasura tell me ^^. This s the content of my first article .i known how it is work but i will do because prof. hasura tell me ^^.
                </p>`
},
'article-three': {
      title: ' Article three | harshit jindal',
    heading: 'Article three',
    date: 'Aug 4, 2017 6:55 pm',
    content: 
           `<p>
            This s the content of my three article .i known how it is work but i will do because prof. hasura tell me ^^. This s the content of my first article .i known how it is work but i will do because prof. hasura tell me ^^. This s the content of my first article .i known how it is work but i will do because prof. hasura tell me ^^.
                </p>
                 <p>
            This s the content of my two article .i known how it is work but i will do because prof. hasura tell me ^^. This s the content of my first article .i known how it is work but i will do because prof. hasura tell me ^^. This s the content of my first article .i known how it is work but i will do because prof. hasura tell me ^^.
                </p>
                 <p>
            This s the content of my first article .i known how it is work but i will do because prof. hasura tell me ^^. This s the content of my first article .i known how it is work but i will do because prof. hasura tell me ^^. This s the content of my first article .i known how it is work but i will do because prof. hasura tell me ^^.
                </p>`
}
};
function createtemplate (data)  {
    var title = data.title;
    var heading = data.heading;
     var date = data.date;
    var content = data.content;
    
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

var pool = new pool(config);
app.get('/test-db', function (req, res) {
 pool.query('SELECT * FROM test', function(err, result){
     if (err) {
         res.status(500).send(err.toString());
     }else{
          res.send(JSON.stringify(result));
     }
     
 });
});

var counter = 0;
app.get('/counter', function (req, res) {
  counter = counter + 1;
  res.send(counter.toString());
});

var names=[];
app.get('/submit-name', function (req, res) {
    //get the name from the request
    var name=req.query.name;
    
    names.push(name);
    //json: javascript oblect notation
  res.send(JSON.stringify(names));
});

app.get('/:articlename', function (req, res) {
    //articlename == article-one
    //articles[articlename] ==={} content object for article one
  var articlename = req.params.articlename;
  res.send(createtemplate(articles[articlename]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
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
