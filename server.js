const express = require('express'),
  app = express(),
  http = require('http'),
  auth = require('basic-auth'),
  fs = require('fs'),
  path =  require('path'),
  server = require('http').Server(app);
 // io = require('socket.io')(server),
 // rtsp = require('./rtsp-ffmpeg');


var config;


var sql = require('mssql');
var cors = require('cors');

app.use(cors());
app.options('*', cors());

var proxy = require('http-proxy').createProxyServer({
    host: 'http://login.fams.cc',
    // port: 80
});

// Where fileName is name of the file and response is Node.js Reponse.
function responseFile(filePath, response) {

  fs.exists(filePath, function(exists){
      if (exists) {
        // Content-type is very interesting part that guarantee that
        // Web browser will handle response in an appropriate manner.
        response.writeHead(200, {
          "Content-Type": "application/octet-stream",
          "Content-Disposition" : "attachment; filename=" + file});
        fs.createReadStream(filePath).pipe(response);
      } else {
        response.writeHead(400, {"Content-Type": "text/plain"});
        response.end("ERROR File does NOT Exists");
      }
    });
  };



	server.listen(6147);
console.log("Server listen on: http://localhost:6147");
checkCredentials = function(credentials){
return credentials && ((credentials.name === 'iosif' && credentials.pass === 'test123')||
      (credentials.name === 'taher' && credentials.pass === 'test123'));
}

    app.get('/',function(req,res,next){
      var credentials = auth(req);
      if (checkCredentials(credentials)) {
        config = require('./dist/assets/config-'+credentials.name+'.json');
        next();
      } else {
        res.statusCode = 401
        res.setHeader('WWW-Authenticate', 'Basic realm="example"')
        res.end('Access denied')
      }
    })

app.use('/fams/', function(req, res, next) {
    proxy.web(req, res, {
        target: 'http://login.fams.cc'
    }, next);
});
    app.get('/api/get_employees_stats/:uid',function(req,res){
      console.time('get_employees_stats start');
       sql.connect("mssql://ingress:ingress@192.168.1.51/ReportsAAB").then(function() {
               if(config){
                 for(var i=0;i<config.length;i++){
                   if(config[i].view_id==req.params.uid){
                     console.timeEnd('get_employees_stats end');
                     return new sql.Request().query(config[i].query).then(function(recordset) {
                         res.status(200).json(recordset);
                     }).catch(function(err) {
                        res.json("Error query",err);
                     });
                   }
                 }
               }

               res.status(500).json({error:"Bad request"});
      }).catch(function(err) {
             res.status(500).json({error:err,"type":"DBerror"});
      });

    })

    app.get('/assets/config.json',function(req,res,next){
      var credentials = auth(req)

      if (checkCredentials(credentials)) {
        //responseFile('/public/assets/config.json',res);
        res.sendFile(path.join(__dirname,  './dist/assets/config-'+credentials.name+'.json'));
      } else {
        res.statusCode = 401
        res.setHeader('WWW-Authenticate', 'Basic realm="example"')
        res.end('Access denied')
      }

      //next();
    })
var request = require('request');
      var r = request.defaults({'proxy':'localhost'})

  	// app.use('/fams',function(req,res){
    //   //console.log("request: ",'http://login.fams.cc/fams/'+decodeURI(req.query.url))

    //   request('http://login.fams.cc/fams/'+decodeURI(req.query.url), function (error, response, body) {
    //   if (!error && response.statusCode == 200) {
    //       res.send(body);
    //     }
    //   });

    // });
  	app.use(express.static('dist'));


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
