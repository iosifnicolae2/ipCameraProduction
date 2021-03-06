const express = require('express'),
  app = express(),
  http = require('http'),
  auth = require('basic-auth'),
  fs = require('fs'),
  path = require('path'),
  server = require('http').Server(app);
// io = require('socket.io')(server),
// rtsp = require('./rtsp-ffmpeg');


var config;


var sql = require('mssql');
var cors = require('cors');

app.use(cors());
app.options('*', cors());

const http_proxy = require('http-proxy');

var proxy = http_proxy.createProxyServer({
  host: 'http://login.fams.cc',
  // port: 80
});

var proxy2 = http_proxy.createProxyServer({
  host: 'http://localhost:4200',
  // port: 80
});

var proxy3 = http_proxy.createProxyServer({
  host: 'http://cloud.xeoma.com',
  // port: 80
});
//http://admin:12345@aab008-c011.aabtools.com/Streaming/channels/1/picture
var proxy4 = http_proxy.createProxyServer({
  host: 'http://aabtools.com',
  // port: 80
});

// Where fileName is name of the file and response is Node.js Reponse.
function responseFile(filePath, response) {

  fs.exists(filePath, function (exists) {
    if (exists) {
      // Content-type is very interesting part that guarantee that
      // Web browser will handle response in an appropriate manner.
      response.writeHead(200, {
        "Content-Type": "application/octet-stream",
        "Content-Disposition": "attachment; filename=" + file
      });
      fs.createReadStream(filePath).pipe(response);
    } else {
      response.writeHead(400, { "Content-Type": "text/plain" });
      response.end("ERROR File does NOT Exists");
    }
  });
};



server.listen(8081);
console.log("Server listen on: http://localhost:8081");
checkCredentials = function (credentials) {
  var config_users = require('./config_users.json');
  if (!credentials) return false;

  for (let i = 0; i < config_users.length; i++) {
    if (credentials.name === config_users[i].username && credentials.pass === config_users[i].password)
      return config_users[i];
  }
}

app.get('/', function (req, res, next) {
  var credentials = auth(req);
  var user = checkCredentials(credentials)
  if (user) {
    config = require(user.config);
    next();
  } else {
    res.statusCode = 401
    res.setHeader('WWW-Authenticate', 'Basic realm="example"')
    res.end('Access denied')
  }
})
var dev = process.env.NODE_DEV=="true" ||false;
if(dev){
  console.log("This version is for debugging.")
}else{
  console.log("This version is for production.")
}
//only for development
if(dev){
app.get('/',function(req,res,next){
    proxy2.web(req, res, {
    target: 'http://localhost:4200'
  }, next);
})
}
else{
  app.use(express.static('dist'))
}

app.use('/fams/', function (req, res, next) {
  proxy.web(req, res, {
    target: 'http://login.fams.cc'
  }, next);
});

app.use('/xeoma/', function (req, res, next) {
  proxy3.web(req, res, {
    target: 'http://cloud.xeoma.com:10090'
  }, next);
});


app.use('/proxy/:url', function (req, res, next) {
  proxy3.web(req, res, {
    target: req.params.url,
    auth:req.params.auth
  }, next);
});


//http://admin:12345@aab008-c011.aabtools.com/Streaming/channels/1/picture
app.use('/aab/', function (req, res, next) {
  console.log("link",req.query)

  var options = {
    // host to forward to
    host:   req.query.host,
    // port to forward to
    port:   80,
    // path to forward to
    path:   req.query.path,
    // request method
    method: req.query.method,
  };
  var creq = http.request(options, function(cres) {

    // set encoding
    cres.setEncoding('utf8');

    // wait for data
    cres.on('data', function(chunk){
      res.write(chunk);
    });

    cres.on('close', function(){
      // closed, let's end client request as well
      console.log('close')
      res.writeHead(cres.statusCode);
      res.end();
    });

    cres.on('end', function(){
      console.log('end')
      // finished, let's finish client request as well
     // res.writeHead(cres.statusCode);
      res.end();
    });

  }).on('error', function(e) {
    // we got an error, return 500 error to client and log error
    console.log(e.message);
    res.writeHead(500);
    res.end();
  });

  creq.end();


  // proxy4.web(req, res, {
  //   target: req.query.link
  // }, next);
});

app.get('/signout', function (req, res) {
  //res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
  return res.status(401).redirect('/');
})


/**
* Get the ISO week date year number
*/
Date.prototype.getWeekYear = function ()
{
  // Create a new date object for the thursday of this week
  var target  = new Date(this.valueOf());
  target.setDate(target.getDate() - ((this.getDay() + 6) % 7) + 3);

  return target.getFullYear();
}

/**
 * Convert ISO week number and year into date (first day of week)
 */
