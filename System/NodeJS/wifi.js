var requireg = require('requireg')
var http = require('http');
var WiFiControl = requireg('wifi-control');
var express = requireg('express');
var bodyParser = requireg('body-parser');
const wifiPassword = requireg('wifi-password');
var app = express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
  var settings = {
    debug: true || false,
    iface: 'wlp6s0',
    connectionTimeout: 10000 // in ms 
  };
 
  WiFiControl.configure( settings );
  WiFiControl.init( settings ); 

app.post('/wifi-auth-data',function(req,res){
  var user_name=req.body.user;

    if (req.body.password.length==0){
      wifiPassword(user_name).then(password => {
var _ap = {
    ssid: user_name,
    password: password
  };
  var results = WiFiControl.connectToAP( _ap, function(err, response) {
    if (err) console.log(err);
    console.log(response);
            console.log("User name = "+user_name+", password is "+password);
  res.end("yes");
  });

});

} else {
    var _ap = {
    ssid: user_name,
    password: password
  };
  var results = WiFiControl.connectToAP( _ap, function(err, response) {
    if (err) console.log(err);
    console.log(response);
            console.log("User name = "+user_name+", password is "+password);
  res.end("yes");
  });

    var password = req.body.password;
}

      
});
 
app.get('/wifi-scan',function(req,res){

  var ifaceState = WiFiControl.getIfaceState();
    WiFiControl.scanForWiFi( function(err, response) {
    if (err) console.log(err);
    console.log(response);
          res.send(response);
  });
    

});
app.get('/wifi-data',function(req,res){

  var ifaceState = WiFiControl.getIfaceState();
  res.send(ifaceState);
});


app.listen(8000,function(){
  console.log("Started on PORT 8000");
})


 