Date.prototype.getStartFromISOWeek = function() {
  return new Date(this.getFullYear(),0,(this.getWeek()-1)*7)
}
Date.prototype.getEndFromISOWeek = function() {
  return new Date(this.getFullYear(),0,this.getWeek()*7)
}

Date.prototype.getWeek = function() {
// Create a copy of this date object
  var target  = new Date(this.valueOf());

  // ISO week date weeks start on monday
  // so correct the day number
  var dayNr   = (this.getDay() + 15) % 7;

  // ISO 8601 states that week 1 is the week
  // with the first thursday of that year.
  // Set the target date to the thursday in the target week
  target.setDate(target.getDate() - dayNr + 3);

  // Store the millisecond value of the target date
  var firstThursday = target.valueOf();

  // Set the target to the first thursday of the year
  // First set the target to january first
  target.setMonth(0, 1);
  // Not a thursday? Correct the date to the next thursday
  if (target.getDay() != 4) {
    target.setMonth(0, 1 + ((4 - target.getDay()) + 7) % 7);
  }

  // The weeknumber is the number of weeks between the
  // first thursday of the year and the thursday in the target week
  return 1 + Math.ceil((firstThursday - target) / 604800000); // 604800000 = 7 * 24 * 3600 * 1000                   - 3 + (week1.getDay() + 6) % 7) / 7);
}
app.get('/api/get_employees_stats/:uid', function (req, res) {
  console.time('get_employees_stats');
  var year = req.query.year,
    week = req.query.week,
    today = new Date();

  if (typeof year == 'undefined' || year < 0) {
    year = today.getFullYear();
  }
  if (typeof week == 'undefined' || week < 0) {
    week = today.getWeek();
  }

 // console.log("Year and week: ",year,week);
  // if(dev){
  //   var recordset = require('./sample-datadb.js');

  //            recordset['startWeek'] = today.getStartFromISOWeek();
  //           recordset['endWeek'] = today.getEndFromISOWeek();
  //            recordset['week'] = week;
  //           recordset['year'] = year;
  //   return res.status(200).json(recordset);
  // }
//console.log("config[i].query(year, week)",config[5].query(year, week));
//console.log(config)
  sql.connect("mssql://ingress:ingress@192.168.1.51/ReportsAAB").then(function () {
    if (config) {
      for (var i = 0; i < config.length; i++) {
        if (config[i].view_id == req.params.uid) {
console.log("query:",config[i].query(year, week));
          return new sql.Request().query(config[i].query(year, week)).then(function (recordset) {
var r = {};
            console.timeEnd('get_employees_stats');
            r['startWeek'] = today.getStartFromISOWeek();
            r['endWeek'] = today.getEndFromISOWeek();
            r['week'] = week;
            r['year'] = year;
            r['employees'] = recordset;


            res.status(200).json(r);
          }).catch(function (err) {
            res.json("Error query", err);
          });
        }
      }
    }

    res.status(500).json({ error: "Bad request" });
  }).catch(function (err) {
    res.status(500).json({ error: err, "type": "DBerror" });
  });

})

app.get('/assets/config.json', function (req, res, next) {
  var credentials = auth(req)

  if (checkCredentials(credentials)) {
    //responseFile('/public/assets/config.json',res);
    if(dev){
      return res.json(require(path.join(__dirname, './src/assets/config-' + credentials.name + '.js')));
    }
    res.json(require(path.join(__dirname, './dist/assets/config-' + credentials.name + '.js')));
  } else {
    res.statusCode = 401
    res.setHeader('WWW-Authenticate', 'Basic realm="example"')
    res.end('Access denied')
  }

  //next();dist
})
var request = require('request');
var r = request.defaults({ 'proxy': 'localhost' })

// app.use('/fams',function(req,res){
//   //console.log("request: ",'http://login.fams.cc/fams/'+decodeURI(req.query.url))

//   request('http://login.fams.cc/fams/'+decodeURI(req.query.url), function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//       res.send(body);
//     }
//   });

// });
if(dev){

app.use('/',function(req,res,next){
    proxy2.web(req, res, {
    target: 'http://localhost:4200'
  }, next);
});
}else{
app.use(express.static('dist'));
}


      // io.on('connection', function(socket) {
      //   console.log("connect");
      //   var  stream = new rtsp.FFMpeg({
      //     input: socket.request._query.link||'rtsp://aab007.selfip.org/media/video1', // stream uri
      //      rate: 3 // output framerate (optional)
      //     //, resolution: '640x480' // output resolution in WxH format (optional)
      //     //, quality: 2 // JPEG compression quality level (optional)
      //   });

      //   var pipeStream = function(data){
      //       socket.emit('data', data.toString('base64'));
      //   }

      //   stream.on('data', pipeStream);

      //   socket.on('disconnect', function() {
      //     console.log("disconnect")
      //   stream.removeListener('data', pipeStream);
      //   });

      // });
